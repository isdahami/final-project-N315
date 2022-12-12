import * as MODEL from "./model.js";

function route() {
    // gets hashtag and name after
    let hashTag = window.location.hash;
    // replaces hashtag with nothing
    let pageID = hashTag.replace("#", "");
    let pageIDArray = pageID.split("/");
    pageID = pageIDArray[0];
    let subPageID = pageIDArray[1];

    // if there's nothing in the URL then it passes in 'home'
    if(pageID == "") {
        MODEL.changePage("home");
    } else {
        if(pageID == subPageID) {
            MODEL.changePage(pageID, initSubmitListeners);
        } else {
            MODEL.changePage(pageID, subPageID);
        }
    };
}

function initSubmitListeners() {
 /* Listening for a click on the submit button and then it is getting the values of the input fields.
 It is then checking to make sure that all fields are valid. If they are not valid, it will alert
 the user that they must respond to all fields. If they are valid, it will create a user object and
 then set the user info. It will then alert the user that they are logged in. */
    $("#submit-signup").on("click", function (e) {
      console.log("submit");
      /* Getting the values of the input fields. */
      let em = $("#email").val();
      let cp = $("#createPass").val();
      let cfp = $("#confPass").val();
  
      // make sure to check that all fields are valid
  
      if (!em || !cp || !cfp ) {
        alert("you must respond to all fields");
      } else {
        let userObj = {
          email: em,
          createPassword: cp,
          confirmPassword: cfp,
        };
        MODEL.setUserInfo(userObj);
        alert("You are logged in ");
      }
    });
    //listener for login section of page
    $("#submit-login").on("click", function (e) {
      let useremail = $("#uemail").val();
      let userpass = $("#upass").val();
  
      //check both fields are valid
      if (!useremail && !userpass) {
        alert("please enter a username and password");
      } else {
        if (MODEL.checkUserLogin(useremail, userpass)) {
          //if user's login info is correct, alerts them that they are logged in and redirects to home page
          alert("You are logged in ");
        }
        //if login info is incorrect, alerts the user that its incorrect
        else {
          alert("Your username or password is incorrect");
        }
      }
    });
  }


// function that deletes a recipe, it's currently deleting buttons on other pages so commented out...
// function deleteRepBtn() {
//     $(document).on('mouseenter', 'yR-recipe-container', function () {
//         $(this).find(":button").show();
//     }).on('click', ':button', function() {
//         $(this).parent().remove();
//     });
// }


function initApp() {
    // listening for a 'hashchange', calls route when the hastag does change
    $(window).on("hashchange", route)
    route();
   
}

$(document).ready(function () {
    initApp();
    // deleteRepBtn();
});


