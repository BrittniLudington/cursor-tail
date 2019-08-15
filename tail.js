import createSquare from "./square.js";


let canvas;
let context;
let width = 500;
let height = 500;
let tail;
function setUp()
{
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    canvas.onmousemove = function(event){getPosition(event);}
    tail = [];
    tail.push(createSquare());
    requestAnimationFrame(draw);
}

function draw()
{
    context.clearRect(0,0,width,height);
    context.fillStyle="#000000";
    context.fillRect(0,0,width,height);
    
    for(let i = 0; i < tail.length; i++)
    {
        tail[i].draw(context);
    }

    requestAnimationFrame(draw);
}

function getPosition(e)
{
    e.preventDefault();
    tail[0].update(e.clientX,e.clientY);
}

setUp();