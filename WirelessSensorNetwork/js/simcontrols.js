var sr="0"+0+":"+"0"+0;

function onload1()
{
	document.getElementById("transDiv1").innerHTML="Max time&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;"+5+" min";
	document.getElementById("receDiv1").innerHTML="Time Expired&nbsp;:&nbsp;"+sr;
	document.getElementById("tooltiptxt1").style.visibility="hidden";
	document.getElementById("tooltiptxt1").innerHTML=stringmsg;
	
	document.getElementById("iconDiv1").style.visibility="visible";
	document.getElementById("iconDiv2").style.visibility="hidden";
	document.getElementById("iconDiv3").style.visibility="hidden";
	document.getElementById("iconDiv4").style.visibility="hidden";
	document.getElementById("iconDiv5").style.visibility="hidden";
	document.getElementById("iconlabel").style.visibility="visible";
}

var startFlag=false;
var stateCombo=document.getElementById("stateSelect");
function powerOnOff()
{
	var objDiv=document.getElementById("signal_level");
	var objDiv2=document.getElementById("signal_level_value");
	if(startFlag==false)
		{
			startFlag = true;
			stateCombo.disabled=true;
			document.getElementById("start").value="Off";
			objDiv.style.backgroundImage = 'url('+simPath+'css/img/signal.png)';
			objDiv2.innerHTML="Signal level: 100%";
			document.getElementById("power_level_value").innerHTML="Power level: "+100+"%";
			document.getElementById('battery').style.width = '170px';
			count=1;
			scaleFactor=170;
			
			document.getElementById("tooltip1").style.visibility="visible";
			document.getElementById("tooltiptxt1").style.visibility="visible";
			document.getElementById('battery').style.backgroundColor="#0F0";
			if(stateFlag==0)
			{
				document.getElementById("iconDiv1").style.visibility="visible";
				document.getElementById("iconlabel").innerHTML="State: Sleep Mode";
				document.getElementById("iconDiv2").style.visibility="hidden";
				document.getElementById("iconDiv3").style.visibility="hidden";
				document.getElementById("iconDiv4").style.visibility="hidden";
				document.getElementById("iconDiv5").style.visibility="hidden";
				stringmsg="Mote or any of its components are not active. For a duration of 5 minutes, the power consumption by the mote during this state is 1%.";
			}
			/*else if(stateFlag==1)
			{
				document.getElementById("iconDiv1").style.visibility="hidden";
				document.getElementById("iconDiv2").style.visibility="visible";
				document.getElementById("iconlabel").innerHTML="State: Idle Mode";
				document.getElementById("iconDiv3").style.visibility="hidden";
				document.getElementById("iconDiv4").style.visibility="hidden";
				document.getElementById("iconDiv5").style.visibility="hidden";
				stringmsg="Mote is on. The idle mote senses the incoming packet, moves from idle to active state";
			}*/
			else if(stateFlag==2)
			{
				document.getElementById("iconDiv1").style.visibility="hidden";
				document.getElementById("iconDiv2").style.visibility="hidden";
				document.getElementById("iconDiv3").style.visibility="visible";
				document.getElementById("iconlabel").innerHTML="State: Data Acquisition";
				document.getElementById("iconDiv4").style.visibility="hidden";
				document.getElementById("iconDiv5").style.visibility="hidden";
				stringmsg="Mote acquires data from the sensor. It acquires data based on the Sampling rate. For a duration of 5 minutes, the power consumption by the mote during this state is 10%.";
			}
			else if(stateFlag==3)
			{
				document.getElementById("iconDiv1").style.visibility="hidden";
				document.getElementById("iconDiv2").style.visibility="hidden";
				document.getElementById("iconDiv3").style.visibility="hidden";
				document.getElementById("iconDiv4").style.visibility="visible";
				document.getElementById("iconlabel").innerHTML="State: Data Processing";
				document.getElementById("iconDiv5").style.visibility="hidden";
				stringmsg="After acquiring data say for 200 readings, mote may do some processing on the acquired readings. For a duration of 5 minutes, the power consumption by the mote during this state is 15%.";
			}
			else if(stateFlag==4)
			{
				document.getElementById("iconDiv1").style.visibility="hidden";
				document.getElementById("iconDiv2").style.visibility="hidden";
				document.getElementById("iconDiv3").style.visibility="hidden";
				document.getElementById("iconDiv4").style.visibility="hidden";
				document.getElementById("iconDiv5").style.visibility="visible";
				document.getElementById("iconlabel").innerHTML="State: Data Transmission";
				stringmsg="Mote transmits the readings or the processed data and this state consumes more power compared to any other state since we turn on the mote radio for transmission . For a duration of 5 minutes, the power consumption by the mote during this state is 18%.";
			}
			showtooltip();
			document.getElementById('battery').style.visibility="visible";
			startstreaming();
		}
		else
		{
	/*		document.getElementById("iconDiv1").style.visibility="visible";
			document.getElementById("iconDiv2").style.visibility="hidden";
			document.getElementById("iconDiv3").style.visibility="hidden";
			document.getElementById("iconDiv4").style.visibility="hidden";
			document.getElementById("iconDiv5").style.visibility="hidden";
			document.getElementById("iconlabel").style.visibility="hidden";*/
			document.getElementById("tooltip1").style.visibility="hidden";
			document.getElementById("tooltiptxt1").style.visibility="hidden";
			startFlag = false;
			stateCombo.disabled=false;
			document.getElementById("start").value="On";
			objDiv.style.backgroundImage = 'url('+simPath+'css/img/signal0.png)';
			objDiv2.innerHTML="Signal level: 0%";
			clearInterval(IntervalId);
			stopCounter();
		}
}
///////////////
var setT, startMS;
var countTime=0;
function timeCount()
{
	var date=new Date(),ms=date-startMS, ss,mm=0,hr=0;
	if(ms>999)
	{
		ss=parseInt(ms/1000,10);
	}
	else
	{
		ss=0
	}
	if(ss>59)
	{
		mm=parseInt(ss/60,10);
		ss=ss%60;
	}
	if(mm>59)
	{
		hr=parseInt(mm/60,10);
		mm=mm%60;
	}
	ss<10?ss='0'+ss:null;
	mm<10?mm='0'+mm:mm;
	hr<10?hr='0'+hr:hr;
	if(String(ms).length==1)
	{
		ms="00"+ms;
	}
	else if(String(ms).length==2)
	{
		ms="0"+ms;
	}
	if(String(ms).length>3)
	{
		ms=ms%1000;
		if(String(ms).length==1)
		{
			ms="00"+ms;
		}
		else if(String(ms).length==2)
		{
			ms="0"+ms;
		}
	}
	document.getElementById("receDiv1").innerHTML="Time Expired&nbsp;:&nbsp;"+mm+':'+ss;
	if(mm<5)
	{
	setT=setTimeout(function(){timeCount()},250);	
	}
	else if(mm>=5)
	{
		if(stateFlag==4)
		{
		document.getElementById('battery').style.visibility="hidden";
		}
			startFlag = false;
			stateCombo.disabled=false;
			document.getElementById("start").value="On";
			clearInterval(IntervalId);
			stopCounter();
			document.getElementById("tooltip1").style.visibility="hidden";
			document.getElementById("tooltiptxt1").style.visibility="hidden";
			/*document.getElementById("iconDiv1").style.visibility="hidden";
			document.getElementById("iconDiv2").style.visibility="hidden";
			document.getElementById("iconDiv3").style.visibility="hidden";
			document.getElementById("iconDiv4").style.visibility="hidden";
			document.getElementById("iconDiv5").style.visibility="hidden";
			document.getElementById("iconlabel").style.visibility="hidden";*/
	}
	
}
function stopCounter()
{
	clearTimeout(setT);
}
///////////////
var powerConsp=1;
var IntervalId=0;
var exptime;
var count=1;
var scaleFactor=170;
var stringmsg="Mote is not active, no mote component is active; only clock oscillates";
function startstreaming()
{
	
	IntervalId=setInterval("restartsignal()", 1000);
	startMS=new Date();
	timeCount();
	//transDiv1receDiv1exptime
}
function restartsignal()
{
	exptime=300-count;
	scaleFactor =scaleFactor-((powerConsp*.1569)/5);
	if(scaleFactor<=30)
	{
		document.getElementById('battery').style.backgroundColor="#F00";
	}else{
		document.getElementById('battery').style.backgroundColor="#0F0";
	}
	if(scaleFactor<1)
	{
		document.getElementById('battery').style.width = '0px';	
		clearInterval(IntervalId);
		powerOnOff();
	}else{
		document.getElementById('battery').style.width = scaleFactor+'px';	
	}
	document.getElementById("power_level_value").innerHTML="Power level: "+(parseInt((scaleFactor/170)*100))+"%";
	count++;
}
var stateFlag=0;
function setMode(val)
{
	document.getElementById('battery').style.width = 170+'px';
	document.getElementById("power_level_value").innerHTML="Power level: 100%";
	document.getElementById('battery').style.backgroundColor="#0F0";
	clearInterval(IntervalId);
	clearTimeout(setT);
	document.getElementById("receDiv1").innerHTML="Time Expired&nbsp;:&nbsp;"+sr;
	
	if(stateCombo.selectedIndex==0)
	{
			stateFlag=0
			powerConsp=1;
			document.getElementById("iconlabel").innerHTML="State: Sleep Mode";
			document.getElementById("iconDiv1").style.visibility="visible";
			document.getElementById("iconDiv2").style.visibility="hidden";
			document.getElementById("iconDiv3").style.visibility="hidden";
			document.getElementById("iconDiv4").style.visibility="hidden";
			document.getElementById("iconDiv5").style.visibility="hidden";
	}
	/*else if(stateCombo.selectedIndex==1)
	{
			stateFlag=1;
			powerConsp=5;
			document.getElementById("iconlabel").innerHTML="State: Idle Mode";
			document.getElementById("iconDiv1").style.visibility="hidden";
			document.getElementById("iconDiv2").style.visibility="visible";
			document.getElementById("iconDiv3").style.visibility="hidden";
			document.getElementById("iconDiv4").style.visibility="hidden";
			document.getElementById("iconDiv5").style.visibility="hidden";
	}*/
	else if(stateCombo.selectedIndex==1)
	{
			stateFlag=2;
			powerConsp=10;
			document.getElementById("iconlabel").innerHTML="State: Data Acquisition";
			document.getElementById("iconDiv1").style.visibility="hidden";
			document.getElementById("iconDiv2").style.visibility="hidden";
			document.getElementById("iconDiv3").style.visibility="visible";
			document.getElementById("iconDiv4").style.visibility="hidden";
			document.getElementById("iconDiv5").style.visibility="hidden";
	}
	else if(stateCombo.selectedIndex==2)
	{
			stateFlag=3;
			powerConsp=15;
			document.getElementById("iconlabel").innerHTML="State: Data Processing";
			document.getElementById("iconDiv1").style.visibility="hidden";
			document.getElementById("iconDiv2").style.visibility="hidden";
			document.getElementById("iconDiv3").style.visibility="hidden";
			document.getElementById("iconDiv4").style.visibility="visible";
			document.getElementById("iconDiv5").style.visibility="hidden";
	}
	else if(stateCombo.selectedIndex==3)
	{
			stateFlag=4;
			powerConsp=18;
			document.getElementById("iconlabel").innerHTML="State: Data Transmission";
			document.getElementById("iconDiv1").style.visibility="hidden";
			document.getElementById("iconDiv2").style.visibility="hidden";
			document.getElementById("iconDiv3").style.visibility="hidden";
			document.getElementById("iconDiv4").style.visibility="hidden";
			document.getElementById("iconDiv5").style.visibility="visible";
	}
	
}
function showtooltip()
{
	document.getElementById("tooltip1").style.visibility="visible";
	document.getElementById("tooltiptxt1").style.visibility="visible";
	document.getElementById("tooltiptxt1").innerHTML=stringmsg;
}
