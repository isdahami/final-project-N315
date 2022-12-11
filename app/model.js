export function changePage(pageID, subPage) {
    // goes into pages folder to find the page user clicks on
      $.get(`pages/${pageID}.html`, function(data) {
        // injects HTML onto the page
        $("#app").html(data); 
        console.log(pageID)
        // $("#nav").html(data);
  });
};

export function setUserInfo(userObject) {
  userInfo = userObject;
  userSignedIn = true;
  // console.log(userInfo);
}

export function checkUserLogin(useremail, userpass) {
  //check to see if login info is correct, returns true if correct, false if not
  if (useremail == userInfo.email && userpass == userInfo.password) {
    userSignedIn = true;
    return true;
  } else {
    return false;
  }
}

