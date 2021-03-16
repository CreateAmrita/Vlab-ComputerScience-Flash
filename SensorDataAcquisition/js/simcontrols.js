// JavaScript Document

/// Variable declaration

var W=R=G=0;
var red=0;
var white=0;
var ground=0;
var sldr=2;
var redflag=0;
var gndflag=0;
var startFlag=0;

/// canvas for bg image
var bgCanvas = document.getElementById("bgCanvas");
bgCanvas.width = 587;
bgCanvas.height = 560;
var bgCtx = bgCanvas.getContext('2d');
var bgImg = new Image;
bgImg.onload = function(){ 
	bgCtx.drawImage(bgImg,0,0);
	
	document.getElementById("instrct2").style.visibility="hidden";
	document.getElementById("instrct1").style.visibility="visible";
	document.getElementById("instrct3").style.visibility="hidden";

};
bgImg.src=simPath+'images/00000.png';

/// canvas for boardwire image
var boardwireCanvas = document.getElementById("boardwireCanvas");
boardwireCanvas.width = 232;
boardwireCanvas.height = 206;
var boardwireCtx = boardwireCanvas.getContext('2d');
var boardwireImg = new Image;
boardwireImg.onload = function(){ 
	boardwireCtx.drawImage(boardwireImg,0,0);
	

};
//boardwireImg.src=simPath+'images/00001.png';

/// canvas for boardwire image
var boardwireCanvas2 = document.getElementById("boardwireCanvas2");
boardwireCanvas2.width = 232;
boardwireCanvas2.height = 206;
var boardwireCtx2 = boardwireCanvas2.getContext('2d');
var boardwireImg2 = new Image;
boardwireImg2.onload = function(){ 
	boardwireCtx2.drawImage(boardwireImg2,0,0);
};
boardwireImg2.src=simPath+'images/_00001.png';
boardwireCanvas2.style.visibility="hidden";

/// canvas for board image
var boardCanvas = document.getElementById("boardCanvas");
boardCanvas.width = 232;
boardCanvas.height = 139;
var boardCtx = boardCanvas.getContext('2d');
var boardImg = new Image;
boardImg.onload = function(){ 
	boardCtx.drawImage(boardImg,0,0);
};
boardImg.src=simPath+'images/00003.png';

/// canvas for plant image
var plantCanvas = document.getElementById("plantCanvas");
plantCanvas.width = 379;
plantCanvas.height = 315;
var plantCtx = plantCanvas.getContext('2d');
var plantImg = new Image;
plantImg.onload = function(){ 
plantCtx.drawImage(plantImg,0,0);
};
plantImg.src=simPath+'images/_00004.png';
plantCanvas.style.visibility="hidden";

/// canvas for plant image
var plantBoard = document.getElementById("plantBoard");
plantBoard.width = 586;
plantBoard.height = 273;
var plantBoardCtx = plantBoard.getContext('2d');
var plantBoardImg = new Image;
plantBoardImg.onload = function(){ 
plantBoardCtx.drawImage(plantBoardImg,0,0);
};
plantBoardImg.src=simPath+'images/board.png';

/// canvas for plant image
var plantBoard2 = document.getElementById("plantBoard2");
plantBoard2.width = 586;
plantBoard2.height = 497;
var plantBoardCtx2 = plantBoard2.getContext('2d');
var plantBoardImg2 = new Image;
plantBoardImg2.onload = function(){ 
plantBoardCtx2.drawImage(plantBoardImg2,0,0);
};
plantBoardImg2.src=simPath+'images/image1.png';
plantBoard2.style.visibility="hidden";

/// canvas for boardtop image
var topCanvas = document.getElementById("topCanvas");
topCanvas.width = 249;
topCanvas.height = 162;
var topCtx = topCanvas.getContext('2d');
var topImg = new Image;
topImg.onload = function(){ 
topCtx.drawImage(topImg,-3,68);
};
//topImg.src=simPath+'images/boardtop.png';
topImg.src=simPath+'images/motscrew.png';


