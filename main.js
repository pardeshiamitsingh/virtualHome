
var sceneEl = document.querySelector('a-scene');

var camera = document.querySelector('a-camera');
var entity = sceneEl.querySelector('a-entity');
var wallLight ;
var radio = document.querySelector('#radio');
var fireplace = document.querySelector('#fireplace');
var mobileshelf = document.querySelector('#mobileshelf');
var llamp = document.querySelector('#llamp');
var rlamp = document.querySelector('#rlamp');
var framery = document.querySelector('#framery');

//scaleup when mouse is on moblie shelf
document.querySelector('#cubeshelf').addEventListener('mouseenter', function () {
	mobileshelf.setAttribute('scale', '4.4 4.4 4.4');	
});

//scaledown when mouse is out off moblie shelf
document.querySelector('#cubeshelf').addEventListener('mouseleave', function () {
	mobileshelf.setAttribute('scale', '4 4 4');	
});

//change position of shelf when clicked on it
document.querySelector('#cubeshelf').addEventListener('click', function () {
	var cubeshelf = document.querySelector('#cubeshelf');

  	if(mobileshelf.getAttribute('position').x == 23  && 
  		mobileshelf.getAttribute('position').y == 0 && 
  		mobileshelf.getAttribute('position').z == 15  ) {
  		mobileshelf.setAttribute('position', '23 0 11');
  		cubeshelf.setAttribute('position', '23 0 11');
  	} else {
  		mobileshelf.setAttribute('position', '23 0 15');
  		cubeshelf.setAttribute('position', '23 0 15');
  	}
});

//scaleup when mouse is on left lamp
document.querySelector('#cubellight').addEventListener('mouseenter', function () {
	llamp.setAttribute('scale', '5.4 5.4 5.4');	
});

//scaledown when mouse is out off left lamp
document.querySelector('#cubellight').addEventListener('mouseleave', function () {
	llamp.setAttribute('scale', '5 5 5');	
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

//scaleup when mouse is on right lamp
document.querySelector('#cuberlight').addEventListener('mouseenter', function () {
	rlamp.setAttribute('scale', '5.4 5.4 5.4');	
});

//scaledown when mouse is out off right lamp
document.querySelector('#cuberlight').addEventListener('mouseleave', function () {
	rlamp.setAttribute('scale', '5 5 5');	
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

//scaleup when mouse is on framery
document.querySelector('#cubeframerylight').addEventListener('mouseenter', function () {
	framery.setAttribute('scale', '4.9 4.9 4.9');	
});

//scaledown when mouse is out off framery
document.querySelector('#cubeframerylight').addEventListener('mouseleave', function () {
	framery.setAttribute('scale', '4.5 4.5 4.5');	
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

//scaleup when mouse is on fireplace
document.querySelector('#cubefireplace').addEventListener('mouseenter', function () {
	fireplace.setAttribute('scale', '5.4 5.4 5.4');	
});

//scaledown when mouse is out off fireplace
document.querySelector('#cubefireplace').addEventListener('mouseleave', function () {
	fireplace.setAttribute('scale', '5 5 5');	
});

//Turn on off fire
document.querySelector('#cubefireplace').addEventListener('click', function () {
	var fire = document.querySelector('#fire');
	var firelight = document.querySelector('#firelight');
	var firebool = true;

  	if(fire.getAttribute('visible') == true ) {
  		firebool = false;
  		fire.setAttribute('visible', 'false');
  		firelight.setAttribute('visible', 'false');
  		firelight.setAttribute('intensity', '0');
  	} else {
  		firebool = true;
  		fire.setAttribute('visible', 'true');
  		firelight.setAttribute('visible', 'true');
  		firelight.setAttribute('intensity', '0.1');
        firelight.emit(firebool ? 'fire-start' : 'fire-stop');
  	}
});

//scaleup when mouse is on radio
document.querySelector('#cuberadio').addEventListener('mouseenter', function () {
	radio.setAttribute('scale', '0.1 0.1 0.1');	
});

//scaledown when mouse is out off radio
document.querySelector('#cuberadio').addEventListener('mouseleave', function () {
	radio.setAttribute('scale', '0.05 0.05 0.05');	
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

var bouncing = false;

//bounce football
document.querySelector('#football').addEventListener('click', function () {
	var football = document.querySelector('#football');
	football.emit(bouncing ? 'bounce-start' : 'bounce-stop');
	bouncing = !bouncing;
});