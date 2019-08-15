
let canvas;
let context;
let width = 500;
let height = 500;
function setUp()
{
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    canvas.onmousemove = function(event){getPosition(event);}
    requestAnimationFrame(draw);
}

function draw()
{
    context.clearRect(0,0,width,height);
    context.fillStyle="#000000";
    context.fillRect(0,0,width,height);
    requestAnimationFrame(draw);
}

function getPosition(e)
{
    e.preventDefault();
    let x = e.clientX;
    let y = e.clientY;
    console.log(x + ", " + y);
}

setUp();