var zoomflag=0;

	topCanvas.onclick = function(){
		if(waterflag)
		{
		zoomflag=1;
		clearTimeout(timerID2);
		blinkarrow.style.visibility="hidden";
		waterGif.style.visibility="hidden";
		redconnectedDiv.style.visibility="hidden";
		silverconnectedDiv.style.visibility="hidden";
		bgCanvas.style.visibility="hidden";
		boardwireCanvas.style.visibility="hidden";
		boardCanvas.style.visibility="hidden";
		batteryDiv.style.visibility="hidden";
		//plantCanvas.style.visibility="hidden";
		plantBoard.style.visibility="hidden";
		topCanvas.style.visibility="hidden";
		dragWrap.style.visibility="hidden";
		plantBoard2.style.visibility="hidden";
		zoombgDiv.style.visibility="visible";
		zoomDiv.style.visibility="visible";
		//instdiv1.style.visibility="hidden";
		closeBtn.style.visibility="hidden";
		blackDiv.style.visibility="visible";
		document.getElementById("instrct1").style.visibility="hidden";
		document.getElementById("instrct2").style.visibility="visible";
		document.getElementById("instrct3").style.visibility="hidden";
		if(W==0){
			whiteDiv.style.visibility="visible";
		}
		if(R==0){
			redDiv.style.visibility="visible";
		}
		if(G==0){
			groundDiv.style.visibility="visible";
		}
		if(W==1 && R==1 && G==1)
		{
			closeBtn.style.visibility="visible";
		}
		else
		{
			closeBtn.style.visibility="hidden";
		}
		}
	
}
////
$(document).ready(function(){
	$("#batteryDiv").draggable(
	{containment: "#dragWrap", scroll: true,axis:'x'});//function(){}
	$( ".moistureSlider" ).live( "slidestop", function(event, ui) {
 			 moistureSliderFn();
			 
		});	
});
var rangeVal=2000;
/// Function called for slider movement
function onchangeSlider(newVal)
{
	document.getElementById("moisture").innerHTML=newVal;
}
function moistureSliderFn(){
	newVal=document.getElementById("moistureSlider").value;
	rangeVal=newVal*1000;
	startSamplngRate();
	document.getElementById("moisture").innerHTML=newVal;
	sldr=document.getElementById("moisture").innerHTML;
	if(plantBoard2.style.visibility=="visible"){
		startTimer();		
		startSamplngRate();			
}
}
var timerID1;
var timerID2;
var count=2000;
function startSamplngRate()
{
	timerID1 = setTimeout("showsampngRate()",1);
}
function showsampngRate()
{
	if(startFlag)
	{
	if(count<rangeVal)
	{
	count=count+2;
	}
	else if(count>rangeVal)
	{
		
		count=count-2;
	}
	document.getElementById("samplngspan").innerHTML=count;
	startSamplngRate();
	}
}
function startTimer() {
    running = true;
    now = new Date();
    now = now.getTime();
    endTime = now + ( 2000);
    showCountDown();
}
var waterflag=1;
function showCountDown() {
    var now = new Date();
    now = now.getTime();
    if (endTime - now <= 0) {
        stopTimer();
		waterGif.style.visibility="hidden";
		waterflag=1;
    } else {
        var delta = new Date(endTime - now);
        var theMin = delta.getMinutes();
        var theSec = delta.getSeconds();
        var theTime = theMin;
        theTime += ((theSec < 20) ? ":0" : ":") + theSec;
	 	waterGif.style.visibility="visible";
		waterflag=0;
        if (running) {
            timerID = setTimeout("showCountDown()",1000);
        }
    }
}
function stopTimer() {
    clearTimeout(timerID);
	clearTimeout(timerID1);
    running = false;
	waterflag=1;
}


