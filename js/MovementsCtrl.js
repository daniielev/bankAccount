angular.module ('bankAccount.controllers')
.controller('MovementsCtrl', [
        '$scope',
        'PersistenceService',
        function($scope, PersistenceService) {
            /*
            Reads the data from the localStorage
             */
            $scope.myBank__Account = PersistenceService.verify("myAccount");
            $scope.myBank__Movements = PersistenceService.verify("myMovements") || [];

            $scope.flag = ($scope.myBank__Account) ? true : false;

            $scope.myBank__movementLastID = PersistenceService.verify("lastMovementID") || 0;

            // If the account is not set yet, then do nothing
            if ($scope.myBank__Account != undefined) {
                if ($scope.myBank__Account.length > 0) {
                    if ($scope.myBank__Account[0].currency === "USD") {
                      $scope.accountCurrency = "US$";
                    } else {
                      $scope.accountCurrency = "‎CRC₡";
                    }
                }
            }

            /*
            Registers the movent on the collection,
            then clears the form
             */
            $scope.registerMovement = function () {
              $scope.myBank__movementLastID++;

              var movement = {
                "id" : $scope.myBank__movementLastID,
                "date" : $scope.movementDate,
                "amount" : $scope.movementAmount,
                "type" : $scope.movementType,
                "detail" : $scope.movementDetail
              };

              $scope.myBank__Movements.push(movement);

              if ($scope.movementsForm) {
                $scope.movementsForm.$setPristine();
                $scope.movementsForm.$setUntouched();
                $scope.movementDate = "";
                $scope.movementAmount = "";
                $scope.movementType = "";
                $scope.movementDetail = "";
              }
            }

            $scope.$watch('myBank__Movements', function(newValue, oldValue) {
                PersistenceService.save("myMovements", newValue);
            }, true);

            $scope.$watch('myBank__movementLastID', function(newValue, oldValue) {
                PersistenceService.save("lastMovementID", newValue);
            }, true);
        }
    ])