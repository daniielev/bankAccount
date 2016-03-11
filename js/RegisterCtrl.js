angular.module ('bankAccount.controllers')
.controller('RegisterCtrl', [
        '$scope',
        'PersistenceService',
        function($scope, PersistenceService) {
          console.log("You're on the Register view!");

          // var localStorageKey = "List";

          // /**
          //  * Busca en localStorage si existen las llaves @localStorageKey y
          //  *  @taskLastID, si existen entonces retorna sus valores, si no
          //  *  entonces los crea
          //  */
          // $scope.tasksCol = PersistenceService.verify(localStorageKey) || [];
          // $scope.lastID = PersistenceService.verify("taskLastID") || 0;

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

          //   *
          //    * This is an example of a function
          //    * @return {number} [this is the item index on the collection]

          //   function sample() {

          //   }

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