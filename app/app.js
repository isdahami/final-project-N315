import * as MODEL from "./model.js";




function InitListener(){
    $(document).ready(function() {
          var ingCnt = 3;
          var stepCnt = 3;
          var max_boxes = 10; //maximum input boxes allowed
    
         
          
          
         $(".addButton").on("click",(e) =>{ //on add input button click
              e.preventDefault();
              if(ingCont < max_boxes){ //max input box allowed
          
                   //text box increment
                  $(".clone").append(`<input type="textarea" id="step3${ingCnt}" placeholder="Ingredients #${ingCnt + 1}" class="add-input">`); //add input box
                  ingCnt++; 
            }
          });
      
      
         $(".addBtn").on("click",(e) =>{ //on add input button click
          e.preventDefault();
          if(stepCnt < max_boxes){ //max input box allowed
      
               //text box increment
              $(".clones").append(`<input type="textarea" id="instructions${stepCnt}" placeholder="Ingredients #${stepCnt + 1}" class="add-input">`); //add input box
              stepCnt++; 
        }
      });
      
      $("submit").on("click",(e)=>
    {let recipe = {
        description:"",
        steps: [],
        ingredients: [],
        
    };
        console.log("submit");

        e.preventDefault();
        $(".recipe .clone").each(idx,step => {
            console.log(step.value);
            recipe.steps.push({step: step.value});
    
        });
        $(".recipe .clones").each(idx,ing => {
            console.log(ing.value);
            recipe.ing.push({ing: ing.value});
    
        })
        console.log("recipe");
    });   

      });
    }


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
    InitListener();

});


