console.log('jonny book success!');

$(document).ready(function(){

jonnyFunction();
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

  function jonnyFunction() {
    $.ajax({
      type: 'GET',
      url: '/bios',
      success: function(response) {
        $('#jonny').append('<h1 id="name">' + response[0].name + '</h1>');
        $('#jonny').append('<p id="bio">' + response[0].bio + '</p>');
        $('#jonny').append('<a id="url" href=" ">' + response[0].url + '</a>');
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
