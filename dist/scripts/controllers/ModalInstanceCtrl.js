(function() {
	function ModalInstanceCtrl($scope, $uibModalInstance, Room) {
        $scope.confirm = function(roomInput){
            Room.createRoom(roomInput);
            $uibModalInstance.close(); 
        };

        $scope.cancel = function(){
            $uibModalInstance.dismiss('cancel'); 
        };
			 
	};

	angular
		.module('blocChat')
		.controller('ModalInstanceCtrl',['$scope','$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();