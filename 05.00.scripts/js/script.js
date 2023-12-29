$(function() {
  $('.gallery').css('display', 'none');
  
  // CHANGING CSS PROPERTIES OF ELEMENTS

  // let redBox = $('.red-box');
  // console.log(redBox.css('width'));
  // console.log(redBox.width());  // no unit

  // redBox.css('background-color', '#aa7700');
  // $('p').css('font-size', '18px');
  // redBox.css('width', '+=20px');

  // let properties = $('p').css(['font-size', 'line-height', 'color']);
  // console.log('properties\n', properties);

  // redBox.css('user-select', 'none');  // disable text selection


  // ADD/REMOVE CSS CLASS
  // $('a').addClass('fancy-link');  // single class
  // $('p').first().addClass('large emphasize');  // multiple classes

  // dynamically add classes (inspect page to view)
  // $('li li').addClass(function(index) {
  //   $(this).addClass('item-' + index);
  // });

  // remove class
  // $('.red-box').removeClass('red-box');  // no longer a red box

  // switch between classes
  // $('.red-box').removeClass('red-box').addClass('blue-box');

  // CHALLENGE - select dummy element and replace dummy class with green box
  // $('.dummy').removeClass('dummy').addClass('green-box');


  // CHANGE ELEMENT DATA
  // let gallery = $('.gallery');
  // let images = [
  //   'images/laptop-mobile_small.jpg',
  //   'images/laptop-on-table_small.jpg',
  //   'images/people-office-group-team_small.jpg',
  // ];
  // gallery.data('availableImages', images);
  // console.log('avail images:', gallery.data('availableImages'));
  // gallery.data('name', 'The Awesome Gallery');
  // console.log('all gallery data\n', gallery.data());

  // // remove data
  // gallery.removeData('name');

  // // data attributes - data stored within an element tag
  // let firstPar = $('p').first()
  // console.log('first paragraph data\n', firstPar.data());

  
  // RETRIEVE AND CHANGE ELEMENT CONTENT
  
  // // text
  // let firstPar = $('p').first();
  // console.log('first par text:', firstPar.text())
  // console.log('first par html:', firstPar.html())

  // // change text
  // firstPar.text('<strong>Hello</strong> World!');
  
  // // change html
  // firstPar.html('<strong>Hello</strong> World!');

  // CHALLENGE - append some extra text to the first paragraph
  let firstPar = $('p').first();
  firstPar.text(firstPar.text() + ' ' + 'And here is some new text at the end of the first paragraph');
});