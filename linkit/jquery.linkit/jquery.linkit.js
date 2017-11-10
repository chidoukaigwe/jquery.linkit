/*
* name: Chido Ukaigwe
* Version: 0.1.0
*License : MIT
*/

/*
fn literally refers to the jquery prototype.

This line of code is in the source code:

jQuery.fn = jQuery.prototype = {
 //list of functions available to the jQuery api
}
But the real tool behind fn is its availability to hook your own functionality into jQuery. Remember that jquery will be the parent scope to your function, so this will refer to the jquery object.
*/

(function($){
  $.fn.linkit = function(options){
    //Default Settings
    var settings = $.extend({
      href: null,
      text: null,
      target: '_self'
    }, options);

    //Validation
    if(settings.href == null){
      console.log('You need an href option for Linkit to work');
      return this;
    }
    //This would happen for each element that you would attach this plugin to
    return this.each(function(){
      var object = $(this);
    // So if the settings for the text option has not been set - we will test using a conditional - we will then assign the text option value to the jquery objects text *so whatever jquery is selecting* -
      if(settings.text === null){
        settings.text = object.text();
      }
      object.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
    });



  }
}(jQuery));
