$(function() {
  // CLICK HANDLERS
  // $('#btn-click').click(function(event) {
  //   console.log(event);
  //   alert('button was clicked');
  // });

  // CHALLENGE - click red box and it fades to 50% opacity
  let redBox = $('.red-box');
  redBox.on('click', function() {
    $(this).fadeTo(500, 0.5);
  })
  
  // HOVER
  // $('#btn-hover').hover(function() {  // activates when button enters element and again when it leaves
  //   alert('button was hovered over');
  // });

  // CHALLENGE - hovering over green box changes text
  let greenBox = $('.green-box');
  greenBox.hover(
    function() {
      $(this).stop().text('You are hovering over me');
    },
    function() {
      $(this).stop().text('Green');
    }
  )
  
  // MOUSEENTER AND MOUSELEAVE
  // let blueBox = $('.blue-box');
  // blueBox.mouseenter(function() {
  //   $(this).stop().fadeTo(500, 0.7);
  // });
  // blueBox.mouseleave(function() {
  //   $(this).stop().fadeTo(500, 1);
  // });
  // use .stop() to ensure the animation doesn't queue up if you hover/un-hover many times in rapid succession

  // hover(handlerIn, handlerOut), where handlerIn/Out are functions that dictate what should happen when mouse enters/leaves an element

  // CHALLENGE - rewrite mouseenter/mouseleave function using the .hover(handlerIn, handlerOut) func
  let blueBox = $('.blue-box');
  blueBox.hover(
    function() {
      $(this).stop().fadeTo(500, 0.7);
    },
    function() {
      $(this).stop().fadeTo(500, 1);
    }
  );


  // SAME HANDLER FOR MULTIPLE EVENTS - .on()
  // $('html').on('click keydown', function() {
  //   console.log('Mouse was clicked OR key was pressed');
  // });

  // CHALLENGE - switch image in gallery when clicked
  // let galleryImg = $('.gallery img');
  let images = [
    'images/laptop-mobile_small.jpg',
    'images/laptop-on-table_small.jpg',
    'images/people-office-group-team_small.jpg'
  ];
  // let i = 0;
  // galleryImg.on('click', function() {
  //   i += 1;
  //   index = i % 3;
  //   $(this).attr('src', images[index])
  // });


  // MODULARIZING EVENT FUNCTIONS
  // function logEvent() {
    // console.log('Mouse was clicked or key was pressed');
  // };
  // $('html').on('click keydown', logEvent);


  // DELEGATED EVENTS
  // PROBLEM - event handles only apply to elements that exist on the page. If you add new elements with functions, they won't have event handlers
  // ex.
  // $('p').click(function() {
  //   $(this).slideUp();
  // });
  // $('#content').append('<p>This is a dynamically added paragraph</p>');  // this new paragraph won't have any event handlers!
  
  // Delegated Events - Add event handler to parent element and it will be passed to children
  // Delegate click event handler to all paragraph element children of the content div
  $('#content').on('click', 'p', function() {
    $(this).slideUp();  // this refers to the <p> tag now
  });
  $('#content').append('<p>This is a dynamically added paragraph</p>');  // this new paragraph won't have any event handlers!

  // CHALLENGE - add an event handler to body tag that delegates to <li> s.t. when a mouse enters, the color is changed
  // $('body').on('mouseenter', 'li',
  //   function() {
  //     $(this).stop().css('background-color', '#abcdef');
  //   });
  // $('body').on('mouseleave', 'li',
  //   function() {
  //     $(this).stop().css('background-color', '#fff');
  //   });


  // PASS ADDITIONAL DATA TO EVENT
  $('#btn-click').click({
    user: 'Max'
  }, function(event) {
    greetUser(event.data);
  });

  function greetUser(userdata) {
    let username = userdata.user || 'Anonymous';
    alert(`Welcome back ${username}!`);
  };


  // CODE-ALONG - Image gallery + lightbox preview
  let galleryItems = $('.gallery').find('img');
  galleryItems.css('width', '32%').css('opacity', '0.7');
  
  galleryItems.mouseenter(function() {
    $(this).stop().fadeTo(500, 1);
  });
  galleryItems.mouseleave(function() {
    $(this).stop().fadeTo(500, 0.7);
  });
  galleryItems.on('click', function() {
    let source = $(this).attr('src');
    let image = $('<img>').attr('src', source).css('width', '100%');
    $('.lightbox').empty().append(image).stop().fadeIn(2000);
  });
  // CHALLENGE - add event handler so you can click away from lightbox
  $('.lightbox').on('click', function() {
    $(this).stop().fadeOut(500);
  });


  // KEYBOARD EVENTS
  $('html').keydown(function(event) {
    // console.log(typeof(event.which));
    // console.log(event.which);  // get key code
  });

  // CHALLENGE - blue box moves right by 10px every time you press right arrow key (use margin-left propety)
  blueBox = $('.blue-box');
  $('html').keydown(function(event) {
    if (event.which === 39) {
      console.log('Moving the blue box');
      blueBox.css('margin-left', '+=10px');
    }
  })
});