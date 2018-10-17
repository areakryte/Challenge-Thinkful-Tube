var youtubeKey = "AIzaSyCRfIeivyetO3l8JxjUO9AC-u7LkpvE_WQ";
var youtubeEndPoint = "https://www.googleapis.com/youtube/v3/search"

$(document.body).on("click", ".submit", function(event){
  event.preventDefault();

  var jsonReq = '{' +
    '"part": \"snippet\",' +
    '"key": "' + youtubeKey + '",' +
    '"q": "' +$("input").val() + '"' +
  '}';

});