$(".screw").click(function(event)
{
	if(event.target.id == "lscrew6")
	{
		if(white==1)
		{
			zoomwhiteDiv.style.visibility="visible";
			whiteDiv.style.visibility="hidden";
			zoomwhiteDiv.style.left=-50+"px";
			zoomwhiteDiv.style.top=13+"px";
			zoomwhiteDiv.style.width=570+"px";
			zoomwhiteDiv.style.height=150+"px";
			zoomwhiteDiv.style.backgroundImage="url("+simPath+"images/WhiteVCC.png)";
			W=1;
		}
	} 
	else if(event.target.id == "rscrew11"||event.target.id == "rscrew15"||event.target.id == "rscrew14"||event.target.id == "rscrew10"||event.target.id == "rscrew5"||event.target.id == "rscrew6"||event.target.id == "rscrew7"||event.target.id == "rscrew1")
	{
		if(red==1)
		{
			if(event.target.id == "rscrew11")
			{
				zoomredDiv.style.visibility="visible";
				zoomredDiv.style.left=-30+"px";
				zoomredDiv.style.top=55+"px";
				zoomredDiv.style.width=270+"px";
				zoomredDiv.style.height=160+"px";
				zoomredDiv.style.backgroundImage="url("+simPath+"images/redA4.png)";
				redDiv.style.visibility="hidden";
				redflag=5;
			}
			else if(event.target.id == "rscrew15")
			{
				zoomredDiv.style.height=50+"px";
				zoomredDiv.style.width=150+"px";
				zoomredDiv.style.left=-5+"px";
				zoomredDiv.style.top=55+"px";
				zoomredDiv.style.visibility="visible";
				zoomredDiv.style.backgroundImage="url("+simPath+"images/redA71.png)";
				redDiv.style.visibility="hidden";
				redflag=8;
			}
			else if(event.target.id == "rscrew14")
			{
				zoomredDiv.style.visibility="visible";
				zoomredDiv.style.left=-10+"px";
				zoomredDiv.style.top=55+"px";
				zoomredDiv.style.width=270+"px";
				zoomredDiv.style.height=160+"px";
				zoomredDiv.style.backgroundImage="url("+simPath+"images/redA6.png)";
				redDiv.style.visibility="hidden";
				redflag=7;
			}
			else if(event.target.id == "rscrew10")
			{
				zoomredDiv.style.visibility="visible";
				zoomredDiv.style.left=-20+"px";
				zoomredDiv.style.top=55+"px";
				zoomredDiv.style.width=270+"px";
				zoomredDiv.style.height=160+"px";
				zoomredDiv.style.backgroundImage="url("+simPath+"images/redA5.png)";
				redDiv.style.visibility="hidden";
				redflag=6;
			}
			else if(event.target.id == "rscrew5")
			{
				zoomredDiv.style.left=-55+"px";
				zoomredDiv.style.top=55+"px";
				zoomredDiv.style.height=360+"px";
				zoomredDiv.style.width=270+"px";
				zoomredDiv.style.visibility="visible";
				zoomredDiv.style.backgroundImage="url("+simPath+"images/redA3.png)";
				redDiv.style.visibility="hidden";
				redflag=4;
			}
			else if(event.target.id == "rscrew6")
			{
				zoomredDiv.style.visibility="visible";
				zoomredDiv.style.left=-65+"px";
				zoomredDiv.style.top=55+"px";
				zoomredDiv.style.height=360+"px";
				zoomredDiv.style.width=270+"px";
				zoomredDiv.style.backgroundImage="url("+simPath+"images/redA2.png)";
				redDiv.style.visibility="hidden";
				redflag=3;
			}
			else if(event.target.id == "rscrew7")
			{
				zoomredDiv.style.visibility="visible";
				zoomredDiv.style.left=-90+"px";
				zoomredDiv.style.top=55+"px";
				zoomredDiv.style.height=360+"px";
				zoomredDiv.style.width=270+"px";
				zoomredDiv.style.backgroundImage="url("+simPath+"images/redA1.png)";
				redDiv.style.visibility="hidden";
				redflag=2;
			}
			else if(event.target.id == "rscrew1")
			{
				zoomredDiv.style.visibility="visible";
				zoomredDiv.style.left=-110+"px";
				zoomredDiv.style.top=55+"px";
				zoomredDiv.style.height=360+"px";
				zoomredDiv.style.width=270+"px";
				zoomredDiv.style.backgroundImage="url("+simPath+"images/redA0.png)";
				redDiv.style.visibility="hidden";
				redflag=1;
				
			}
			R=1;
		}
	} 
	else if(event.target.id == "rscrew4"||event.target.id == "rscrew8"||event.target.id == "rscrew2"||event.target.id == "lscrew4")
	{
		if(ground==1)
		{
			if(event.target.id == "rscrew4")
			{
				zoomgroundDiv.style.visibility="visible";
				zoomgroundDiv.style.backgroundImage="url("+simPath+"images/silverGND1.png)";
				zoomgroundDiv.style.left=30+"px";
				zoomgroundDiv.style.top=68+"px";
				zoomgroundDiv.style.height=360+"px";
				zoomgroundDiv.style.width=270+"px";
				groundDiv.style.visibility="hidden";
				gndflag=1;
			}
			else if(event.target.id == "rscrew8")
			{
				zoomgroundDiv.style.visibility="visible";
				zoomgroundDiv.style.backgroundImage="url("+simPath+"images/silverGND2.png)";
				zoomgroundDiv.style.left=30+"px";
				zoomgroundDiv.style.top=68+"px";
				zoomgroundDiv.style.height=360+"px";
				zoomgroundDiv.style.width=270+"px";
				groundDiv.style.visibility="hidden";
				gndflag=2;
			}
			else if(event.target.id == "rscrew2")
			{
				zoomgroundDiv.style.visibility="visible";
				zoomgroundDiv.style.backgroundImage="url("+simPath+"images/silverGND3.png)";
				zoomgroundDiv.style.left=30+"px";
				zoomgroundDiv.style.top=68+"px";
				zoomgroundDiv.style.height=360+"px";
				zoomgroundDiv.style.width=270+"px";
				groundDiv.style.visibility="hidden";
				gndflag=3;
			}
			else if(event.target.id == "lscrew4")
			{
				zoomgroundDiv.style.visibility="visible";
				zoomgroundDiv.style.backgroundImage="url("+simPath+"images/silverGND_right.png)";
				zoomgroundDiv.style.left=35+"px";
				zoomgroundDiv.style.top=30+"px";
				zoomgroundDiv.style.height=190+"px";
				zoomgroundDiv.style.width=570+"px";
				groundDiv.style.visibility="hidden";
				gndflag=4;
			}

			G=1;
		}
	}
	if(white==1 || red==1 || ground==1)
	{
		if(white==1 && event.target.id != "lscrew6"){
		showAlert();
		}
		if((red==1)&&(event.target.id == "rscrew3"||event.target.id == "rscrew2"||event.target.id == "rscrew4"||event.target.id == "rscrew8"||event.target.id == "rscrew9"||event.target.id == "rscrew12"||event.target.id == "rscrew13"||event.target.id == "lscrew1"||event.target.id == "lscrew2"||event.target.id == "lscrew3"||event.target.id == "lscrew4"||event.target.id == "lscrew5"||event.target.id == "lscrew6"||event.target.id == "lscrew7"||event.target.id == "lscrew8"||event.target.id == "lscrew9"||event.target.id == "lscrew10"||event.target.id == "lscrew11"||event.target.id == "lscrew12"||event.target.id == "lscrew13"||event.target.id == "lscrew14"||event.target.id == "lscrew15"))
		{
			showAlert();
		}
		if(ground==1 && (event.target.id == "rscrew1"||event.target.id == "rscrew3"||event.target.id == "rscrew5"||event.target.id == "rscrew6"||event.target.id == "rscrew7"||event.target.id == "rscrew9"||event.target.id == "rscrew10"||event.target.id == "rscrew11"||event.target.id == "rscrew12"||event.target.id == "rscrew13"||event.target.id == "rscrew14"||event.target.id == "rscrew15"||event.target.id == "lscrew1"||event.target.id == "lscrew2"||event.target.id == "lscrew3"||event.target.id == "lscrew5"||event.target.id == "lscrew6"||event.target.id == "lscrew7"||event.target.id == "lscrew8"||event.target.id == "lscrew9"||event.target.id == "lscrew10"||event.target.id == "lscrew11"||event.target.id == "lscrew12"||event.target.id == "lscrew13"||event.target.id == "lscrew14"||event.target.id == "lscrew15"))
		{
			showAlert();
			//$( "#dialog" ).dialog();
			//document.getElementById("dialog").style.visibility="visible";
		}
	}
	if(W==1 && R==1 && G==1)
	{
		closeBtn.style.visibility="visible";
	}
	else
	{
		closeBtn.style.visibility="hidden";
	}
	white=0;
	red=0;
	ground=0;		   
	});

