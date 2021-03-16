<ul>
	<li>
		<h1>Variables<span></span></h1>
    	<div class="varBox">   
   			<br/><br/>
            <p class="varTitle">Choose Sensor:</p> <br/>
        	<select style="width:160px; margin-left:14px;" class="dropBox" name="sensorCombo" id="sensorCombo" onChange="sensorCombo(this, 'sensor')" disabled="disabled"/>
         	<option>Dielectric Moisture Sensor</option></select>
        	<br/><br/>
        	<p class="varTitle">Power on:</p>
        	<div id="screweee"></div>
   	    	<br/>
       		<p align="center"><input type="button" style="width:160px; height:30px; font-weight:bold;" class="subButton" id="start" name="start" value="Start" disabled="disabled" onclick="startExp()"/></p>
		
        	<br/>
  			<p class="varTitle">Moisture content level: <span id="moisture">2</span></p><br/>
			<p><input  type="range" class="moistureSlider" min="2" max="16" id="moistureSlider" name="moistureSlider" value="2" disabled="disabled"  onmouseup="moistureSliderFn()" step="1" /></p>
      	    <p class="varTitle" id="instrct">Instruction</p><br/>
            <div id="maininstdiv" style="position:relative; height:100px;">
            <div id="instrct1" class="instructions" style="position:absolute;left:0px; top:0px;">   1. Drag the mote to the Acquisition board.<br/><br/>
            2. Click on the Acquisition board to connect the wires.</div>
                <div id="instrct2" class="instructions" style="position:absolute; visibility:hidden;left:0px; top:0px;">   1. Connect the Analog out (Red wire) to A0-A7 channel in the acquisition board.<br/><br/>
            2. Connect the Excitation wire (white) to the VCC in the acquisition board.<br/><br/>
            3. Connect the Ground wire (Silver) to the GND in the acquisition board.</div>
             <div id="instrct3" class="instructions" style="position:absolute; visibility:hidden; left:0px; top:0px;"> Click on the start button to start/stop the experiment.
            </div></div></div><br/><br/><br/><br/>
	</li>
	<li>
		<h1>Measurements<span></span></h1>
        <div class="varBox">
        	<br/><br/>
        	<p style=" height:30px; padding-left:20px;" class="varTitle">Sampling rate: <span id="samplngspan">2000</span></p>
        </div>
	</li>
</ul>
<script type="text/javascript">
  var inputs = document.getElementsByTagName('input');
  for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type == 'range') {
		inputs[i].addEventListener('click', function() {
        this.focus(); 
      });
    }
  }
</script>