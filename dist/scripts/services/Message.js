
(function() {
  function Message($firebaseArray, $cookies) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    console.log("messages: ", messages);


    return {
     send: function (messageTxt, roomId) {
       var currentUser = $cookies.get('blocChatCurrentUser');
        messages.$add({content: messageTxt, roomId: roomId, username: currentUser});       
      
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();



