angular.module ('bankAccount.controllers')
.controller('RegisterCtrl', [
        '$scope',
        'PersistenceService',
        function($scope, PersistenceService) {
            // Sets the Data
            $scope.myBank__Account = PersistenceService.verify("myAccount") || [];
            $scope.myBank__Movements = PersistenceService.verify("myMovements") || [];

            $scope.saveAccount = function () {
              if ($scope.myBank__Account.length === 0) {
                  var account = {
                      "owner"    : $scope.accountOwner,
                      "type"     : $scope.accountType,
                      "currency" : $scope.accountCurrency
                  };

                  $scope.myBank__Account.push(account);

                  if ($scope.registrationForm) {
                    $scope.registrationForm.$setPristine();
                    $scope.registrationForm.$setUntouched();
                    $scope.accountOwner = "";
                    $scope.accountType = "";
                    $scope.accountCurrency = "";
                  }
              }
            };

            $scope.$watch('myBank__Account', function(newValue, oldValue) {
                PersistenceService.save("myAccount", newValue);
            }, true);
        }
    ])