(function() {
	function RoomCtrl($scope, Room, $uibModal) {
		$scope.allRooms = Room.all;

		$scope.openModal = function () {
		 	var modalInstance = $uibModal.open({ 			
		      	template: '/templates/modal.html',
		      	controller: 'ModalInstanceCtrl',
		      	size: 'md'
			}); 			
    	};
	}

	angular
		.module('blocChat')
		.controller('RoomCtrl',['$scope','Room', '$uibModal', RoomCtrl]);
})();