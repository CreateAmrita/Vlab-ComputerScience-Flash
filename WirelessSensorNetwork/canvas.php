<!--Do not edit section-->
<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";
	</script>

<!--[if lt IE 9]><script language="javascript" type="text/javascript" src="<?php getSimPath(); ?>js/excanvas.js"></script><![endif]-->

<!--<script language="javascript" type="text/javascript" src="<?php getSimPath(); ?>js/jquery.min.js"></script>-->
<!--//Do not edit section ends here-->
<!--//Note: Use <?php //getSimPath(); ?> as the parent directory to access directories in simulator root path-->

<!--Your html code for canvas here-->

<div id="tooltip1" style="visibility:hidden;"><img src="<?php getSimPath(); ?>css/img/TOOTLTIP_1.png" width=352px height=105px/>
<div id="tooltiptxt1">sdzsdfsd</div></div>
<!--<div id="tooltip2"><img src="<?php getSimPath(); ?>css/img/TOOTLTIP_2.png" width=150px height=50px/><div id="tooltiptxt2">34645645</div></div>
-->
<div id="mainDiv" style="display:inline; position:absolute; top:5px;left:60px;width:425px; height:349px;"><img src="<?php getSimPath(); ?>css/img/R.png" width="425px" height="335px" draggable="false"/></div>
<div id="subDiv" style="background-color:#EFE8DE; display:inline; position:absolute; width:565px; height:125px; top: 350px; left: 4px;">
<span id="iconlabel" class="varTitle">State: Sleep Mode</span>
<div id="iconDiv1" style="display:inline; position:absolute; visibility:visible;"><img src="<?php getSimPath(); ?>css/img/sleep_1.png" draggable="false"/></div>
<div id="iconDiv2" style="display:inline; position:absolute; visibility:hidden;"><img src="<?php getSimPath(); ?>css/img/Idle_1.png"  draggable="false" /></div>
<div id="iconDiv3" style="display:inline; position:absolute; visibility:hidden;"><img src="<?php getSimPath(); ?>css/img/data_aquisition.png" draggable="false"/></div>
<div id="iconDiv4" style="display:inline; position:absolute; visibility:hidden;"><img src="<?php getSimPath(); ?>css/img/Data_processing.png"  draggable="false"/></div>
<div id="iconDiv5" style="display:inline; position:absolute; visibility:hidden;"><img src="<?php getSimPath(); ?>css/img/Data_transmission.png"  draggable="false"/></div>

<div id="batteryDiv" style="width:230px; height:75px; position:absolute; left: 175px; top: 27px;"><br /><img src="<?php getSimPath(); ?>css/img/battery.png" width="200px" height="55px" draggable="false" style="position:absolute; top: 25px; left: 12px;"/>
<span id="power_level_value" style="position:absolute; left:25px;top:-10px" class="varTitle">Power level: 100%<br /></span>
  <div  id="battery" style="width:170px; height:45px; left:21px; position:absolute; top: 29px; background-color:#0F0; opacity:0.4;"></div>
</div>
<div id="rangeDiv" style="position:absolute; width:263px; height:125px; left: 410px; top: 20px;";><span id="signal_level_value" style="position:absolute; left:25px;top:-5px" class="varTitle">Signal level: 0%</span><div id="signal_level" style="position:absolute; top: 25px; left: 12px; width:133px; height:69px; background-image:url(<?php getSimPath(); ?>css/img/signal0.png);"></div></div>
</div>