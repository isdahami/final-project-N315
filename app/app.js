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
            MODEL.changePage(pageID);
        } else {
            MODEL.changePage(pageID, subPageID);
        }
    };
}

function initApp() {
    // listening for a 'hashchange', calls route when the hastag does change
    $(window).on("hashchange", route)
    route();
   
}

$(document).ready(function () {
    initApp();
});


