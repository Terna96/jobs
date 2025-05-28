

 var map = L.map('map').setView([6.616, 3.506], 11);
 L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=sImSM6zs3ZeSqXT9mhWS', {
     attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
 }).addTo(map);



 //marker icon
 var taxiIcon = L.icon( {
   iconUrl: 'img/icon.png',
   iconSize: [40, 40]
 })

 //marker

 var marker = L.marker([6.616, 3.506], {icon: taxiIcon}).addTo(map);

 map.on('click', function(e){
     console.log(e)
     var secondMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);

      L.Routing.control({
       waypoints: [
       L.latLng(6.616, 3.506),
       L.latLng(e.latlng.lat, e.latlng.lng)
       ]
   }).on('routesfound', function(e) {
       console.log(e)
       e.routes[0].coordinates.forEach(function(coord, index) 
       {setTimeout(() => {
            marker.setLatLng([coord.lat, coord.lng])
       }, 100 * index);
     });
   })
   
   
   .addTo(map);
 })

   // L.Routing.control({
      //  waypoints: [
      //  L.latLng(57.74, 11.94),
      //  L.latLng(57.6792, 11.949)
       // ]
  //  }).addTo(map);