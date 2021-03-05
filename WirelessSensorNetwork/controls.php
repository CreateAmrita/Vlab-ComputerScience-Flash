 
     <!--Your html code for controls here(Follow UL-LI format)-->
     <body onLoad="onload1()">
    
     <ul>
<li><h1 class="headngclass">Variables<span></span></h1>
<div class="varBox">
    
    <p>&nbsp;</p>
    
    <p style="margin-top:30px;" class="varTitle" >Select State: </p><br/>
    <select style="width:160px;" class="dropBox" name="thelist3" id="stateSelect" onChange="setMode(this)">
      <option value="state1">Sleep</option>
      <!--<option value="state2">Idle</option>-->
      <option value="state3">Active Data Acquisition</option>
      <option value="state4">Active Data Processing</option>
      <option value="state5">Active Data Transmission</option>
    </select>
    <p></p><br/><br/><br/>
    <p class="varTitle">Start Simulation:</p><br>
 <div >
<p><input style="width:160px; height:28px; font-weight:bold;" type="button" class="subButton" name="start" value="On"  id="start" onClick="powerOnOff()">
</p> 
<br/><br/><br/><br/><br/><br/><br/><br/>
</div>
   
    
</div>
<br/><br/>
<li><h1 class="headngclass">Measurements</h1>

</li>

<div class="varBox">  <br>     
 <div  class="varTitle" id="transDiv1" style="bottom:132px; margin-top:30px; padding-left:25px;">Max time&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</div>
 <br/><br/>
 <div  class="varTitle" id="receDiv1" style=" bottom:67px; padding-left:25px;">
    </div> </div>
</ul>
 <script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>

    </body>
