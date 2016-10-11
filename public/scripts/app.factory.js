angular.module('NavApp')
    .factory('NavFactory', NavFact);

NavFact.$inject = ['$http'];

function NavFact($http) {

    function getEvent(params) {
        return $http({
            method:"GET",
            url: '/events',
            params: params
        });
    }

    return {
        getEvent : getEvent
    }
}


// function getEvents(collectionOfParams) {
//     var requests = collectionOfParams.map(function(params){
//         return $http({
//             method: "GET",
//             params: params,
//             url: '/events'
//         });
//     });
//
//     $q.all(requests).then(function(data){
//         data.forEach(function(response, index) {
//             console.log("Response", index, '::', response);
//         });
//     });
// }
// ////////////////
// nav.forEach(nav.musicArray, function(value) {
//     nav.requests.push()
// })
//
//
// /* Requests API through factory's getEvent object */
//
// var requests = [];
// var $scope.myArray2 = [];
// angular.forEach($scope.myArray, function (value) {
//     requests.push($http.get(value.URL));
// });
//
// $q.all(requests).then(function(results) {
//     angular.forEach(results, function(result) {
//         $scope.myArray2.push(result.data);
//     });
// });
// }
