angular.module ('bankAccount.controllers')
.controller('AccountCtrl', [
        '$scope',
        'PersistenceService',
        function($scope, PersistenceService) {
            $scope.myBank__Account = PersistenceService.verify("myAccount")[0];
            $scope.myBank__Movements = PersistenceService.verify("myMovements") || [];

            if ($scope.myBank__Account !== undefined) {
                if ($scope.myBank__Account.currency === "USD") {
                  $scope.accountCurrency = "US$";
                } else {
                  $scope.accountCurrency = "‎CRC₡";
                }
            }

            $scope.numLimit = 10;
            $scope.balance = 0;

            var balanceDebits = [];
            var balanceCredits = [];

            for (var i = 0; i < $scope.myBank__Movements.length; i++) {
                var movement = $scope.myBank__Movements[i];

                if (movement.type === "Debit") {
                    balanceDebits.push(movement.amount);
                } else {
                    balanceCredits.push(movement.amount);
                }
            }

            $scope.debitsTotal = returnTotal(balanceDebits);
            $scope.creditsTotal = returnTotal(balanceCredits);
            $scope.balance = $scope.creditsTotal - $scope.debitsTotal;

            function returnTotal (array) {
                var total = 0;
                for (var i = 0; i < array.length; i++) {
                    total += array[i];
                }
                return total.toFixed(2);
            };
        }
    ])