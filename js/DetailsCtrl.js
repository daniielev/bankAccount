angular.module ('bankAccount.controllers')
.controller('DetailsCtrl', [
        '$scope',
        '$routeParams',
        '$location',
        'PersistenceService',
        function($scope, $routeParams, $location, PersistenceService) {
            // Gets the data
            var currentId = $routeParams.id;
            $scope.myBank__Account = PersistenceService.verify("myAccount")[0];
            $scope.myBank__Movements = PersistenceService.verify("myMovements");

            $scope.singleMovement = PersistenceService.getItem($scope.myBank__Movements, $routeParams.id);
            $scope.notFound = false;

            if ($scope.singleMovement === undefined) {
                $location.search({error: 'notFound'});
            } else {
                $scope.isCredit = ($scope.singleMovement.type == "Credit") ? true : false;
                $scope.isDebit = !$scope.isCredit;
            }

            if ($routeParams.error != "" && $routeParams.error == "notFound") {
                $scope.notFound = true;
            }
        }
    ])