(function() {
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('home', {
                url:'/',
                controller: 'RoomCtrl as room',
                templateUrl: '/templates/home.html'
            });
    }


      function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');

        if (!currentUser || currentUser === '') {
            $uibModal.open({
                
                templateUrl: '/templates/userModal.html',
                controller: 'UserModal',
                size: 'md'
         

            });
            
        }
      }


    angular
        .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase', 'ngCookies'])
        .config(config)
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
