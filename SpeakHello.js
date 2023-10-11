(function (window) {
  var helloSpeaker = {};
  helloSpeaker.name = 'helloSpeaker';
 var speakWord = "Hello";
 helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}
  window.helloSpeaker = helloSpeaker;

})(window);

