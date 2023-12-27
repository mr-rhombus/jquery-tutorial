$(function() {
  
  // ADDING NEW ELEMENTS
  
  // appending
  // $('ul ul').first().append('<li>I am now the last sub-item</li>');
  // $('<li>I am now the last sub-item</li>').appendTo($('ul ul').first());

  // prepend
  // $('ul ul').first().prepend('<li>I am now the first sub-item</li>');
  // Can also do the same with prependTo

  // add a sibling
  // $('.red-box').after('<div class="red-box">Another Red</div>');
  // $('.blue-box').before('<div class="blue-box">A Blue Friend</div>');

  // add elements with a function
  // $('.blue-box').before(function() {
  //   return "<div class='blue-box'>Blue 2</div>"
  // });
  
  // add in elements directly (that already exist in the DOM)
  // $('.blue-box').before($('.red-box'));

  // CHALLENGE - add more boxes


  // REPLACING ELEMENTS
  // one at a time
  // $('li').replaceWith('<li>Replaced</li>')  // replace all top level bullets
  // $('p').first().replaceWith($('li').first())  // replace first paragraph with first bullet/sub-bullet element

  // CHALLENGE - replace red and blue boxes with a green box

  // all at once
  // $('<div class="green-box">Replacement green</div>').replaceAll('.red-box, .blue-box');


  // REMOVE
  // $('li').remove();  // complete removal

  // CHALLENGE - remove all direct children of the form which are NOT text area, input type = text or <br>

  // let detachedListItem = $('li').detach();  // retain event handlers
  // $('#content').append(detachedListItem);

  $('p').first().empty();  // element still exists in DOM, but doesn't contain content or child tags

  // CHALLENGE - empty all boxes on the page so they don't have text inside



  // MANIPULATING ATTRS AND PROPERTIES
  // attr func
  let specialLink = $('#link');
  console.log('link href', specialLink.attr('href'));  // return the href attr value
  specialLink.attr('href', 'my-website.com');
  console.log('updated link attr:', specialLink.attr('href'));  // change the href attr value

  // prop
  let tldrRadio = $('#tldr-radio');
  console.log('tldr checked?', tldrRadio.prop('checked'));  // is the TLDR radio button selected by default?

  // val - get value of input element
  let textInput = $('input:text');
  console.log('text input:', textInput.val());
  let sliderSelection = $('input[type="range"]');
  console.log('slider default:', sliderSelection.val());

  // ACTIVITY - create an image slideshow
  let galleryImage = $('.gallery').find('img').first();
  let images = [
    'images/laptop-mobile_small.jpg',
    'images/laptop-on-table_small.jpg',
    'images/people-office-group-team_small.jpg',
  ];
  let i = 0;
  setInterval(function() {  // js-native function
    i = (i + 1) % images.length;  // 0, 1, 2, 0, 1, 2, ...
    galleryImage.fadeOut(function() {
      $(this).attr('src', images[i]);
      $(this).fadeIn();
    });
  }, 2000);
});