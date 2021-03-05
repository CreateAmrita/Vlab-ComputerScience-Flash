<!--Do not edit section-->
<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";
	</script>

<!--[if lt IE 9]><script language="javascript" type="text/javascript" src="<?php getSimPath(); ?>js/excanvas.js"></script><![endif]-->

<!--<script language="javascript" type="text/javascript" src="<?php getSimPath(); ?>js/jquery.min.js"></script>-->
<script language="javascript" type="text/javascript" src="<?php getSimPath(); ?>js/dashes.js"></script>
<!--//Do not edit section ends here-->
<!--//Note: Use <?php //getSimPath(); ?> as the parent directory to access directories in simulator root path-->

<!--Your html code for canvas here-->
<div id="contatiner" class="contatinerclass" style="width:565px;height:470px;" ><div><canvas  id="canvasID"   ></canvas></div>
<canvas id="maincanvas" style="position:absolute; visibility:hidden;" width="600" height="500"></canvas>
	<div class="varTitle" id="div1" style="left:-10px; bottom:55px; width:25px;visibility:hidden; position:absolute;">5m</div>
    <div class="varTitle" id="div2" style="left:-10px; width:25px; bottom:105px; visibility:hidden; position:absolute;">10m</div>
     <div class="varTitle" id="div3" style="left:-10px;bottom:160px; width:25px;visibility:hidden;  position:absolute;">15m</div>
     <div class="varTitle" id="div4" style="left:-10px;bottom:208px; width:25px; visibility:hidden; position:absolute;">20m</div>
     <div class="varTitle" id="div5" style="left:-10px;bottom:265px; width:25px; visibility:hidden; position:absolute;">25m</div>
     <div class="varTitle" id="div6" style="left:-10px;bottom:315px; width:25px; visibility:hidden; position:absolute;">30m</div>
     <div class="varTitle" id="div7" style="left:-10px;bottom:370px; width:25px; visibility:hidden; position:absolute;">35m</div>
     <div class="varTitle" id="div8" style="left:-10px;bottom:420px; width:25px;visibility:hidden;  position:absolute;">40m</div>
     <div class="varTitle" id="div9" style="left:-10px;bottom:465px; width:25px; visibility:hidden; position:absolute;">45m</div>

     <div class="contatinerclass3 tile" id="contatinerclass3">
	<div class="tileWindow" id="tileWindow2" draggable="true" style="z-index:11;">
						<div class="winTitleBar">
								<p>Video Live</p>
								<div class="winClose" id="closeWindow" onclick="maximFN('tileWindow2','winContentVideo',this);"></div>
						</div>
						<div class="winContent" id="winContentVideo">
								<!--<video id="videoLivePos" src="<?php getSimPath(); ?>sample.ogg" autoplay="autoplay"> Your browser doesn't appear to support the HTML5 <code>&lt;video&gt;</code> element. </video>-->
						</div>
				</div>
		</div>
         <div  id="transDiv" style="position:absolute;left:0px; bottom:0px;">
<img id="faceA" name="faceA" src="<?php getSimPath(); ?>css/img/T.png"  draggable="false"  /> 
 </div>
 <div  id="receDiv" class="dragDiv" style="position:absolute; z-index:10;">
 <img id="faceB" name="faceB" src="<?php getSimPath(); ?>css/img/R1.png" draggable="true" onMouseOver="showtooltip()" onMouseOut="removetooltip()"/> 

    </div>
    <div  id="receDiv2" class="dragDiv" style="position:absolute; z-index:10;">
 <img id="imgrec2" name="imgrec2" src="<?php getSimPath(); ?>css/img/R2.png"  draggable="true" onMouseOver="showtooltip2()" onMouseOut="removetooltip2()" /> 

    </div>
     <div  id="receDiv3" class="dragDiv" style="position:absolute; z-index:10;">
 <img id="imgrec3" name="imgrec3" src="<?php getSimPath(); ?>css/img/R3.png"  draggable="true" onMouseOver="showtooltip3()" onMouseOut="removetooltip3()"/> 

    </div>
      <div  id="receDiv4" class="dragDiv" style="position:absolute; z-index:10;">
 <img id="imgrec4" name="imgrec4" src="<?php getSimPath(); ?>css/img/R4.png"  draggable="true" onMouseOver="showtooltip4()" onMouseOut="removetooltip4()" /> 

    </div>
 
</div>
<script type="application/javascript">var videoid11=document.getElementById("tileWindow2").style.visibility="hidden";</script>