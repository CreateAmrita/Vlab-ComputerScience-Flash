var point1={x:0,y:425};
var point2;
var radius1 = 55;
var radius2 = 52;
var c=0;
var startFlag=true;
var timer_id;
var txtval;	
var count=0;
var sendflag=0;
var GUI_containerArray=["winContentVideo"];
var GUI_titleArray=["tileWindow2"];
var powertras=document.getElementById("powerslider");
powertras.value=8;
var videoid11=document.getElementById("tileWindow2");
videoid11.style.visibility="hidden";
var currentstring="";
var radarray=[];

var minmax_RSSI=[[-46.84,-26],[-66,-39],[-66,-39],[-76,-41],[-76,-41],[-79,-56],[-79,-56],[-86,-67],[-86,-67],[-86,-67],[-94,-71],[-94,-71],[-94,-71],[-94,-71],[-94,-71],[-94,-71],[-94,-71],[-94,-71],[-94,-71],[-94,-71],[-94,-71],[-94,-71],[-94,-71],[-94,-71],[-94,-71],[-94,-71]]

var distance_range=[[5,50],[5,30],[5,30],[5,25],[5,25],[5,20],[5,20],[5,15],[5,15],[5,15],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10]]


for(var j=0;j<30;j++)
{
	radarray[j]=0.01;
}
var timer_id1;
$(document).ready(function()
{
	$("#tileWindow2").draggable(function(){});
	$("#receDiv").draggable({
        containment : "#contatiner"
      });
	$("#receDiv2").draggable({
        containment : "#contatiner"
      });
	$("#receDiv3").draggable({
        containment : "#contatiner"
      });
	$("#receDiv4").draggable({
        containment : "#contatiner"
      });
	
	$("#receDiv").mousemove(function() {getcordi("#receDiv");});
	$("#receDiv2").mousemove(function() {getcordi("#receDiv2");});
	$("#receDiv3").mousemove(function() {getcordi("#receDiv3");});
	$("#receDiv4").mousemove(function() {getcordi("#receDiv4");});
	setRSSIDiff();
		
	});

var pointXArr=[];
var pointYArr=[];
var pointIDArr=[];
var recvArray=["#receDiv","#receDiv2","#receDiv3","#receDiv4"];
var signalArray=[];
var distanceArray=[];
 
function getcordi(id)
{
	
	var p = $(id);
	
	var position = p.position();
	point2={x:position.left,y:position.top};
	lineDistance(point1,point2,id);
	
	if(sendflag>=1)
	{
		for(var i=0;i<recvArray.length;i++){
			
			for(var j=0;j<pointIDArr.length;j++)
			{
				if(String(pointIDArr[j])==String(recvArray[i]))
				{
					var recvID= $(String(pointIDArr[j]));
					var recvPos=recvID.position();	
					pointXArr[j]=recvPos.left+25;
					pointYArr[j]=recvPos.top+35;
						
					//document.getElementById("arrdisp").innerHTML=signalstrength;
					break;
				}
			}
		}	
		/*	clearInterval(timer_id);
		timer_id=setInterval("getstrings()",500);*/
		init(point1.x+5,point1.y+35,pointXArr,pointYArr);
		setPosition(pointXArr,pointYArr);
		drawdash(id);
		}
}


