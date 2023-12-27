// fading
// $(function() {
//   // $('.red-box').fadeOut(2000);
//   // $('.green-box').fadeOut(2000);

//   // $('.red-box').fadeIn(2000);

//   // $('.red-box').fadeTo(1000, 0.5);

//   // fade challenge
//   $('.red-box').fadeTo(2000, 0.2);
//   $('.green-box').fadeTo(2000, 0.5);
//   $('.blue-box').fadeTo(2000, 0.8);

//   $('.blue-box').fadeToggle();
//   $('.blue-box').fadeToggle();
// });


// show/hide
// $(function() {
//   $('.blue-box').hide();
//   $('.blue-box').show();
// });


// sliding
// $(function() {
//   $('.blue-box').slideUp(2000);
//   $('.blue-box').slideDown(1000);
//   $('.red-box').slideUp(1000);
//   $('.red-box').slideDown(2000);
//   $('p').slideDown(1000);
//   $('.green-box').slideToggle(2000);
//   $('.green-box').slideToggle(2000);
// });


// moving elements
// $(function() {
//   $('.blue-box').animate({
//     'margin-left': '+=200px',
//   }, 1000);  // object, time, speed
//   $('.blue-box').animate({
//     'margin-left': '-=200px',
//   }, 1000, 'linear');
// });


// custom animations - can't use colors
// $(function() {
//   $('.blue-box').animate({
//     'margin-left': '+=200px',
//     'opacity': 0,
//     'height': '50px',
//     'width': '50px',
//     'margin-top': '+=25px',
//   }, 1000),
//   $('p').animate({
//     'font-size': '20px',
//   })
// });


// delaying and chaining actions
// $(function() {
//   $('.red-box').fadeTo(1000, 0.2);
//   $('.green-box').delay(1000).fadeTo(1000, 0.5);
//   $('blue-box').delay(2000).fadeTo(1000, 0.8);
// });


// callback functions
// $(function() {
//   $('.red-box').fadeTo(1000, 0, () => {
//     $('.green-box').fadeTo(1000, 0, () => {
//       $('.blue-box').fadeTo(1000, 0);
//     });
//   });
// });


// exercise: signup lightbox
$(function() {
  $('.lightbox').fadeIn(1000);
});
