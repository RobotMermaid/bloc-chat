
(function() {
  function Message($firebaseArray, $scope) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    console.log("messages: ", messages);


    return {
     send: function (messageTxt, roomId) {
        messages.$add({content: messageTxt, roomId: roomId });
        //clear the messageTxt after clicking send
        
      }


    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();



