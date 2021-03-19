// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.

// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', '3438d48498f7198180b80686e16b39d8476d128c');
});

// Put your campus prefix here
window.CAMPUS = 'hr-sfo';
