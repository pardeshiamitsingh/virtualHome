
var sceneEl = document.querySelector('a-scene');

var camera = document.querySelector('a-camera');
var entity = sceneEl.querySelector('a-entity');
  var wallLight ;

document.querySelector('#cubeshelf').addEventListener('click', function () {
	var mobileshelf = document.querySelector('#mobileshelf');
	var cubeshelf = document.querySelector('#cubeshelf');

  	if(mobileshelf.getAttribute('position').x == 45  && 
  		mobileshelf.getAttribute('position').y == 0 && 
  		mobileshelf.getAttribute('position').z == 24  ) {
  		mobileshelf.setAttribute('position', '45 0 20');
  		cubeshelf.setAttribute('position', '45 0 20');
  	} else {
  		mobileshelf.setAttribute('position', '45 0 24');
  		cubeshelf.setAttribute('position', '45 0 24');
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
  	}
});