 
     <!--Your html code for controls here(Follow UL-LI format)-->
     <body onLoad="onload1()">
    
     <ul>
<li><h1>Variables<span></span></h1>
<div class="varBox"> <ol id="instructions" class="varTitle" style="font-weight:100;">
  <li>1. Change the position of each receiver within the range of 5-45 meters by dragging and placing
the receiver.</li>
  <li>2. Then choose the power on.</li>
  <li>3. Then select the transmission power.</li>
  <li>4. Enter any string and click on send. </li>
  <li>5. Then place the cursor on each receiver and analyze the signal strength at each receiver. </li></br>
</ol>    
 <p class="varTitle">Choose power:</p>

<p><input type="button"  style="width:160px; height:28px; font-weight:bold; "class="subButton" name="start" value="Off"  id="start" onClick="OnOff();">
</p>
    <p>&nbsp;</p>    
      <p class="varTitle">Transmission power :<span id="midval"> -7</span>
      <input class="rangeSlider" type="range" min="2" max="16" id="powerslider" step="2" name="powerslider" value="2" style="width:142px;"  onchange="showValue(this.value)"/>
<div class="rangeVals">
<span class="minrange">&nbsp;&nbsp;-25</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="maxrange">0</span>

</div>
</p> 
</br>       
<!-- <div id="arrdisp">hhj</div>-->
 <p class="varTitle"> Enter the string:</p>
    <p><input type="text"  style="width:160px;" id="input_rpt1" name="input_rpt1" class="tcal"  onKeyPress="enablesend()" />
    </p></br> 
<p><input type="button"  style="width:160px; margin-top:8px; height:26px;"class="subButton" name="export" value="Send"  id="export" onClick="sendFn();"></p>
     <!--<p class="varTitle" style="visibility:hidden;"> Select the receiver:</p><br>-->
     <p><select style="width:160px;display:none;" id="receivercombo">
  <option value="recall">All Receivers</option>
  <option value="recone">Receiver 1 (R1)</option>
  <option value="rectwo">Receiver 2 (R2)</option>
  <option value="recthree">Receiver 3 (R3)</option>
  <option value="recfour">Receiver 4 (R4)</option>
</select> </p>
    <div >    	
    </div>
	<!--<p>
    
    <div >
    	<p class="varTitle"><input type="checkbox" id="cross_section" name="chksection" onChange="showCrossSection(this.checked)">Show Video</p><br>
    </div>-->
</div></p></br>
<li><h1>Measurements</h1>
</li>
<div class="varBox">     
 <div  class="varTitle" id="transDiv1"  >
 <div id="trans" style="margin-left:0px; margin-top:0px;">Transmitter</div><div id="rec" style="margin-left:100px; margin-top:-14px;">Receiver</div> 
 
<img id="faceA" draggable="false" name="faceA" style="width:60px;height:40px;" src="<?php getSimPath(); ?>css/img/T.png" /> <img id="faceB" draggable="false" name="faceB" style="width:60px;height:40px;margin-top:-130px;margin-left:36px;" src="<?php getSimPath(); ?>css/img/R.png"/>

</div>
<!-- <div  class="varTitle" id="receDiv1" style=" bottom:67px; margin-top:10px;">
 <img id="faceB" draggable="false" name="faceB" src="<?php getSimPath(); ?>css/img/R.png"/><div id="rec" style="margin-left:85px; margin-top:-30px;">Receiver</div>

    </div>  --></div>
</ul>

 <script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>

    </body>
