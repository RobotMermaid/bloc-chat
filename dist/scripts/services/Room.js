
(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var refMes = firebase.database().ref('messages');
    var rooms = $firebaseArray(ref);

    var messages = [];
    return {
      all: rooms, 
      createRoom: function(name){
         rooms.$add({ name: name });
         console.log(rooms);
       },

      getMessages: function(roomId){
            var messages = $firebaseArray(refMes.orderByChild("roomId").equalTo(roomId));
            console.log(messages);
            return messages;
        }
    };
  }// thiis how to save new messages with a roomId
            // var newRef = refMes.push()
            // console.log(newRef.set({
            //   roomId : roomId
            // }));

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
