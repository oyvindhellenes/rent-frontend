/**
 * Master Controller
 */

angular.module('RDash')
    .controller('MasterCtrl', ['$scope', '$cookieStore', '$resource', MasterCtrl]);

function MasterCtrl($scope, $cookieStore, $resource) {
    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;

    $scope.getWidth = function() {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = ! $cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function() {
        $scope.$apply();
    };

    // -------------- New stuff -------------- \\

    var Equipment = $resource('http://127.0.0.1:8000/rent/api/equipment/');

    $scope.form = {
        type: "",
        description: "",
        location: ""

    }

    $scope.equipment = {};
    Equipment.query(function(results){
        $scope.equipment = results;
        console.log('val' + angular.toJson(results));
    })

    $scope.addEquipment = function(){
        var equipment = new Equipment();
        equipment.type = $scope.form.type;
        equipment.description = $scope.form.description;
        equipment.location = $scope.form.location;

        equipment.$save().then(function(results){
            console.log(results);
            $scope.equipment.push(results);
        })

        $scope.form.type = " ";
        $scope.form.description = " ";
        $scope.form.location = " ";

    }

    $scope.removeEquipment = function(eq){
        var equipment = new Equipment();
        console.log('eq' + angular.toJson(eq));
        var path = {
            id: eq.id
        }
        equipment.$delete(path);
    }
}