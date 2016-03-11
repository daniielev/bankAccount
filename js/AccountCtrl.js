angular.module ('bankAccount.controllers')
.controller('AccountCtrl', [
        '$scope',
        'PersistenceService',
        function($scope, PersistenceService) {
            // Gets the data
            $scope.myBank__Account = PersistenceService.verify("myAccount")[0];
            $scope.myBank__Movements = PersistenceService.verify("myMovements");

            if ($scope.myBank__Account.currency === "USD") {
              $scope.accountCurrency = "US$";
            } else {
              $scope.accountCurrency = "‎CRC₡";
            }

            $scope.limitSearch = 10;
            $scope.itemDate = "date";
        }
    ])