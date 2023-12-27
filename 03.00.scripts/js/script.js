$(function() {

  // CSS SELECTORS
  // modify css
  // $('p').css('background-color', 'rgba(180, 180, 30, 0.8)');
  // $('.red-box').css('background-color', 'rgba(180, 180, 30, 0.8)');
  // $('#list').css('background-color', 'rgba(180, 180, 30, 0.8)');
  // $('input[type="text"]').css('background-color', 'rgba(180, 180, 30, 0.8)');

  // multiple different types of elements at once
  // $('h2, p, input').css('background-color', 'rgba(180, 180, 30, 0.8');
  
  // first paragraph, last list item, evens, ...
  // $('p:first').css('background-color', 'rgba(180, 180, 30, 0.8)');
  // $('li:last').css('background-color', 'rgba(90, 90, 15, 0.4)')
  // $('li:even').css('background-color', 'rgba(200, 90, 15, 0.4)')
  
  // selectors
  // $('input:text').css('background-color', 'rgba(180, 180, 30, 0.8)');
  // $('input:selected') or $('input:checked') for radio/multi-select buttons

  
  // TRAVERSAL METHODS
  // find
  // $('#list').find('li').css('background-color', 'rgba(180, 180, 30, 0.8)');

  // lists
  // $('#list').children('li').css('background-color', 'rgba(180, 180, 30, 0.8)');
  // $('#list').parents('div').css('background-color', 'rgba(180, 180, 30, 0.8)');
  // $('#list').siblings('p').css('background-color', 'rgba(180, 180, 30, 0.8)');
  
  // headers
  // $('#list').siblings(':header').css('background-color', 'rgba(180, 180, 30, 0.8)');
  
  // previous/next
  // $('#list').prev().css('background-color', 'rgba(180, 180, 30, 0.8)');
  // $('#list').next().css('background-color', 'rgba(180, 180, 30, 0.8)');

  // CHALLENGE
  // 1) direct next elements after a header
  // $(':header').next().css('background-color', 'rgba(180, 180, 30, 0.8)');
  
  // 2) input child elements of a form input
  // $('form').children().css('background-color', 'rgba(180, 80, 30, 0.8)');


  // FILTERING
  // even list elements
  // $('#list').find('li').filter(':even').css('background-color', 'rgba(180, 180, 30, 0.8)');

  // filtering with a function - applies to each found element iteratively
  // $('li').filter(function(ix) {
  //   return ix % 6 === 0;
  // }).css('background-color', 'rgba(180, 180, 30, 0.8)')

  // select element by position
  // $('li').first().css('background-color', 'rgba(180, 180, 30, 0.8)')
  // $('li').last().css('background-color', 'rgba(180, 180, 30, 0.8)')
  // $('li').eq(2).css('background-color', 'rgba(180, 180, 30, 0.8)')  // grab the 3rd element
  // $('li').eq(-2).css('background-color', 'rgba(180, 180, 30, 0.8)')  // grab the element at the 2nd to last element

  // not
  $('li').not(':first').css('background-color', 'rgba(180, 180, 30, 0.8)')  // grab all but first element

});