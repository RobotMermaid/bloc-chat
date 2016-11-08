(function() {
	function UserModal($scope, $uibModalInstance, $cookies) {
           $scope.confirm = function(username){
        	if(username) {
        		$cookies.put('blocChatCurrentUser', username);
        		$uibModalInstance.close(); 
        	} else {
        		alert("enter username");
        	};
           };       
	};

	angular
		.module('blocChat')
		.controller('UserModal',['$scope','$uibModalInstance', '$cookies', UserModal]);
})();