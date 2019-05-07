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
  ; Description: Function to hide the site link.
  */
   function hideSiteLink(){
    $("#modalLink").off("click");
    $("#modalLink").hide();
  }

  /*
  ; Params: none
  ; Response: undefined
  ; Description: Function to display the site link.
  */
  function showSiteLink(){
    $("#modalLink").show();
  }

  /*
  ; Params: selector: string, url: string, target: string (default = _blank)
  ; Response: undefined
  ; Description: Function to apply click event to the specified selector, opening a url to a specified target.
  */
  function setLink(selector, url, target = "_blank"){
    $(selector).off("click").on("click", function(){
      displayModal(false);
      window.open(url, target);
    })
  }

  /*
  ; Params: url: string, target: string (default = _blank)
  ; Response: undefined
  ; Description: Function to apply click event to #modalLink, opening a url to a specified target.
  */
  function setSiteLink(url, target = "_blank" ){
    setLink("#modalLink", url, target);
  }

  /*
  ; Params: url: string, target: string (default = _blank)
  ; Response: undefined
  ; Description: Function to apply click event to #modalGitHubLink, opening a url to a specified target.
  */
  function setGitHubLink(url, target = "_blank"){
    setLink("#modalGitHubLink", url, target);
  }

  /*
  ; Params: title: string
  ; Response: undefined
  ; Description: Function to set the modal title.
  */
  function setModalTitle(title){
    $("#modalTitle").html(title)
  }

  /*
  ; Params: body: string
  ; Response: undefined
  ; Description: Function to set the modal body.
  */
  function setModalBody(body){
    $("#modalBody").html(body);
  }

  /*
  ; Params: display: boolean
  ; Response: undefined
  ; Description: Function show and hide the modal dialog.
  */
  function displayModal(display){
    $('#portfolioModal').modal(display ? "show" : "hide");
  }

  /*
  ; Params: none
  ; Response: undefined
  ; Description: Function to apply links or visibility to various elements that do not have an href.
  */
  exports.apply = function(){

    // Set the click event to display the dialog for the Bio Site
    $("#bioSite").on("click",function(){
      setModalTitle("Bio site");
      setModalBody("<ul><li>Custom HTML and CSS</li></ul>");

      showSiteLink();
      setSiteLink("https://martintroye.github.io/biosite/");
      setGitHubLink("https://github.com/martintroye/biosite");

      displayModal(true);
    });

    // Set the click event to display the dialog for the Bio Site Prototype
    $("#bioPrototype").on("click",function(){

    })

    // Set the click event to display the dialog for Enterprise JavaScript I
    $("#javascriptOne").on("click",function(){
      setModalTitle("Enterprise JavaScript I");
      setModalBody("<ul><li>Node.js</li></ul>");

      hideSiteLink();
      setGitHubLink("https://github.com/martintroye/web-231/");

      displayModal(true);
    })

    // Set the click event to display the dialog for the Portfolio Prototype
    $("#portfolioPrototype").on("click",function(){

    })

    // Set the click event to display the dialog for Enterprise JavaScript II
    $("#javascriptTwo").on("click",function(){
      setModalTitle("Enterprise JavaScript I");
      setModalBody("<ul><li>Node.js</li><li>Express</li></ul>");

      hideSiteLink();
      setGitHubLink("https://github.com/martintroye/web-330/");

      displayModal(true);
    })

  };

  // return the exports object to expose the public methods and variables
  return exports;
// will create the linksModule or an empty object
}(portfolioModalModule || {}));

// end program
