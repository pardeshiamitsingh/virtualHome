document.write('<script type="text/javascript" src="libs/dat.gui.min.js"></script>');

var sceneEl = document.querySelector('a-scene');

var camera = document.querySelector('a-camera');
var entity = sceneEl.querySelector('a-entity');
  var wallLight ;

document.querySelector('a-scene').addEventListener('loaded', function () {
	var gui = new dat.GUI();
    
    wallLight = sceneEl.querySelector('#wallLight');
 //   var lightsphere = sceneEl.querySelector('#lightsphere');
    wallLight.setAttribute('intensity', 2);

  //  lightsphere.position.y = 
   // gui.add(wallLight, 'intensity', 0, 10);
})