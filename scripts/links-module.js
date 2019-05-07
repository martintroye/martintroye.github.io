/*
============================================
; Title: Links module
; Author: Troy Martin
; Date: 04/30/2019
; Modified By: Troy Martin
; Description: Module that handles the links of the site
;===========================================
*/
// start program

// variable declaration and assignment

// Declare the links module to the anonymous closure, set the exports as the public interface to be returned
var linksModule = (function(exports){

  /*
  ; Params: none
  ; Response: undefined
  ; Description: Function to apply links or visibility to various elements that do not have an href.
  */
  exports.apply = function(){
    $(".emailLink").on("click", function(){
      window.location.href = "mailto:troyemartin@gmail.com";
    });

    $(".linkedInLink").on("click", function(){
      window.open("https://www.linkedin.com/in/troy-martin-52713b45/","_blank");
    });

    $(".gitHubLink").on("click", function(){
      window.open("https://github.com/martintroye","_blank");
    });

    // Set the click event on the portfolio option to show the portfolio and hide the other sections
    $(".portfolioLink").on("click",function(){
      $("#portfolio").show();
      $("#about").hide();
      $("#skills").hide();
    })

    // Set the click event on the about option to show the about section and hide the other sections
    $(".aboutMeLink").on("click",function(){
      $("#portfolio").hide();
      $("#about").show();
      $("#skills").hide();
    })

    // Set the click event on the skills option to show the skills section and hide the other sections
    $(".skillsLink").on("click",function(){
      $("#portfolio").hide();
      $("#about").hide();
      $("#skills").show();
    })

  };

  // return the exports object to expose the public methods and variables
  return exports;
// will create the linksModule or an empty object
}(linksModule || {}));

// end program
