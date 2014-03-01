		var function_list=[
		"script1","script2","script3","script4","script5","script11","script12","script13"
		];
function masterVideoStart(lines,times)
{

	$m = $("#masterContent");
	animation_queue = [];
	for(z=0;z<lines.length;z++)
	{	console.log(z);
		// animation_queue.push(arc_text_5_10($m,lines[z],times[z],z));
		animation_queue.push(multi_dir_fade_5_10($m,lines[z],times[z],z));

	}
	console.log(animation_queue);
		do_animate(animation_queue,0);
}

function arc_text_5_10($m,line,time,idx)
{	
	words=line.split(" ");
	d1 = "";
	d2 = "";
	for( i=0;i<words.length/2;i++)
		d1+=words[i]+" ";
	if(words.length%2==0)
		begin=words.length/2;
	else
		begin=words.length/2+1;
	for(i=parseInt(begin);i<words.length;i++)
		d2+=words[i]+" ";
	$("#masterContent").append("<div id='line"+idx+"'><div id='line"+idx+"div1' class='no-display'>"+d1+"</div><div id='line"+idx+"div2' class='no-display'>"+d2+"</div></div>");
	 $("#masterContent "+"#line"+idx+"div1").arctext({dir:-1});
	 $("#masterContent "+"#line"+idx+"div2").arctext();
	temp_obj=[];
	temp_obj.key = "line"+idx;
	temp_obj.val ="arc_text_5_10";
	temp_obj.time = time;
	return temp_obj;
}
function anim_arc_text_5_10(line,time)
{	
	$("#"+line+"div1").removeClass("no-display");
	console.log(Math.floor((Math.random()*300)+120));
	console.log("#"+line);
	$("#"+line).css({"position":"absolute","top":Math.floor((Math.random()*200)+20)});
	$("#"+line+"div1").addClass("disp-mid-left");
	$("#"+line+"div2").addClass("disp-mid-right");
	// console.log(	"#"+line+"div2");
	$("#"+line+"div1").arctext('set', {
						radius		: 11, 
						dir			: 1, 

						animation	: {
							speed	: 320
						}
					},function(){
						alert("SSS");
						$("#"+line+"div1").addClass("no-display");
					});
	
	setTimeout(function(){
	$("#"+line+"div2").removeClass("no-display");
	$("#"+line+"div2").arctext('set', {
						radius		: 11, 
						dir			: -1, 

						animation	: {
							speed	: 320
						}
					});
	setTimeout(function(){
	$("#"+line+"div1").addClass("no-display");
	$("#"+line+"div2").addClass("no-display");
	},parseInt(time*1000-1000));
},500);

}
function do_animate(animation_queue,prev_time)
{	obj = animation_queue[0];
	console.log(parseInt(prev_time*1000));
	animation_queue = animation_queue.splice(1);
	// console.log(animation_queue);
	// return 0;
	if(obj.val=="arc_text_5_10")
		setTimeout(anim_arc_text_5_10,parseInt(prev_time*1000),obj.key,obj.time);
	if(obj.val=="pulsate_2_4")
		setTimeout(anim_pulsate_2_4,parseInt(prev_time*1000),obj.key,obj.time);
	if(obj.val=="textillate_5_10")
		setTimeout(anim_textillate_5_10,parseInt(prev_time*1000),obj.key,obj.time);
	if(obj.val== "flashtext_5_10")
		setTimeout(anim_flashtext_5_10,parseInt(prev_time*1000),obj.key,obj.time);
	if(obj.val=="multi_dir_fade_5_10")
		setTimeout(anim_multi_dir_fade_5_10,parseInt(prev_time*1000),obj.key,obj.time);


	prev_time += obj.time;
	// console.log(animation_queue.length);
	if (animation_queue.length >=1)
		do_animate(animation_queue,prev_time);

}

//GG
function pulsate_2_4($m,line,time,idx)
{
	console.log(line);
	$("#masterContent").append("<div id='line"+idx+"' class='no-display'>"+line+"</div>");
	temp_obj=[];
	temp_obj.key = "line"+idx;
	temp_obj.val ="pulsate_2_4";
	temp_obj.time = time;
	return temp_obj;
}
function anim_pulsate_2_4(line,time){
	// Chorus function
	$("#"+line).removeClass("no-display");
	neonGlow(line);
	$("#"+line).addClass("pulse");
	setTimeout(function(){$("#"+line).addClass("no-display")},parseInt(time*1000));
}

function neonGlow(line){

	 $("#"+line).novacancy({
     'reblinkProbability': 0.1,
    'blinkMin': 0.2,
    'blinkMax': 0.7,
    'loopMin': 0.5,
    'loopMax': 5,
    'color': '#ffffff',
    'glow': ['0 0 80px #ffffff', '0 0 30px #008000', '0 0 6px #0000ff']
  });

  // setTimeout(function (){$("#"+line).hide(); }, 3000);
}

//Saloni
function textillate_5_10($m,line,time,idx){
$("#masterContent").append("<div id='line"+idx+"' class='no-display'>"+line+"</div>");
	temp_obj=[];
	temp_obj.key = "line"+idx;
	temp_obj.val ="textillate_5_10";
	temp_obj.time = time;
	return temp_obj;
}