function lineDistance( point1, point2,recId )
{	
	var xs = 0;
	var ys = 0;
	var s;
	var distanceVar;
	xs = point2.x - point1.x;
	xs = xs * xs;
	ys = point2.y - point1.y;
	ys = ys * ys;
	s=Math.sqrt( xs + ys );//actual distance two points.
	s=s/radius2;
	distanceVar=s*5; 
	//document.getElementById("arrdisp").innerHTML=distanceVar;
	//$("#distanceDiv").text(distanceVar.toFixed(2)+" m");
	
	
	if(recId=="#receDiv")
	{
		
		distanceArray[0]=distanceVar.toFixed(2)+" m";
		
	}
	else if(recId=="#receDiv2")
	{
		
		distanceArray[1]=distanceVar.toFixed(2)+" m";
	}
	else if(recId=="#receDiv3")
	{
		
		distanceArray[2]=distanceVar.toFixed(2)+" m";
	}
	else if(recId=="#receDiv4")
	{
		
		distanceArray[3]=distanceVar.toFixed(2)+" m";
	}
	
	
	$("#distanceDiv1").text(distanceArray[0]);
	$("#distanceDiv2").text(distanceArray[1]);
	$("#distanceDiv3").text(distanceArray[2]);
	$("#distanceDiv4").text(distanceArray[3]);
	signalstr(distanceVar,recId);
	
}
var dispval=-7;
var disdeflt=20;
function showValue(val)
{
	
	if(val==2)
	{
		dispval=-25;
		disdeflt=7;
	}
	if(val==4)
	{
		dispval=-15;
		disdeflt=10;
	}
	if(val==6)
	{
		dispval=-10;
		disdeflt=15;
	}
	if(val==8)
	{
		dispval=-7;
		disdeflt=20;
	}
	if(val==10)
	{
		dispval=-5;
		disdeflt=25;
	}
	if(val==12)
	{
		dispval=-3;
		disdeflt=30;
	}
	if(val==14)
	{
		dispval=-1;
		disdeflt=35;
	}
	if(val==16)
	{
		dispval=0;
		disdeflt=45;
	}
	document.getElementById("midval").innerHTML=" "+dispval;
	setRSSIDiff();
	pointXArr=[];
	pointYArr=[];
	pointIDArr=[];
	//sendflag=1;
	if(sendflag==1)
	{
		for( i=0;i<4;i++)
		{
			getPos(recvArray[i]);
		}
		clearInterval(timer_id);
		timer_id=setInterval("getstrings()",500);
		init(point1.x+5,point1.y+35,pointXArr,pointYArr);
	}
	context.clearRect(0, 0, canvas.width, canvas.height);
	var w = canvas.width;
	canvas.width = 1;
	canvas.width = w; 
	
	startstreaming();
}
function removetooltip(){$('#receDiv').qtip('destroy');}
function removetooltip2(){$('#receDiv2').qtip('destroy');}
function removetooltip3(){$('#receDiv3').qtip('destroy');}
function removetooltip4(){$('#receDiv4').qtip('destroy');}

function showtooltip(){if(startFlag){$('#receDiv').qtip({content: 'Receiver id : <b>R1</b><br> RSSI (dBm) :<b><span id="signalDiv1"></span></b> <br>String : <b><span id="contentDiv1"></span></b> <br>Distance : <b><span id="distanceDiv1"></span></b>',style: { width: 115,border: {width: 1,radius: 3 },tip: true,name: 'cream'},position: { corner: {target: 'topRight',tooltip: 'bottomLeft'},target: 'mouse' }});}}
function showtooltip2(){if(startFlag){$('#receDiv2').qtip({content: 'Receiver id : <b>R2</b><br>RSSI (dBm) : <b><span id="signalDiv2"></span></b> <br>String :<b><span id="contentDiv2"></span></b><br>Distance : <b><span id="distanceDiv2"></span></b>',style: { width: 115,border: {width: 1,radius: 3 },tip: true,name: 'cream'},position: {corner: {target: 'topRight',tooltip: 'bottomLeft'}, target: 'mouse' }});}}
function showtooltip3(){if(startFlag){$('#receDiv3').qtip({content: 'Receiver id : <b>R3</b><br>RSSI (dBm) : <b><span id="signalDiv3"></span></b> <br>String :<b><span id="contentDiv3"></span></b><br>Distance : <b><span id="distanceDiv3"></span></b> ',style: { width: 115,border: {width: 1,radius: 3 },tip: true,name: 'cream'},position: { corner: {target: 'topRight',tooltip: 'bottomLeft'},target: 'mouse' }});}}
function showtooltip4(){if(startFlag){$('#receDiv4').qtip({content: 'Receiver id : <b>R4</b><br>RSSI (dBm) : <b><span id="signalDiv4"></span> </b><br>String :<b><span id="contentDiv4"></span></b><br>Distance : <b><span id="distanceDiv4"></span></b> ',style: { width: 115,border: {width: 1,radius: 3 },tip: true,name: 'cream'},position: {corner: {target: 'topRight',tooltip: 'bottomLeft'}, target: 'mouse' }});}}

