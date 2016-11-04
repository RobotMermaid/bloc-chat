(function() {
	function ModalInstanceCtrl($scope, $uibModalInstance, Room) {
		// creates room from open modal
        $scope.confirm = function(roomInput){
            Room.createRoom(roomInput);
            $uibModalInstance.close(); 
        };

        // closes modal window
        $scope.cancel = function(){
            $uibModalInstance.dismiss('cancel'); 
        };
			 
	};

	angular
		.module('blocChat')
		.controller('ModalInstanceCtrl',['$scope','$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();