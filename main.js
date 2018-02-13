
var sceneEl = document.querySelector('a-scene');

var camera = document.querySelector('a-camera');
var entity = sceneEl.querySelector('a-entity');
  var wallLight ;

document.querySelector('#cubeshelf').addEventListener('click', function () {
	var mobileshelf = document.querySelector('#mobileshelf');
	var cubeshelf = document.querySelector('#cubeshelf');

  	if(mobileshelf.getAttribute('position').x == 25  && 
  		mobileshelf.getAttribute('position').y == 0 && 
  		mobileshelf.getAttribute('position').z == 15  ) {
  		mobileshelf.setAttribute('position', '25 0 11');
  		cubeshelf.setAttribute('position', '25 0 11');
  	} else {
  		mobileshelf.setAttribute('position', '25 0 15');
  		cubeshelf.setAttribute('position', '25 0 15');
  	}
});

//left light turn on off
document.querySelector('#cubellight').addEventListener('click', function () {
	var llight = document.querySelector('#llight');

  	if(llight.getAttribute('intensity') == 0 ) {
  		llight.setAttribute('intensity', '4');
  	} else {
  		llight.setAttribute('intensity', '0');
  		
  	}
});

//right light turn on off
document.querySelector('#cuberlight').addEventListener('click', function () {
	var rlight = document.querySelector('#rlight');

  	if(rlight.getAttribute('intensity') == 0 ) {
  		rlight.setAttribute('intensity', '4');
  	} else {
  		rlight.setAttribute('intensity', '0');
  		
  	}
});

//framery light turn on off
document.querySelector('#cubeframerylight').addEventListener('click', function () {
	var framerylight = document.querySelector('#framerylight');

  	if(framerylight.getAttribute('intensity') == 0 ) {
  		framerylight.setAttribute('intensity', '4');
  	} else {
  		framerylight.setAttribute('intensity', '0');
  		
  	}
});

//Turn on off fire
document.querySelector('#cubefireplace').addEventListener('click', function () {
	var fire = document.querySelector('#fire');
	var firelight = document.querySelector('#firelight');

  	if(fire.getAttribute('visible') == true ) {
  		fire.setAttribute('visible', 'false');
  		firelight.setAttribute('visible', 'false');
  		firelight.setAttribute('intensity', '0');
  	} else {
  		var animation = document.createElement("a-animation");
  		animation.setAttribute("attribute","position");
        animation.setAttribute("to","55 2 -14");
        animation.setAttribute("dur","450");
        animation.setAttribute("repeat","indefinite");
        //    firelight(animation);
  		fire.setAttribute('visible', 'true');
  		firelight.setAttribute('visible', 'true');
  		firelight.setAttribute('intensity', '0.1');
  		firelight.setAttribute("positionto","55 2 -14");
        firelight.setAttribute("duration","450");
        firelight.setAttribute("repeat","indefinite");
  	}
});
	
//turn on off music of radio
document.querySelector('#cuberadio').addEventListener('click', function () {
	var entity = document.querySelector('[sound]');
	
	if(entity.components.sound.isPlaying == true) {
		entity.components.sound.pauseSound();
	} else {
		entity.components.sound.playSound();
	}
});