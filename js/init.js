(function($){
  $(function(){

       $('.button-collapse').sideNav({menuWidth: 300});
       $(".dropdown-button").dropdown();
       $( "button" ).removeClass( "fc-prev-button fc-button fc-state-default fc-corner-left" ).addClass( "waves-effect waves-light btn grey lighten-3" );
       $( "div.fc-right" ).addClass( "hide-on-med-and-down" );
  }); // end of document ready
})(jQuery); // end of jQuery name thing
