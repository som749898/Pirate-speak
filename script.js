var inputText = document.querySelector("#textInput");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output-div");

var serverUrl = "https://api.funtranslations.com/translate/pirate.json";

function setUrl(text){
  return serverUrl + "?" + "text=" + text;
}

function errorHandler(error){
  console.log(error,"An error has occured");
  alert("Please try after some time");
}

function clickHandler() {
  var url = setUrl(inputText.value);
  fetch(url)
    .then(Response => Response.json())
    .then(json => {
      outputDiv.innerText = json.contents.translated;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click",clickHandler);