function anim_textillate_5_10(line,time) {
	$("#"+line).removeClass("no-display");
	$('#'+line).fitText(0.6).textillate({
		autoStart : true,
		loop : false,
		minDisplayTime : 14000,
	});
	setTimeout(function(){$("#"+line).addClass("no-display")},parseInt(time*1000))
}

function flashtext_5_10($m,line,time,idx){
	words=line.split(" ");
	d1 = "";
	for( i=0;i<words.length;i++)
		d1+="<div id='line"+idx+"div"+i+"'>"+words[i]+"</div>";
$("#masterContent").append("<div id='line"+idx+"' class='no-display'>"+d1+"</div>");
	temp_obj=[];
	temp_obj.key = "line"+idx;
	temp_obj.val ="flashtext_5_10";
	temp_obj.time = time;
	return temp_obj;
}

function anim_flashtext_5_10(line,time) {
	$("#"+line).removeClass("no-display");
	count = $("#"+line).children().length;
	$("#"+line).auderoFlashingText({
				// repeat : count,
				fadeIn:0,
				fadeOut:parseInt(time*1000/count),
				duration:0,
				// duration : parseInt(time*1000),
				fontMinSize : 50.0,
				selection : "ascending",
			});
	setTimeout(function(){$("#"+line).addClass("no-display")},parseInt(time*1000))
}

function FadeOutAnimation(line,index,time){

	var animationarray = new Array("fadeOutLeft","fadeOutUp","fadeOutDown","fadeOutLeft","fadeOutRight");
	var count = $("#"+line).children().length;

	var element = $($("#"+line).children()[index]);
	rand_index = parseInt(Math.random()*animationarray.length);
	// hingeEffect(element);
	$(element).animo({
			animation : animationarray[rand_index],
			duration : parseInt(time*1000/count),
			fadeOut:0,
			fadeIn:0,
			keep:true
	});
	if (count != index+1)
		FadeOutAnimation(line,index+1);
}
function anim_multi_dir_fade_5_10(line,time)
{
	$("#"+line).removeClass("no-display");
	FadeOutAnimation(line,0,time);	
	setTimeout(function(){$("#"+line).addClass("no-display")},parseInt(time*1000))
}

