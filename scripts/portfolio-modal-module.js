/*
============================================
; Title: Portfolio Modal module
; Author: Troy Martin
; Date: 04/30/2019
; Modified By: Troy Martin
; Description: Module that handles the modal window for the portfolio
;===========================================
*/
// start program

// variable declaration and assignment

// Declare the links module to the anonymous closure, set the exports as the public interface to be returned
var portfolioModalModule = (function(exports){

  /*
  ; Params: none
  ; Response: undefined
  ; Description: Function to apply links or visibility to various elements that do not have an href.
  */
  exports.apply = function(){
    // Set the click event to send an email
    $("#bioSite").on("click",function(){
      $("#modalTitle").html("Bio site")
      $('#portfolioModal').modal('show');
    });

    // Set the click event to open to the GitHub url in a new window
    $("#bioPrototype").on("click",function(){

    })

    // Set the click event to open the linkedin profile in a new window
    $("#javascriptOne").on("click",function(){

    })

    // Set the click event on the portfolio option to show the portfolio and hide the other sections
    $("#portfolioPrototype").on("click",function(){

    })

    // Set the click event on the about option to show the about section and hide the other sections
    $("#javascriptTwo").on("click",function(){

    })

  };

  // return the exports object to expose the public methods and variables
  return exports;
// will create the linksModule or an empty object
}(portfolioModalModule || {}));

// end program
