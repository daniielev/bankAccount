angular.module ('bankAccount.controllers')
.controller('RegisterCtrl', [
        '$scope',
        'PersistenceService',
        function($scope, PersistenceService) {
            var localStorageKey = "myAccount";

            $scope.myBank__Account = PersistenceService.verify(localStorageKey) || [];
            $scope.currentUser = $scope.myBank__Account.owner || "User";

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
                PersistenceService.save(localStorageKey, newValue);
            }, true);

          // $scope.notFound = false;

          // $scope.addTask = function () {
          //   $scope.lastID++;

          //   // Creal el ojecto de la tarea, y luego lo agrega a la colección
          //   var taskItem = {
          //       id : $scope.lastID,
          //       name : $scope.name,
          //       description : $scope.description,
          //       dueDate : $scope.dueDate,
          //       done : false
          //   }
          //   $scope.tasksCol.push(taskItem);

          //   // Limpia el formulario, tanto en valores como en estado de variables
          //   if ($scope.taskForm) {
          //     $scope.taskForm.$setPristine();
          //     $scope.taskForm.$setUntouched();
          //     $scope.name = "";
          //     $scope.description = "";
          //     $scope.dueDate = "";
          //   }
          // }

          // // Enciende el estado de error
          // if ($routeParams.error != "" && $routeParams.error == "notFound") {
          //   $scope.notFound = true;
          // }

          // // Persiste los cambios en las variables
          // $scope.$watch('tasksCol', function(newValue, oldValue) {
          //     PersistenceService.save(localStorageKey, newValue);
          // }, true);
          // $scope.$watch('lastID', function(newValue, oldValue) {
          //     PersistenceService.save("taskLastID", newValue);
          // }, true);
        }
    ])