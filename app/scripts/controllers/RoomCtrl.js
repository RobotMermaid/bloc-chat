(function() {
	function RoomCtrl($scope, Room, Message) {
		$scope.allRooms = Room.all;

		

    	$scope.activeRoom = function(room) {
    		console.log("activeRoom: ", room);
    		$scope.currentRoom = room;
    		$scope.messages = Room.getMessages(room.$id);
    		
    	}

        $scope.send = function(messageTxt) {
            Message.send(messageTxt.trim(), $scope.currentRoom.$id);
            $scope.messageTxt = null;
            
        };

	}

	angular
		.module('blocChat')
		.controller('RoomCtrl',['$scope','Room', 'Message', '$uibModal', RoomCtrl]);
})();

