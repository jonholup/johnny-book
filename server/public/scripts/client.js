console.log('jonny book success!');

$(document).ready(function(){

  teamAppend();
  // getLikes();

  console.log('jquery success');

  $('#usContainer').on('click', 'button', function(){
    var teamLikeObject = {};
    teamLikeObject.like = 1;

    var person = $(this).attr('id');

    $.ajax({
      type: 'POST',
      url: '/likes/' + person,
      data: teamLikeObject,
      success: function(response){
        console.log(response);
        getLikes();
      }
    });
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
          $('#usContainer:last-child').append('<h3>Number of likes: <span id="' + response[i].name + 'Counter">0</span></h3>')
          $('#usContainer:last-child').append('<button id="' + response[i].name +'">+1</button>')
          // NOTE: dynamically append buttons
        }

        // getLikes();
        // getLikes(response[i].name)

      }
    })
  } // end jonnyFunction

  function getLikes() {
    $.ajax({
      type: 'GET',
      url: '/likes',
      success: function(response) {
        $('#jonnyCounter').text(response.jonny);
        $('#paigeCounter').text(response.paige);
        $('#samCounter').text(response.sam);
        $('#christineCounter').text(response.christine);
      }
    })
  } // end getLikes function

}); // end document ready
