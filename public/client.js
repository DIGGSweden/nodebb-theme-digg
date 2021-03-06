/*
Hey there!

This is the client file for your theme. If you need to do any client-side work in javascript,
this is where it needs to go.

You can listen for page changes by writing something like this:

  $(window).on('action:ajaxify.end', function(data) {
    var	url = data.url;
    console.log('I am now at: ' + url);
  });
*/
require(["tabbing"], (tabbing) => {

    $(document).ready(function () {
        $(window).on('action:ajaxify.end', function (event, data) {

            if (data.title === '[[pages:home]]') {
                $('.digg-image').show();
                $('.digg-divider').hide();
            } else {
                $('.digg-image').hide();
                $('.digg-divider').show();
            }

            tabbing();
        });
    });
})