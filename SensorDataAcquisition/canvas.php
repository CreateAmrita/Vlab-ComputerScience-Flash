<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";
</script>

<canvas id="bgCanvas"></canvas>
<canvas id="boardwireCanvas"></canvas>
<canvas id="boardwireCanvas2"></canvas>
<canvas id="boardCanvas"></canvas>
<div id="dragWrap"><div id="batteryDiv"  onmouseup="batteryMouseUp()"><img id="batteryImg" draggable="true" src="<?php getSimPath();?>images/battery.png"/></div>
<div id="redconnectedDiv" style="position:absolute; visibility:hidden; background-repeat:no-repeat; overflow:hidden;"></div>
<div id="silverconnectedDiv" style="position:absolute;visibility:hidden; background-repeat:no-repeat; overflow:hidden;"></div></div>

<canvas id="plantCanvas"></canvas>
<canvas id="plantBoard"></canvas>
<canvas id="plantBoard2"></canvas>
<canvas id="topCanvas"></canvas>


<div id="blinkarrow"  style="visibility:hidden"><img src="<?php getSimPath();?>images/arrowanimation.gif" draggable="false"/></div>

<div id="waterGif" style="visibility:hidden"><img src="<?php getSimPath();?>images/water.gif" draggable="false"/></div>

<div id="zoombgDiv" style="visibility:hidden"><img src="<?php getSimPath();?>images/zoombg.png" draggable="false"/></div>

<div id="zoomwhiteDiv" style="position:absolute; background-repeat:no-repeat;visibility:hidden;"></div>

<div id="zoomredDiv"  style="position:absolute; background-repeat:no-repeat;visibility:hidden;"></div>

<div id="zoomgroundDiv" style="position:absolute;background-repeat:no-repeat;visibility:hidden;"></div>

<div id="whiteDiv" style="visibility:hidden" onmouseover="whiteGlow()" onmouseout="nowhiteGlow()" onclick="whiteclicked()"><img src="<?php getSimPath();?>images/whitestart.png" draggable="false"/></div>

<div id="whiteGlow" style="visibility:hidden" onmouseover="whiteGlow()" onmouseout="nowhiteGlow()" onclick="whiteclicked()"><img src="<?php getSimPath();?>images/whiteglow.png" draggable="false"/></div>

<div id="redDiv" style="visibility:hidden" onmouseover="redGlow()" onmouseout="noredGlow()" onclick="redclicked()"><img src="<?php getSimPath();?>images/redstart.png" draggable="false"/></div>

<div id="redGlow" style="visibility:hidden" onmouseover="redGlow()" onmouseout="noredGlow()"  onclick="redclicked()"><img src="<?php getSimPath();?>images/redglow.png" draggable="false"/></div>

<div id="groundDiv" style="visibility:hidden" onmouseover="groundGlow()" onmouseout="nogroundGlow()" onclick="groundclicked()"><img src="<?php getSimPath();?>images/groundstart.png" draggable="false"/></div>

<div id="groundGlow" style="visibility:hidden" onmouseover="groundGlow()" onmouseout="nogroundGlow()" onclick="groundclicked()"><img src="<?php getSimPath();?>images/groundglow.png" draggable="false"/></div>

<div id="blackDiv" style="visibility:hidden"><img src="<?php getSimPath();?>images/blackwire.png" draggable="false"/></div>

<canvas id="wireCanvas"/></canvas>

<div id="zoomDiv" style="visibility:hidden"><img src="<?php getSimPath();?>images/zoomboard.png" border="0" usemap="#zoomImgMap" id="zoomImg" draggable="false"/>
  <map name="zoomImgMap" id="zoomImgMap" >
  <area href="#" id="lscrew1" class="screw" shape="circle" coords="375,12,9"/>
  <area href="#" id="lscrew2" class="screw" shape="circle" coords="375,35,9"/>
  <area href="#" id="lscrew3" class="screw" shape="circle" coords="375,59,9"/>
  <area href="#" id="lscrew4" class="screw" shape="circle" coords="375,134,9"/>
  <area href="#" id="lscrew5" class="screw" shape="circle" coords="375,110,9"/>
  <area href="#" id="lscrew6" class="screw" shape="circle" coords="375,86,9"/>
  <area href="#" id="lscrew7" class="screw" shape="circle" coords="375,285,9"/>
  <area href="#" id="lscrew8" class="screw" shape="circle" coords="375,261,9"/>
  <area href="#" id="lscrew9" class="screw" shape="circle" coords="375,235,9"/>
  <area href="#" id="lscrew10" class="screw" shape="circle" coords="375,208,9"/>
  <area href="#" id="lscrew11" class="screw" shape="circle" coords="375,185,9"/>
  <area href="#" id="lscrew12" class="screw" shape="circle" coords="375,162,9"/>
  <area href="#" id="lscrew13" class="screw" shape="circle" coords="375,362,9"/>
  <area href="#" id="lscrew14" class="screw" shape="circle" coords="375,338,9"/>
  <area href="#" id="lscrew15" class="screw" shape="circle" coords="375,315,9"/>
  <area href="#" id="rscrew1" class="screw" shape="circle" coords="57,316,9"/>
  <area href="#" id="rscrew2" class="screw" shape="circle" coords="57,339,9"/>
  <area href="#" id="rscrew3" class="screw" shape="circle" coords="57,363,9"/>
  <area href="#" id="rscrew4" class="screw" shape="circle" coords="57,162,9"/>
  <area href="#" id="rscrew5" class="screw" shape="circle" coords="57,185,9"/>
  <area href="#" id="rscrew6" class="screw" shape="circle" coords="57,209,9"/>
  <area href="#" id="rscrew7" class="screw" shape="circle" coords="57,285,9"/>
  <area href="#" id="rscrew8" class="screw" shape="circle" coords="57,260,9"/>
  <area href="#" id="rscrew9" class="screw" shape="circle" coords="57,236,9"/>
  <area href="#" id="rscrew10" class="screw" shape="circle" coords="57,87,9"/>
  <area href="#" id="rscrew11" class="screw" shape="circle" coords="57,110,9"/>
  <area href="#" id= "rscrew12" class="screw" shape="circle" coords="57,133,9"/>
  <area href="#" id="rscrew13" class="screw" shape="circle" coords="57,59,9"/>
  <area href="#" id="rscrew14" class="screw" shape="circle" coords="57,36,9"/>
  <area href="#" id="rscrew15" class="screw" shape="circle" coords="57,12,9"/>
  </map>
</div>

<div id="closeBtn" onclick="zoomOut()" style="visibility:hidden"><img src="<?php getSimPath();?>images/close.png" draggable="false"/></div>
<div id="divzoomoutred" style=" visibility:hidden;border:1px solid;"></div>

<!--<div id="dialog" title="Message" style="visibility:hidden">
	<p>Wrong connection!!</p>
</div>-->

<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>

