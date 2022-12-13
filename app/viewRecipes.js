// function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function (e) {
//             $('#file').attr('src', e.target.result);
//         }

//         reader.readAsDataURL(input.files[0]);
//     }
// }

// $("#imgInp").change(function(){
//     readURL(this);
// });

function img_pathUrl(input){
    $('#imgPreview')[0].src = (window.URL ? URL : webkitURL).createObjectURL(input.files[0]);
    filePreview(this);
}

// function initSubmitListenr(){
//     $("submit").on("click", function (e)){
//         console.log("submit");
//     };
// }
var input = ("#file");
var imgInput = document.querySelector('input');
var imgEl = document.querySelector('#imgPreview');
if (imgEl){
(imgInput).addEventListener('change', () => {
  if (imgInput.files && imgInput.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imgEl.src = e.target.result;
    }
    reader.readAsDataURL(imgInput.files[0]);
  }
})}
