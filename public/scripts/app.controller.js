angular.module('NavApp')
    .controller('NavController', NavCtrl);

function NavCtrl() {
    $(document).ready(function(){
        $('#myModal').modal('show');
    });


    console.log('NavCtrl Loaded Successfully!', NavCtrl);
    var nav = this;
    window.nav = nav;
    /* instantiate google map  */

    nav.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: null,
        mapTypeId: 'terrain',
    });

    function(NgMap) {
        NgMap.getMap().then(function(map) {
            console.log(map.getCenter());
            console.log('markers', map.markers);
            console.log('shapes', map.shapes);
    });

    nav.origin = '';
    nav.destination = '';
    nav.waypoints = [];
    nav.input = document.getElementById('searchTextField');
    nav.inputTwo = document.getElementById('searchTextField2');

    nav.submitAddress = function() {
        nav.waypoints.push({
            origin: nav.origin,
            destination: nav.destination
        })
    }

    /* instantiate auto-complete */
    nav.autocomplete = new google.maps.places.Autocomplete(nav.input);
    // nav.autocomplete.bindTo(nav.origin);
    // nav.autocompletedTwo.bindTo(nav.destination);
    nav.autocompleteTwo = new google.maps.places.Autocomplete(nav.inputTwo);

    /* instantiate info window */
    // var infowindow = new google.maps.Infowindow();

    /* instantiate markers */
    // var marker = new google.maps.Marker({
    //     map: nav.map,
    //     anchorPoint: new gogoogle.maps.Point(0, -29)
    // })

    //
    // var autocomplete = new google.maps.places.Autocomplete(input);
    //    autocomplete.bindTo('bounds', map);

    // var infowindow = new google.maps.InfoWindow();
    //     var marker = new google.maps.Marker({
    //         map: nav.map,
    //         anchorPoint: new google.maps.Point(0, -29)
    //     });
    //
    //
    // google.maps.event.addDomListener(window, 'load', initialize);

    /* Instantiate directions service object */
    var directionsService = new google.maps.DirectionsService;

    /* Instantiate directions display object */
    var directionsDisplay = new google.maps.DirectionsRenderer({
        draggable: true,
        map: nav.map,
        panel: document.getElementById('right-panel')
    });

    /* Calls computeTotalDistance and adds listener to display directions if waypoints are changed  */
    directionsDisplay.addListener('directions_changed', function() {
        computeTotalDistance(directionsDisplay.getDirections());
    });

    /* Calls displayRoute and adds 2 waypoints, directionService, & directionDisplay as arguments) */
    displayRoute('Perth, WA', 'Sydney, NSW', directionsService,
    directionsDisplay);

    /* Function to display route on map via waypoints*/
    function displayRoute(origin, destination, service, display) {
        service.route({
            origin: origin,
            destination: destination,
            waypoints: [{location: 'Adelaide, SA'}, {location: 'Broken Hill, NSW'}], //push waypoints, generate route for directions, then ping for distances in matrix.
            travelMode: 'DRIVING',
            avoidTolls: true,
        }, function(response, status) {
            if (status === 'OK') {
                display.setDirections(response);
                console.log(response, destination, service, display);
            } else {
                alert('Could not display directions due to: ' + status);
            }
        });
    }

    /* Function to compute total distance of route */
    function computeTotalDistance(result) {
        var total = 0;
        var myroute = result.routes[0];

        for (var i = 0; i < myroute.legs.length; i++) {
            total += myroute.legs[i].distance.value;
        }

        total = total / 1000;

        document.getElementById('total').innerHTML = total + ' km';
        console.log(result);
    }

}














    /* Instantiate a Google Map */
