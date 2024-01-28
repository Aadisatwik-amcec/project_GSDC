function makeSOSCall() {
    // Implement your logic to make calls and send messages here
    alert("SOS calls and messages initiated!");
}


// Function to initialize the map
function initMap() {
    // Specify the initial coordinates
    var myLatLng = { lat: 37.7749, lng: -122.4194 };

    // Create a map centered at the specified coordinates
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 12
    });

    // Create a marker at the specified coordinates
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Marker Title'
    });
}