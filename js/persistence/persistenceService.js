angular.module('persistence.services')

.service ('PersistenceService',

    function($routeParams) {

        var saveKey = function (key, object) {
            localStorage.setItem(key, angular.toJson(object));
        };

        var verifyKey = function(key) {
            return angular.fromJson(localStorage.getItem(key));
        };

        var removeKey = function(key) {
            localStorage.removeItem(key);
        };

        /**
         * Returns the specific item form the collection
         * @param  {object} tasksCollection The collection where all the items are stored
         * @param  {number} targetID        The item id that you want
         * @return {object}                 The item you want
         */
        var getItem = function(tasksCollection, targetID) {
            var item;

            for (var i = 0; i < tasksCollection.length; i++) {
                if (tasksCollection[i].id == targetID) {
                    item = tasksCollection[i];
                }
            };

            return item;
        };

        /**
         * Looks within the collection and returns the index of the item desired.
         * @param  {object} tasksCollection The collection where all the items are stored
         * @param  {number} targetID        The item id that you want
         * @return {number}                 The item index inside the collection
         */
        var getItemIndex = function (tasksCollection, targetID) {
            var index;

            for (var i = 0; i < tasksCollection.length; i++) {
                if (tasksCollection[i].id == targetID) {
                    index = i;
                }
            };

            return index;
        };

        return {
            save         : saveKey,
            verify       : verifyKey,
            remove       : removeKey,
            getItem      : getItem,
            getItemIndex : getItemIndex
        };
    }
);