<?php
//Your Simulator Name Here
$comp_name="Amrita Remote Triggered Lab";
$simName="Wireless Transmission";
?>

<div class="g594 canvasHolder"> 
    <div id="canvasBox">
<?php
//custom canvas file included here
include('canvas.php');
?>
</div>
</div>
<div class="g198 controlHolder">
<?php
//custom controls file included here
include('controls.php');
?>
</div>
<script type="text/javascript">
 var expTitle="<?php echo $simName; ?>";
 document.getElementById("expName").style.size="11px";
 document.getElementById("expName").innerHTML=expTitle;
</script>

