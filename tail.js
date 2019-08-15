import createSquare from "./square.js";


let canvas;
let context;
let width = 500;
let height = 500;
let tail;
let run = false;
function setUp()
{
    document.getElementById("inputForm").onsubmit = function(event){renderCanvas(event)};
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    canvas.onmousemove = function(event){getPosition(event);}
    tail = [];

    requestAnimationFrame(draw);

}

function renderCanvas(e)
{
    e.preventDefault();
    run = false;
    let num = document.getElementById("numberInput").value;
    if(num < 0)
        {
            return;
        }
    tail = [];
    for(let i = 0; i < num; i++) // create four squares
    {
        tail.push(createSquare());
    }
    context.clearRect(0,0,width,height);

    run = true;

}

function draw()
{
    context.clearRect(0,0,width,height);
    context.fillStyle="#000000";
    context.fillRect(0,0,width,height);
    if(run)
    {
        for(let i = 0; i < tail.length; i++)
        {
            if(i > 0)
                tail[i].updatePart(tail[i-1]);
            tail[i].draw(context);
        }
    }

    requestAnimationFrame(draw);
}

function getPosition(e)
{
    e.preventDefault();
    if(tail.length > 0)
        tail[0].update(e.clientX,e.clientY);
}

setUp();