//Finding the difference of RSSI values in the 0-45
function setRSSIDiff(){	
	for (var i=0;i<=25;i++){
		if (Math.abs(dispval)==i){
			diff=((minmax_RSSI[i][0]-minmax_RSSI[i][1])/45).toFixed(3); 
			RSSI_max=minmax_RSSI[i][0];
			RSSI_min=minmax_RSSI[i][1];			
			break;			
		}
		
	}
}


function getstrings()
{
//document.getElementById("arrdisp").innerHTML=signalArray;
var recCombo=document.getElementById("receivercombo");
	var splitString=new Array();	
	var txt1=document.getElementById("input_rpt1").value;
	for (var i=0;i<txt1.length;i++)
	{
		splitString[i]=txt1.charAt(i);
	}
	if(count<splitString.length)
	{
		txtval=splitString[count];
		count++;	
	}
	else
	{
		count=0;
		txtval=splitString[count];
		currentstring="";
	}
	currentstring=txtval;
	
			$("#contentDiv1").text("");
			$("#contentDiv2").text("");
			$("#contentDiv3").text("");
			$("#contentDiv4").text("");		
		if(signalArray[0]<0)
		{			
			$("#contentDiv1").text(currentstring);
		}
		if(signalArray[1]<0)
		{
			$("#contentDiv2").text(currentstring);
		}
		if(signalArray[2]<0)
		{
			$("#contentDiv3").text(currentstring);
		}
		if(signalArray[3]<0)
		{
			$("#contentDiv4").text(currentstring);
		}

}
function onload1()
{
	var videoid1=document.getElementById("tileWindow2");
	videoid1.style.visibility="hidden";
	var txtfiled1=document.getElementById("input_rpt1");
	var button1=document.getElementById("export");
	var recevcomb=document.getElementById("receivercombo");
	button1.disabled=true;
	recevcomb.disabled=true;
	startFlag=false;
	powertras.value=8;
	OnOff();
 }
function enablesend()
{
var button1=document.getElementById("export");
var recevcomb=document.getElementById("receivercombo");
button1.disabled=false;
recevcomb.disabled=false;
}
var signalstrength;
function signalstr(distanceVar,recId1)
{
	distanceVar=parseInt(distanceVar);
	var k=Math.abs(dispval);	
	if ( (distanceVar>distance_range[k][0]) && (distanceVar <distance_range[k][1]) ){
	  signalstrength=RSSI_min+(diff*distanceVar);
	  signalstrength=Math.round(signalstrength);	
	}else{
	  signalstrength="";	
	}
		
	if(recId1=="#receDiv"){		
		signalArray[0]=signalstrength;		
	}
	else if(recId1=="#receDiv2"){		
		signalArray[1]=signalstrength;
	}
	else if(recId1=="#receDiv3"){		
		signalArray[2]=signalstrength;
	}else if(recId1=="#receDiv4"){		
		signalArray[3]=signalstrength;
	}
	
	$("#signalDiv1").text(signalArray[0]);
	$("#signalDiv2").text(signalArray[1]);
	$("#signalDiv3").text(signalArray[2]);
	$("#signalDiv4").text(signalArray[3]);				
}
function showCrossSection(chkValue)
{
	var videoid=document.getElementById("tileWindow2");
	if (chkValue)
	{
		videoid.style.visibility="visible";
	}
	else
	{
		videoid.style.visibility="hidden";
	}
}
    var txtfiled1=document.getElementById("input_rpt1");
    var recevcomb=document.getElementById("receivercombo");
	var button1=document.getElementById("export");
	var canvas = document.getElementById("maincanvas");
    var context = canvas.getContext("2d");
	var getIdTrans=document.getElementById("transDiv");
	var getIdRecv1=document.getElementById("receDiv2");
	
