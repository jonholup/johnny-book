console.log('jonny book success!');

$(document).ready(function(){

teamAppend();
getLikes();

  console.log('jquery success');

  $('#likes').on('click', function(){
    var jonnyLikeObject = {};
    jonnyLikeObject.like = 1;
    $.ajax({
      type: 'POST',
      url: '/likes/jonny',
      data: jonnyLikeObject,
      success: function(response){
        console.log(response);
        getLikes();
      }
    })
  }); // end #likes on click

  function teamAppend() {
    $.ajax({
      type: 'GET',
      url: '/bios',
      success: function(response) {
        for (var i = 0; i < response.length; i++) {
          $('#usContainer').append('<div id="' + response[i].name + '">');
          $('#usContainer:last-child').append('<h1>' + response[i].name + '</h1>');
          $('#usContainer:last-child').append('<p>' + response[i].bio + '</p>');
          $('#usContainer:last-child').append('<img src="' + response[i].image + '">');
          // NOTE: dynamically append buttons
        }

      }
    })
  } // end jonnyFunction

  function getLikes() {
    $.ajax({
      type: 'GET',
      url: '/likes',
      success: function(response) {
        $('#numberOfLikes').text(response.jonny);
      }
    })
  } // end getLikes function

}); // end document ready
