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

// function declaration

/*
; Params: linksModule
; Response: undefined
; Description: Anonymous function declaring module
*/
var linksModule = (function(exports){

  exports.apply = function(){
    $("#emailLink").on("click",function(){
      document.location.href = "mailto:troyemartin@gmail.com";
    })

    $("#gitHubLink").on("click",function(){
      window.open("https://github.com/martintroye", "_blank");
    })

    $("#linkedInLink").on("click",function(){
      window.open("https://www.linkedin.com/in/troy-martin-52713b45/", "_blank");
    })

    $("#portfolioSection").on("click",function(){
      $("#portfolio").show();
      $("#about").hide();
      $("#skills").hide();
    })

    $("#aboutMeSection").on("click",function(){
      $("#portfolio").hide();
      $("#about").show();
      $("#skills").hide();
    })

    $("#skillsSection").on("click",function(){
      $("#portfolio").hide();
      $("#about").hide();
      $("#skills").show();
    })


  }

  return exports;

}(linksModule || {}));




// end program