function OnOff()
{
	var recevcomb=document.getElementById("receivercombo");
	if(startFlag==false)
	{
		document.getElementById("div1").style.visibility=document.getElementById("div2").style.visibility=document.getElementById("div3").style.visibility=document.getElementById("div4").style.visibility=document.getElementById("div5").style.visibility=document.getElementById("div6").style.visibility=document.getElementById("div7").style.visibility=document.getElementById("div8").style.visibility=document.getElementById("div9").style.visibility="visible";
		startFlag = true;
		document.getElementById("start").value="Off";
		txtfiled1.disabled=false;
	}
	else
	{
		/*document.getElementById("div1").style.visibility=document.getElementById("div2").style.visibility=document.getElementById("div3").style.visibility=document.getElementById("div4").style.visibility=document.getElementById("div5").style.visibility=document.getElementById("div6").style.visibility=document.getElementById("div7").style.visibility=document.getElementById("div8").style.visibility=document.getElementById("div9").style.visibility="hidden";*/
		startFlag = false;
		document.getElementById("start").value="On";
		txtfiled1.disabled=true;
		txtfiled1.value="";
		button1.disabled=true;
		recevcomb.disabled=true;
		clearInterval(timer_id1);
	
	}
	startstreaming();
}

function startstreaming()
{
	
	clearInterval(timer_id1);
	timer_id1=setInterval("restartsignal()", 1);
}
function restartsignal()
{
	if (startFlag==true)
	{
		canvas.style.visibility="visible";
		var arcX = 5;//canvas.width / 2;
		var arcY = 470 ;
		var startAngle =30; //1.1 * Math.PI;
		var endAngle = 45;// * Math.PI;
		var counterClockwise = false;   
		context.clearRect(0, 0, canvas.width, canvas.height);
	
		for(var j=0;j<30;j++)
		{
			if(radarray[j]>=radius1)
			{
				radarray[j]=0.01;
			}
			radarray[j]=radarray[j]+0.2;
		}
			
		for(var i=0;i<30;i++)
		{			 
			context.beginPath();
			context.arc(arcX, arcY, (radarray[i]+(i*radius1)), i+startAngle, endAngle, counterClockwise);
			context.lineWidth =1;//(powertras)-((i+1)*(powertras/10));
			
			// line color in specific range			
			switch (dispval){
			case 0:					
				alphaval=9;		
			 break;
			 case -1:				 
				alphaval=6;		
			 break;
			 case -3:
				alphaval=5;		
			 break;					  
			 case -5:
				alphaval=4;		
			 break;
			 case -7:
				 alphaval=3;					  		
			  break;
			  case -10:
				 alphaval=2;		
			  break;					  
			  case -15:
				 alphaval=2;		
			  break;
			  case -25:
				alphaval=2;	
	           break;				  
			}
			
			context.strokeStyle = 'rgba(255,0,0,'+(1-(i/alphaval))+')';
			context.stroke();	
		}
	
	}
	else
	{
	sendflag=0;
	context.clearRect(0, 0, canvas.width, canvas.height);
	canvas.style.visibility="hidden";
	clearInterval(timer_id1);
	clearDashes();
	}	
}
// Tile re-arrange on maximize

$.fn.tileArrange=function(maxim){
	
	var clickedTile = $(maxim).parent().parent().parent();
    $(".tile").parent().prepend(clickedTile);
	}

//---------------------------//

