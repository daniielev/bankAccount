angular.module ('bankAccount.controllers')
.controller('DetailsCtrl', [
        '$scope',
        '$routeParams',
        '$location',
        'PersistenceService',
        function($scope, $routeParams, $location, PersistenceService) {
            /*
            Reads the data from the localStorage
             */
            var currentID = $routeParams.id;
            $scope.myBank__Account = PersistenceService.verify("myAccount")[0];
            $scope.myBank__Movements = PersistenceService.verify("myMovements");

            /*
            Gets the single item depending on the current ID,
            this id is visible from the URL
             */
            $scope.singleMovement = PersistenceService.getItem($scope.myBank__Movements, $routeParams.id);
            $scope.notFound = false;

            /*
            Sets an error param on the URL if the item requested
            does not exists
             */
            if ($scope.singleMovement === undefined) {
                $location.search({error: 'notFound'});
                $scope.notFound = true;
            } else {
                // Flags for the view
                $scope.isCredit = ($scope.singleMovement.type == "Credit") ? true : false;
                $scope.isDebit = !$scope.isCredit;
            }

            if ($routeParams.error != "" && $routeParams.error == "notFound") {
                $scope.notFound = true;
            }

            /*
            Deletes the single item from the Movements Collection,
            after done, it will return you to the Summary view
             */
            $scope.deleteMovement = function () {
                var target = PersistenceService.getItemIndex($scope.myBank__Movements, currentID);

                if ($scope.myBank__Movements.length == 1) {
                    $scope.myBank__Movements = [];
                } else {
                    $scope.myBank__Movements.splice(target, 1);
                }

                $location.path("/account");
            }

            $scope.$watch('myBank__Movements', function(newValue, oldValue) {
                PersistenceService.save("myMovements", newValue);
            }, true);
        }
    ])