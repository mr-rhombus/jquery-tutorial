// AJAX
$(function () {
  // FETCH SERVER FILES - $.load()
  // $('#code').load('js/script.js');  // look for this file on the server (i.e. my machine in this case) and show it in a code element

  // $('#code').load('idontexist.php', function(response, status) {
  //   if (status === 'error') {
  //     alert('could not find idontexist.php');
  //   }
    // console.log(response);
  // });

  // $('#code').load('js/script.js', function(response, status) {
  //   if (status === 'error') {
  //     alert('could not find file');
  //   }
  //   console.log(response);
  // });


  // RETRIEVE IMAGES FROM FLICKR API - $.getJSON()
  let flickrAPIUrl = 'https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';  // ?jsoncallback=? = "JSON P" format, allows us to make the request to the flickr domain server

  $.getJSON(flickrAPIUrl, {  // async call
    // options
    tags: 'sun, beach',
    tagmode: 'any',
    format: 'json'
  }).done(function(data) {  // event handler to execute when request is successful
    $.each(data.items, function(index, item) {
      console.log(item);
      $('<img>').attr('src', item.media.m).appendTo('#flickr');
      if (index === 4) {  // just keep 5 images
        return false;
      }
    })
  }).fail(function() {  // event handler if request fails
    alert('AJAX call failed');
  });
});