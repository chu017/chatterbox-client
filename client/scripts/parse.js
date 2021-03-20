var Parse = {

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  create: function(message, successCB, errorCB = null) {
    // todo: save a message to the server
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to create messages', error);
      }
    });

    // check if the room you want to create a message in already exists or not
    // if not, add room name to list of rooms
    let foundRoom = false;
    $('#rooms select option').each((index, value) => {
      if ($(value).text() === message.roomname) {
        foundRoom = true;
      }
    });
    if (!foundRoom && message.roomname !== undefined) {
      $('#rooms select').append($(`<option>${message.roomname}</option>`));
    }
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};