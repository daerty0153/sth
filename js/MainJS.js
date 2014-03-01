function animation() {
	$("#box-1").hide();
	$("#line3").hide();
	$('#line1').fitText(0.6).textillate({
		autoStart : true,
		loop : false,
		minDisplayTime : 14000,
		callback : function() {
			$("#line1").hide();
			$("#box-1").show();
			$("#box-1").auderoFlashingText({
				repeat : 7,
				duration : 5,
				fontMinSize : 50.0,
				selection : "ascending",
			});
		}
	});
}

$(function() {
	animation();

	setTimeout(function(){
		FadeInAnimation();
	},9000);

var elementId = "#line4";
hingeEffect(elementId);
});

function FadeOutAnimation(index){
	var animationarray = new Array("fadeOutLeft","fadeOutUp","fadeOutDown","fadeOutLeft","fadeOutRight");
	var element = $($("#line3").children()[index]);
	$(element).animo({
			animation : animationarray[index],
			duration : 5.0
	});
	FadeOutAnimation(index+1);
}

function FadeInAnimation(){
		$("#box-1").hide();
		$("#line3").show();
	
	var len = $("#line3").children().length;
	var i = 0;
	var element = $($("#line3").children()[0]);
	FadeOutAnimation(0);	
}

function hingeEffect(element){

  $(element).textillate({
  loop: true, // enable looping
  minDisplayTime: 2000, // sets the minimum display time for each text before it is replaced
  initialDelay: 0,  // sets the initial delay before starting the animation
  autoStart: true,  // set whether or not to automatically start animating
  inEffects: [], // custom set of 'in' effects. This effects whether or not the character is shown/hidden before or after an animation  
  outEffects: [ 'hinge' ],   // custom set of 'out' effects
 
  // in animation settings
  in: {
    effect: 'fadeInLeftBig', // set the effect name
    delayScale: 1.5, // set the delay factor applied to each consecutive character
    delay: 50, // set the delay between each character
    sync: false,  // set to true to animate all the characters at the same time
    shuffle: false  // randomize the character sequence (note that shuffle doesn't make sense with sync = true)
  },
 
  // out animation settings.
  out: {
    effect: 'hinge',
    delayScale: 1.5,
    delay: 50,
    sync: false,
    shuffle: false,
  }
});
}


