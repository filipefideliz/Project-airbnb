import maps from './libs/maps.js'

function init(){
    maps.initalize(
        document.getElementById('map'),
        {
           coords: [-27.588183494013148, -48.50627298921619],
           zoom: 13
    });

    maps.addMarker({
        coords:[-27.60108343991849, -48.47370054757918],
        content: 'R$400'
    });   
    
    maps.addMarker({
        coords: [ -27.59702820498889, -48.498868128763384 ],
        content: 'R$99'
      });
    
    maps.addMarker({
        coords: [-27.601305604435797, -48.47867919635228],
        content: '$100'
    })
    
    maps.addMarker({
        coords: [-27.60068567041439, -48.48152109957124],
        content: 'R$199'
    })
}



export default init;