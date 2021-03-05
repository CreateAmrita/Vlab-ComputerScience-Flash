// JavaScript Document
var xpos=0;
var ypos=0
var x2pos=800;
var y2pos=600;
var dash_interval;
var currentOffset = 0;
var dashes = '20 30';
var c 
var ctx 
var drawDashes 
var clearDashes;
/////////////
if (window.CanvasRenderingContext2D && CanvasRenderingContext2D.prototype.lineTo) {
    CanvasRenderingContext2D.prototype.dashedLine = function(x, y, x2, y2, dashArray, start) {
        if (!dashArray) dashArray = [10, 5];
        var dashCount = dashArray.length;
        var dashSize = 0;
        for (i = 0; i < dashCount; i++) dashSize += parseInt(dashArray[i]);
        var dx = (x2 - x),
            dy = (y2 - y);
        var slopex = (dy < dx);
        var slope = (slopex) ? dy / dx : dx / dy;
        var dashOffSet = dashSize * (1 - (start / 100))
        if (slopex) {
            var xOffsetStep = Math.sqrt(dashOffSet * dashOffSet / (1 + slope * slope));
            x -= xOffsetStep;
            dx += xOffsetStep;
            y -= slope * xOffsetStep;
            dy += slope * xOffsetStep;
        } else {
            var yOffsetStep = Math.sqrt(dashOffSet * dashOffSet / (1 + slope * slope));
            y -= yOffsetStep;
            dy += yOffsetStep;
            x -= slope * yOffsetStep;
            dx += slope * yOffsetStep;
        }
        this.moveTo(x, y);
        var distRemaining = Math.sqrt(dx * dx + dy * dy);
        var dashIndex = 0,
            draw = true;
        while (distRemaining >= 0.1 && dashIndex < 10000) {
            var dashLength = dashArray[dashIndex++ % dashCount];
            if (dashLength > distRemaining) dashLength = distRemaining;
            if (slopex) {
                var xStep = Math.sqrt(dashLength * dashLength / (1 + slope * slope));
                x += xStep
                y += slope * xStep;
            } else {
                var yStep = Math.sqrt(dashLength * dashLength / (1 + slope * slope));
                y += yStep
                x += slope * yStep;
            }
            if (dashOffSet > 0) {
                dashOffSet -= dashLength;
                this.moveTo(x, y);
            } else {
                this[draw ? 'lineTo' : 'moveTo'](x, y);
            }
            distRemaining -= dashLength;
            draw = !draw;
        }
        // Ensure that the last segment is closed for proper stroking
        this.moveTo(0, 0);
    }
}


function init(x,y,x2,y2){
	//currentOffset = 10;

 clearInterval(dash_interval);
 xpos=x;
 ypos=y;
 //
  x2pos=x2;
  y2pos=y2
c = document.getElementById('canvasID');
ctx = c.getContext('2d');
//ctx.width = 800;
//ctx.height = 600;
ctx.canvas.width=550;
ctx.canvas.height=570;
ctx.beginPath();

ctx.strokeStyle = 'grey';
ctx.globalAlpha   = 0.5;
clearDashes= function() {
	clearInterval(dash_interval);
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

drawDashes = function(x,y,x2,y2) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    var dashGapArray = dashes.replace(/^\s+|\s+$/g, '').split(/\s+/);
    if (!dashGapArray[0] || (dashGapArray.length == 1 && dashGapArray[0] == 0)) return;

    ctx.lineWidth = 4;
    ctx.lineCap = 'square';
		
 for(var j=0;j<x2.length;j++){
	ctx.beginPath();
	ctx.dashedLine(x,y, x2[j], y2[j], dashGapArray, currentOffset);
	ctx.closePath();
	ctx.stroke();
 } 
};
dashInterval();
dash_interval=setInterval(dashInterval, 10);
}

function setPosition(x2,y2){
	x2pos=x2;
	y2pos=y2
}


function dashInterval() {
    drawDashes(xpos,ypos,x2pos,y2pos);
    currentOffset += 1;
    if (currentOffset >= 100) currentOffset = 0;
}