function showAlert() {

	//alert('Wrong Connection!');
	jAlert('Wrong Connection', 'Message!!!');

}

function whiteclicked(){
	white=1;
	red=0;
	ground=0;
	
}

function redclicked(){
	red=1;
	white=0;
	ground=0;
}

function groundclicked(){
	ground=1;
	white=0;
	red=0;
}
function groundGlow(){
	document.getElementById("groundGlow").style.visibility="visible";
}

function redGlow(){
	document.getElementById("redGlow").style.visibility="visible";
}

function whiteGlow(){
	document.getElementById("whiteGlow").style.visibility="visible";
}

function nogroundGlow(){
	document.getElementById("groundGlow").style.visibility="hidden";
}

function noredGlow(){
	document.getElementById("redGlow").style.visibility="hidden";
}

function nowhiteGlow(){
	document.getElementById("whiteGlow").style.visibility="hidden";
}

function zoomOut(){
		
	ground=0;
	white=0;
	red=0;
	zoomflag=0;
	batteryDiv.style.visibility="visible";
	bgCanvas.style.visibility="visible";
	boardwireCanvas.style.visibility="visible";
	boardCanvas.style.visibility="visible";
	//plantCanvas.style.visibility="visible";	
	topCanvas.style.visibility="visible";
	dragWrap.style.visibility="visible";
	plantBoard.style.visibility="visible";
	zoombgDiv.style.visibility="hidden";
	zoomDiv.style.visibility="hidden";
	whiteDiv.style.visibility="hidden";
	redDiv.style.visibility="hidden";
	groundDiv.style.visibility="hidden";
	closeBtn.style.visibility="hidden";
	blackDiv.style.visibility="hidden";
	document.getElementById("instrct1").style.visibility="hidden";
	document.getElementById("instrct2").style.visibility="hidden";
document.getElementById("instrct3").style.visibility="visible";
if(startFlag==1)
{
	blinkarrow.style.visibility="visible";
}
getinst();
	batterymove();
	
	if(W==1 && R==1 && G==1 && document.getElementById("batteryDiv").style.left==0+"px"){//
		
		document.getElementById("start").disabled=false;
		
		}
	if(W==1 && R==1 && G==1){
		//boardwireCanvas2.style.visibility="visible";
		//plantCanvas.style.visibility="visible";
			plantBoard2.style.visibility="visible";
			boardwireCanvas.style.visibility="hidden";
			boardCanvas.style.visibility="hidden";
			plantBoard.style.visibility="hidden";
			silverconnectedDiv.style.visibility="visible";
			redconnectedDiv.style.visibility="visible";
			if(gndflag==1)
			{
					silverconnectedDiv.style.visibility="visible";
			silverconnectedDiv.style.left=65+"px";
			silverconnectedDiv.style.top=-29+"px";
			silverconnectedDiv.style.width=80+"px";
			silverconnectedDiv.style.height=63+"px";
			silverconnectedDiv.style.backgroundImage="url("+simPath+"images/GND1.png)";
			}
			else if(gndflag==2)
			{
					silverconnectedDiv.style.visibility="visible";
			silverconnectedDiv.style.left=60+"px";
			silverconnectedDiv.style.top=-29+"px";
			silverconnectedDiv.style.width=80+"px";
			silverconnectedDiv.style.height=63+"px";
			silverconnectedDiv.style.backgroundImage="url("+simPath+"images/GND2.png)";
			}
			else if(gndflag==3)
			{
					silverconnectedDiv.style.visibility="visible";
			silverconnectedDiv.style.left=22+"px";
			silverconnectedDiv.style.top=-34+"px";
			silverconnectedDiv.style.width=180+"px";
			silverconnectedDiv.style.height=68+"px";
			silverconnectedDiv.style.backgroundImage="url("+simPath+"images/GND3.png)";
			}
			else if(gndflag==4)
			{
					silverconnectedDiv.style.visibility="visible";
			silverconnectedDiv.style.left=47+"px";
			silverconnectedDiv.style.top=-27+"px";
			silverconnectedDiv.style.width=250+"px";
			silverconnectedDiv.style.height=250+"px";
			silverconnectedDiv.style.backgroundImage="url("+simPath+"images/GND4.png)";
			}
			
	if(redflag==1)
	{
			redconnectedDiv.style.visibility="visible";
			redconnectedDiv.style.left=18+"px";
			redconnectedDiv.style.top=-34+"px";
			redconnectedDiv.style.width=80+"px";
			redconnectedDiv.style.height=67+"px";
			redconnectedDiv.style.backgroundImage="url("+simPath+"images/A0.png)";
			
	}
	else if(redflag==2)
	{
			redconnectedDiv.style.visibility="visible";
			redconnectedDiv.style.left=22+"px";
			redconnectedDiv.style.top=-34+"px";
			redconnectedDiv.style.width=80+"px";
			redconnectedDiv.style.height=68+"px";
			redconnectedDiv.style.backgroundImage="url("+simPath+"images/A1.png)";
	}
	else if(redflag==3)
	{
			redconnectedDiv.style.visibility="visible";
			redconnectedDiv.style.left=50+"px";
			redconnectedDiv.style.top=-30+"px";
			redconnectedDiv.style.width=80+"px";
			redconnectedDiv.style.height=63+"px";
			redconnectedDiv.style.backgroundImage="url("+simPath+"images/A2.png)";
	}
	else if(redflag==4)
	{
			redconnectedDiv.style.visibility="visible";
			redconnectedDiv.style.left=60+"px";
			redconnectedDiv.style.top=-30+"px";
			redconnectedDiv.style.width=80+"px";
			redconnectedDiv.style.height=63+"px";
			redconnectedDiv.style.backgroundImage="url("+simPath+"images/A3.png)";
	}
	else if(redflag==5)
	{
			redconnectedDiv.style.visibility="visible";
			redconnectedDiv.style.left=68+"px";
			redconnectedDiv.style.top=-30+"px";
			redconnectedDiv.style.width=80+"px";
			redconnectedDiv.style.height=64+"px";
			redconnectedDiv.style.backgroundImage="url("+simPath+"images/A4.png)";
	}
	else if(redflag==6)
	{
			redconnectedDiv.style.visibility="visible";
			redconnectedDiv.style.left=79+"px";
			redconnectedDiv.style.top=-32+"px";
			redconnectedDiv.style.width=100+"px";
			redconnectedDiv.style.height=65+"px";
			redconnectedDiv.style.backgroundImage="url("+simPath+"images/A5.png)";
	}
	else if(redflag==7)
	{
			redconnectedDiv.style.visibility="visible";
			redconnectedDiv.style.left=78+"px";
			redconnectedDiv.style.top=-30+"px";
			redconnectedDiv.style.width=150+"px";
			redconnectedDiv.style.height=63+"px";
			redconnectedDiv.style.backgroundImage="url("+simPath+"images/A6.png)";
	}
	else if(redflag==8)
	{
			redconnectedDiv.style.visibility="visible";
			redconnectedDiv.style.left=78+"px";
			redconnectedDiv.style.top=-30+"px";
			redconnectedDiv.style.width=150+"px";
			redconnectedDiv.style.height=64+"px";
			redconnectedDiv.style.backgroundImage="url("+simPath+"images/A7.png)";
	}
	}
	
}

