var youtubeKey = "AIzaSyCRfIeivyetO3l8JxjUO9AC-u7LkpvE_WQ";
var youtubeEndPoint = "https://www.googleapis.com/youtube/v3/search"

$(document.body).on("click", ".submit", function(event){
  event.preventDefault();

  var jsonReq = '{' +
    '"part": \"snippet\",' +
    '"key": "' + youtubeKey + '",' +
    '"q": "' +$("input").val() + '"' +
  '}';

  $.get(
    youtubeEndPoint,
    {
      part:'snippet',
      q: $("input").val(),
      key: youtubeKey
    },
    function(data){
      console.log(data.items[0]);
      var basicThumbnail = data.items[0].snippet.thumbnails.default;
      console.log(basicThumbnail);

      //sadly https
      var redirectImg = "//images.weserv.nl/?url=" + basicThumbnail.url;

      var thumbnail = "<a href=https://www.youtube.com/watch?v=" + data.items[0].id.videoId + "><img scr=" + basicThumbnail.url + ">";

      $("body").append(thumbnail);
      });

});