function maximFN(titleID,containerID,thisVal){
	$(".winClose").tileArrange(thisVal);
	var id=document.getElementById(containerID);
	var guicontID;
    var guititlID;
	 //alert($(id).height()+"   mxxx")
	// clearTimeout(timer_id);
	for(var i=0;i<GUI_containerArray.length;i++){
	  
		if($(id).height()<300){
			if((String(GUI_containerArray[i])==containerID)){
				document.getElementById(titleID).style.top="-120px";
				document.getElementById(titleID).style.left="-280px";	   
				$(document.getElementById(containerID)).animate({ height: "450px" },5 )
				$( document.getElementById(titleID)).animate({width: '555px' }, { duration: 5,
				complete: function() {	
				
				 if(this.id==GUI_titleArray[0]){ 
				 //loadLineChart();
				
					 if(startFlag==true)
					 {
						
					 }
				 }
				 else if(this.id==GUI_titleArray[1])
				 { 
				 	 loadBarChart() ; 
					 if(startFlag==true)
					 {
						startloading(); 
					 }
				 }
				 }  });
			}
			else{
			
			 if(i!=2){
				 guicontID= document.getElementById(GUI_containerArray[i]);
				 guicontID.innerHTML="";
			 }
				 
				//alert(GUI_containerArray[i]+"   lklklklkl")
					
				$(document.getElementById(GUI_containerArray[i])).animate({ height: "0px" } )
				
				if(i>0){
					if(titleID!=String(GUI_titleArray[0])){
					  $(document.getElementById(GUI_titleArray[i])).animate({width: '273px' },5 );
		           	}
				}
				else{
					
						 $(document.getElementById(GUI_titleArray[0])).animate({width: '555px' },5 );
				}
			}
		
		}
		else{
			document.getElementById(titleID).style.marginTop="0%";
				document.getElementById(titleID).style.marginLeft="0%";
			guititlID= document.getElementById(GUI_titleArray[i]);
			guititlID.style.width="273px";
			 
			$(document.getElementById(GUI_containerArray[i])).animate({ height: '200px' });
			
				if(i==0){
						if(titleID!=String(GUI_titleArray[0])){
							//alert("1121212121")
						  $(document.getElementById(GUI_titleArray[i])).animate({width: '273px' },{ duration: 5,
						  complete: function() {	
							 if(startFlag==true){
								startloading() ;
								}
							}  });
						}
				}
				else{
					 $(document.getElementById(GUI_titleArray[0])).animate({width: '555px' } ,{ duration: 400,
					complete: function() {	
					if(startFlag==true){
						startloading() 
					} 
					 } });
				}
			
		}
	}
} 
function  getPos(recvID1){	
recvID= $(String(recvID1));
var recvPos=recvID.position();	
var p = recvID;
var position = p.position();
point2={x:position.left,y:position.top};
lineDistance(point1,point2,String(recvID1));

	if(signalstrength<0 )
	{		
		pointIDArr.push(recvID1);
		pointXArr.push(parseInt(recvPos.left)+25);
		pointYArr.push(parseInt(recvPos.top)+35);
	}
	
}

function sendFn()
{
 pointXArr=[];
 pointYArr=[];
 pointIDArr=[];
	sendflag=1;
	
	for( i=0;i<4;i++){
	getPos(recvArray[i]);
     }
	clearInterval(timer_id);
	timer_id=setInterval("getstrings()",500);
	init(point1.x+5,point1.y+35,pointXArr,pointYArr);
}


function onlyNumbers(evt)
{	
	var e = event || evt; // for trans-browser compatibility
	var charCode = e.which || e.keyCode;	
	if(((charCode == 190) ||(charCode == 110))||(charCode >= 96 && charCode <= 105))
	{
	
		return true;
	}
	

	 if ((charCode > 31) && (charCode < 48 || charCode > 57))
	{
		
		return false;
	
	}
	
}

function drawdash(id)
{

 pointXArr=[];
 pointYArr=[];
 pointIDArr=[];
//document.getElementById("arrdisp").innerHTML=signalstrength;
	//sendflag=1;
	if(sendflag==1)
	{
		for(var a=0;a<4;a++)
		{
			getPos(recvArray[a]);
		}
		clearInterval(timer_id);
		timer_id=setInterval("getstrings()",500);
		init(point1.x+5,point1.y+35,pointXArr,pointYArr);
		}
	
	}