function getinst()
{
	
	if(document.getElementById("batteryDiv").style.left==0+"px")
	{
		
		document.getElementById("instrct3").innerHTML="Click on the start button to start/stop the experiment.";

	}
	else
	{
		
		document.getElementById("instrct3").innerHTML="Drag the mote to the acquisition board.";
	}
}
function startExp(){
	if(document.getElementById("start").value=="Start"){
		startFlag=1;
		if(zoomflag==0)
		{
		blinkarrow.style.visibility="visible";
		}
		if(W==1 && R==1 && G==1 && document.getElementById("batteryDiv").style.left==0+"px"){
			if ( $.browser.mozilla == true){
				$('.moistureSlider').slider({ 
				disabled: false,
				max: 16,
				min: 2,
				step: 1,
				value: sldr
				});
			} else{
				document.getElementById("moistureSlider").disabled=false;
			}
			document.getElementById("start").value="Stop";
			
		}
	} else{
		startFlag=0;
		blinkarrow.style.visibility="hidden";
		waterGif.style.visibility="hidden";
		 stopTimer();
		document.getElementById("start").value="Start";
		if ( $.browser.mozilla == true){
			$('.moistureSlider').slider({ 
			disabled: true,
			max: 16,
			min: 2,
			step: 1,
			value: sldr
			});
		} else{
			document.getElementById("moistureSlider").disabled=true;
			
		}
	}
}

function batteryMouseUp(){
	if(W==1 && R==1 && G==1 && document.getElementById("batteryDiv").style.left==0+"px"){

		document.getElementById("start").disabled=false;
		
	}
}

$('#topCanvas').qtip({
   content: 'Click here to zoom',
   show: 'mouseover',
   hide: 'mouseout',
   position: { adjust: { x: -225, y: -50 } }
})
batterymove();
function batterymove()
{
	timerID2 = setTimeout("showbatteryscroll()",300);
}
function showbatteryscroll()
{
		if(document.getElementById("batteryDiv").style.left==0+"px")
		{
			if(W==1 && R==1 && G==1)
			{
				document.getElementById("start").disabled=false;
				document.getElementById("instrct3").innerHTML="Click on the start button to start/stop the experiment.";
			}
		}
		else
		{
			document.getElementById("start").disabled=true;
			document.getElementById("start").value="Start";
			blinkarrow.style.visibility="hidden";
			document.getElementById("moistureSlider").disabled=true;
			waterGif.style.visibility="hidden";
			document.getElementById("instrct3").innerHTML="Drag the mote to the acquisition board.";
		}
	batterymove();
}