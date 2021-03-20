var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    console.log('hello jack');
    // Stop the browser from submitting the form
    // event.preventDefault();
    $('.submit').on('click', (event) => {
      // create a jquery object of the text passed in to the text box
      // append the new object to the #chats element

      debugger;
      let message = {
        username: 'test username',
        text: $('#message').val()
      };

      $('#chats').append(MessageView.render(message));
    });

    console.log('click!');

    // possible error 1: line 25 is an asynchronous call which leads to an error
    // possible error 2: handleSubmit is completely synchronous, so the error happens after
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};