function multi_dir_fade_5_10($m,line,time,idx){
	words=line.split(" ");
	d1 = "";
	for( i=0;i<words.length;i++)
		d1+="<div id='line"+idx+"div"+i+"'>"+words[i]+"</div>";
	$("#masterContent").append("<div id='line"+idx+"' class='no-display'>"+d1+"</div>");
	temp_obj=[];
	temp_obj.key = "line"+idx;
	temp_obj.val ="multi_dir_fade_5_10";
	temp_obj.time = time;
	return temp_obj;
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


//Shubham

function script3(data,time){				//For small line
		$.keyframe.define({
    		name: 'ball-roll',
    		from: {
        		'transform': 'rotate(-25deg)' //Note that 'transform' will be autoprefixed for you
    			},
    		to: {
        		'transform': 'rotate(25deg)' //Note that 'transform' will be autoprefixed for you
    		}
});
		var h1="<div class='script3'>"+data+"</div>";
			$("#stage").append(h1);
			transform=vendorPrefix+'transform';
			$('.script3').css({'top':'220px','left':'200px','overflow':'hidden','display':'block','position':'absolute','font-size':'75px'});
			$('.script3').playKeyframe({
   				name: 'ball-roll', // name of the keyframe you want to bind to the selected element
   				duration: time, // [optional, default: 0, in ms] how long you want it to last in milliseconds
  				timingFunction: 'linear', // [optional, default: ease] specifies the speed curve of the animation
    			delay: 0, //[optional, default: 0, in ms]  how long you want to wait before the animation starts in milliseconds, default value is 0
    			repeat: '3', //[optional, default:1]  how many times you want the animation to repeat, default value is 1
    			direction: 'normal', //[optional, default: 'normal']  which direction you want the frames to flow, default value is normal
    			fillMode: 'forwards', //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
    			complete: function(){
    				remove_1('script3');
    			} //[optional]  Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
				});

	}

	function script4(data,time){					//For long time
		$.keyframe.define([{
			name:'script4',
			'0%':{'top':'40','bottom':'','left':'','right':''},
			'50%':{'top':'440','bottom':'','left':'','right':''},
			'100%':{'top':'40','bottom':'','left':'','right':''}
		}]);
		var h1="<div class='script4'>"+data+"</div>";
			$("#stage").append(h1);
			transform=vendorPrefix+'transform';
			$('.script4').css({'font-size':'42px','position':'absolute'});
			$('.script4').playKeyframe({
   				name: 'script4', // name of the keyframe you want to bind to the selected element
   				duration: time, // [optional, default: 0, in ms] how long you want it to last in milliseconds
  				timingFunction: 'linear', // [optional, default: ease] specifies the speed curve of the animation
    			delay: 100, //[optional, default: 0, in ms]  how long you want to wait before the animation starts in milliseconds, default value is 0
    			repeat: '1', //[optional, default:1]  how many times you want the animation to repeat, default value is 1
    			direction: 'normal', //[optional, default: 'normal']  which direction you want the frames to flow, default value is normal
    			fillMode: 'forwards', //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
    			complete: function(){
    				remove_1('script4');
    			} //[optional]  Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
				});
	}

	function script5(data,time){
		$.keyframe.define([{
			name:'out-of-the-box',
			from:{
				'font-size':'50%'
			},
			to:{
				'font-size':'500%'
			}
		}]);

		var h1="<div class='script5'>"+data+"</div>";
		$('#stage').append(h1);

		 $('.script5').playKeyframe({
		 	name:'out-of-the-box',
		 	duration:time,
		 	timingFunction:'ease',
		 	delay:0,
		 	repeat:'1',
		 	direction:'normal',
		 	fillMode:'forwards',
		 	complete:function(){
		 		remove_1('script5');
		 	}

		 });
	}

	function script6(data,time){
		var h1="<div class='script6'>"+data+"</div>";
		$("#stage").append(h1);
		$('.script6').css({"position":"absolute","right":"50px","top":"50px","font-size":"12px"});
		$('.script6').animate({top:100,"font-size":"320px"},time,function(){
			remove_1("script6");
		});
	}
	function script7(data,time){
		var h1="<div class='script7'>"+data+"</div>";
		$("#stage").append(h1);
		$('.script7').css({"position":"absolute","right":"50px","bottom":"50px","font-size":"12px"});
		$('.script7').animate({top:100,"font-size":"320px"},time,function(){
			remove_1("script7");
		});
	}
	function script8(data,time){
		var h1="<div class='script8'>"+data+"</div>";
		$("#stage").append(h1);
		$('.script8').css({"position":"absolute","left":"50px","bottom":"50px","font-size":"12px"});
		$('.script8').animate({top:100,"font-size":"320px"},2000,function(){
			remove_1("script8");
		});
	}

	function script11(data,time){
	$.keyframe.define({
    		name: 'scaling',
    		from: {
        		'transform': 'scale(1,1)' //Note that 'transform' will be autoprefixed for you
    			},
    		to: {
        		'transform': 'scale(2,2)' //Note that 'transform' will be autoprefixed for you
    		}
});
		var h1="<div class='script11'>"+data+"</div>";
			$("#stage").append(h1);
			transform=vendorPrefix+'transform';
			$('.script11').css({'top':'220px','left':'180px','overflow':'hidden','display':'block','position':'absolute','font-size':'32px'});
			$('.script11').playKeyframe({
   				name: 'scaling', // name of the keyframe you want to bind to the selected element
   				duration: time, // [optional, default: 0, in ms] how long you want it to last in milliseconds
  				timingFunction: 'linear', // [optional, default: ease] specifies the speed curve of the animation
    			delay: 0, //[optional, default: 0, in ms]  how long you want to wait before the animation starts in milliseconds, default value is 0
    			repeat: '1', //[optional, default:1]  how many times you want the animation to repeat, default value is 1
    			direction: 'normal', //[optional, default: 'normal']  which direction you want the frames to flow, default value is normal
    			fillMode: 'forwards', //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
    			complete: function(){
    				remove_1('script11');
    			} //[optional]  Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
				});
		
	}

	function script12(data,time){
	$.keyframe.define({
    		name: 'scaling',
    		from: {
        		'transform': 'scale(2,2)' //Note that 'transform' will be autoprefixed for you
    			},
    		to: {
        		'transform': 'scale(1,1)' //Note that 'transform' will be autoprefixed for you
    		}
});
		var h1="<div class='script12'>"+data+"</div>";
			$("#stage").append(h1);
			transform=vendorPrefix+'transform';
			$('.script12').css({'top':'220px','left':'150px','overflow':'hidden','display':'block','position':'absolute','font-size':'32px'});
			$('.script12').playKeyframe({
   				name: 'scaling', // name of the keyframe you want to bind to the selected element
   				duration: time, // [optional, default: 0, in ms] how long you want it to last in milliseconds
  				timingFunction: 'linear', // [optional, default: ease] specifies the speed curve of the animation
    			delay: 0, //[optional, default: 0, in ms]  how long you want to wait before the animation starts in milliseconds, default value is 0
    			repeat: '1', //[optional, default:1]  how many times you want the animation to repeat, default value is 1
    			direction: 'normal', //[optional, default: 'normal']  which direction you want the frames to flow, default value is normal
    			fillMode: 'forwards', //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
    			complete: function(){
    				remove_1('script12');
    			} //[optional]  Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
				});
		
	}

	function script13(data,time){					// For short durations
		var h1="<div class='script13'>"+data+"</div>";
		$("#stage").append(h1);
		$('.script13').css({"position":"absolute","left":"50px","top":"50px","font-size":"75px","display":"none"});
		$('.script13').slideDown(time/2,function(){
			setTimeout(function(){
				remove_1("script13");
			},time/2);
			
		});
	}

		function remove_1(class_name){
		$('.'+class_name).remove();
	}