const L = window.L || {};

const mapInstance ={
    map: null,
    layer: null,
    markers: L.featureGroup()
};

function iconPrice(content) {
    return L.divIcon({className:'map-price', html: content, iconSize:null})
}

const defaultOptions = {zoom: 13,coords: [], maxZoom: 18};

function initalize($element, options = defaultOptions){

  mapInstance.map = L.map($element).setView(options.coords, options.zoom);

    
  mapInstance.layer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
        maxZoom:18    
    }).addTo(mapInstance.map);

  mapInstance.markers
    .on('mouseover', function(e){
        console.log(e);
        e.layer.setZIndexOffset(100);
    })
    .on('mouseout', function(e){
        e.layer.setZIndexOffset(0);
    })
    .addTo(mapInstance.map);

}

function addMarker(attrs = {}){
    mapInstance.markers.addLayer(
        L.marker(attrs.coords,{
            icon: iconPrice(attrs.content)    
        })
    )
}

export default{
    initalize,
    addMarker
}