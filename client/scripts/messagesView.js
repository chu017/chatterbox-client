var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // $('form').append($('<div class="messeage-container"></div>'));
    // $('body').append('<div id="chats"></div>');
    // $('body').append('<div class"test">test element</div>')
  },

  render: function() {
    // add an event handler that actives on click for the submit button
    // update webpage with new DOM elements
  },

  renderMessage: function(message) {
    $('#chats').append(MessageView.render(message));
    // MessagesView.render();
  },

  // handleMessageClick: function() {
  //   $(this).on('click', (event) => {

  //   });
  // }
};