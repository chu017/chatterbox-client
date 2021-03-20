var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function() {

  },

  renderMessage: function(message) {
    $('#chats').append(MessageView.render(message));
  }

};

/*

1. GET https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/:campus
2. POST https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/:campus

*/