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
    // remove the click event and hide the link
    $("#modalLink").off("click");
    $("#modalLink").hide();
  }

  /*
  ; Params: none
  ; Response: undefined
  ; Description: Function to display the site link.
  */
  function showSiteLink(){
    // show the modal link
    $("#modalLink").show();
  }

  /*
  ; Params: selector: string, url: string, target: string (default = _blank)
  ; Response: undefined
  ; Description: Function to apply click event to the specified selector, opening a url to a specified target.
  */
  function setLink(selector, url, target = "_blank"){
    // set the click event for the selector
    $(selector).off("click").on("click", function(){
      // call the displayModal function hiding the modal when the window opens
      displayModal(false);
      // call the window open function to open the url to the specified target
      window.open(url, target);
    })
  }

  /*
  ; Params: url: string, target: string (default = _blank)
  ; Response: undefined
  ; Description: Function to apply click event to #modalLink, opening a url to a specified target.
  */
  function setSiteLink(url, target = "_blank" ){
    // call the setLink function to set the link for the modalLink element to the specified url and target
    setLink("#modalLink", url, target);
  }

  /*
  ; Params: url: string, target: string (default = _blank)
  ; Response: undefined
  ; Description: Function to apply click event to #modalGitHubLink, opening a url to a specified target.
  */
  function setGitHubLink(url, target = "_blank"){
    // set the link for git hub
    setLink("#modalGitHubLink", url, target);
  }

  /*
  ; Params: title: string
  ; Response: undefined
  ; Description: Function to set the modal title.
  */
  function setModalTitle(title){
    // set the title of the modal dialog
    $("#modalTitle").html(title)
  }

  /*
  ; Params: body: string
  ; Response: undefined
  ; Description: Function to set the modal body.
  */
  function setModalBody(body){
    // set the body of the modal dialog
    $("#modalBody").html(body);
  }

  /*
  ; Params: display: boolean
  ; Response: undefined
  ; Description: Function show and hide the modal dialog.
  */
  function displayModal(display){
    // show or hide the modal dialog box
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
      // set the title and body of the dialog box
      setModalTitle("Bio site");
      setModalBody("<ul><li>HTML</li><li>CSS</li></ul>");

      // call the showSiteLink to display the site link on the dialog
      showSiteLink();
      // set the urls for the site and git hub link
      setSiteLink("https://martintroye.github.io/biosite/");
      setGitHubLink("https://github.com/martintroye/biosite");

      // display the modal dialog
      displayModal(true);
    });

    // Set the click event to display the dialog for the Bio Site Prototype
    $("#bioPrototype").on("click",function(){
      // set the title and body of the dialog box
      setModalTitle("Bio site prototype");
      setModalBody("<ul><li>Style guide</li><li>Components</li><li>Template</li></ul>");

      // call the hideSiteLine to hide the site link on the dialog
      hideSiteLink();
      // set the url for the git hub link
      setGitHubLink("https://github.com/martintroye/biosite/blob/master/bio%20site%20Patterns.pdf");

      // display the modal dialog
      displayModal(true);
    })

    // Set the click event to display the dialog for Enterprise JavaScript I
    $("#javascriptOne").on("click",function(){
      // set the title and body of the dialog box
      setModalTitle("Enterprise JavaScript I");
      setModalBody("<ul><li>JavaScript</li><li>Node.js</li></ul>");

      // call the hideSiteLine to hide the site link on the dialog
      hideSiteLink();
      // set the url for the git hub link
      setGitHubLink("https://github.com/martintroye/web-231/");

      // display the modal dialog
      displayModal(true);
    })

    // Set the click event to display the dialog for the Portfolio Prototype
    $("#portfolioPrototype").on("click",function(){
      // set the title and body of the dialog box
      setModalTitle("Portfolio site prototype");
      setModalBody("<ul><li>Style guide</li><li>Sketches</li></ul>");

      // call the hideSiteLine to hide the site link on the dialog
      hideSiteLink();
      // set the url for the git hub link
      setGitHubLink("content/prototype.pdf");

      // display the modal dialog
      displayModal(true);
    })

    // Set the click event to display the dialog for Enterprise JavaScript II
    $("#javascriptTwo").on("click",function(){
      // set the title and body of the dialog box
      setModalTitle("Enterprise JavaScript II");
      setModalBody("<ul><li>JavaScript</li><li>Node.js</li><li>Express</li></ul>");

      // call the hideSiteLine to hide the site link on the dialog
      hideSiteLink();
      // set the url for the git hub link
      setGitHubLink("https://github.com/martintroye/web-330/");

      // display the modal dialog
      displayModal(true);
    })

  };

  // return the exports object to expose the public methods and variables
  return exports;
// will create the portfolioModal module or an empty object
}(portfolioModalModule || {}));

// end program
