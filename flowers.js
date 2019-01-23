var xoff = 0.0;
var angle = 0;
function setup()
{
	background(0);
	createCanvas(500,500);
	var angle;
}
function draw() {
  xoff = xoff + 0.01;
	angle += 1;
  var n = noise(xoff) * height;
	translate(width/2,height/2);
	rotate(radians(angle));
	stroke(30, 30, angle * .1);
	fill((angle * .1) + 139,69,19);
  ellipse(0,0,40,n);
	

}