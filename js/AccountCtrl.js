angular.module ('bankAccount.controllers')
.controller('AccountCtrl', [
        '$scope',
        'PersistenceService',
        function($scope, PersistenceService) {
            /*
            Reads the data from the localStorage
             */
            $scope.myBank__Account = PersistenceService.verify("myAccount")[0];
            $scope.myBank__Movements = PersistenceService.verify("myMovements") || [];

            /*
            Validates if the user is already registered
             */
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

            /*
            Loops over the Movements and fills the @balanceDebits and @balanceCredits,
            depending on the movement type
             */
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

            /**
             * Performs an addition of all the same types of movements
             * @param  {array} array The items collections
             * @return {number}      The avarage of the items
             */
            function returnTotal (array) {
                var total = 0;
                for (var i = 0; i < array.length; i++) {
                    total += array[i];
                }
                return total.toFixed(2);
            };
        }
    ])