console.log('jonny book success!');

$(document).ready(function(){

  teamAppend();
  getLikes();

  console.log('jquery success');

  $('#usContainer').on('click', 'img', function(){
    var teamLikeObject = {};
    teamLikeObject.like = 1;

    var person = $(this).attr('id');
    // var person = 'jonny';

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
          $('#usContainer').append('<div id="' + response[i].name + 'Div">');
          $('#' + response[i].name + 'Div').append('<h1>' + response[i].name + '</h1>');
          $('#' + response[i].name + 'Div').append('<p>' + response[i].bio + '</p>');
          $('#' + response[i].name + 'Div').append('<div class="image"><img src="' + response[i].image + '"></div>');
          $('#' + response[i].name + 'Div').append('<h3>likes: <span id="' + response[i].name + 'Counter">0</span></h3>')
          $('#' + response[i].name + 'Div').append('<img src="../assets/images/thumbs-up.png" id="' + response[i].name +'"></button>')
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
        $('#jonnyCounter').text(response.jonny);
        $('#paigeCounter').text(response.paige);
        $('#samCounter').text(response.sam);
        $('#christineCounter').text(response.christine);
      }
    })
  } // end getLikes function

}); // end document ready
