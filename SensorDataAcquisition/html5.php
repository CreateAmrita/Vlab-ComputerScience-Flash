<?php
$comp_name="Amrita Remote Triggered Lab";
$simName="Sensor Data Acquisition";
?>

<div class="g594 canvasHolder"> 
    <div id="canvasBox">
<?php
include('canvas.php');
?>
</div>
</div>
<div class="g198 controlHolder">
<?php
include('controls.php');
?>
</div>
<script type="text/javascript">
 var expTitle="<?php echo $simName; ?>";
 document.getElementById("expName").innerHTML=expTitle;
</script>