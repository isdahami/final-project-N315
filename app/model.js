export function changePage(pageID) {
    // goes into pages folder to find the page user clicks on
      $.get(`pages/${pageID}.html`, function(data) {
        // injects HTML onto the page
        $("#app").html(data); 
  });
};

