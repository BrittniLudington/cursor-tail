export default function createSquare()
{
    let square = {};
    square.x = 0;
    square.y = 0;
    square.size = 50;
    square.color = "#ffffff";
    square.draw = function(context)
    {
        context.fillStyle = square.color;
        context.fillRect(square.x,square.y,square.size,square.size);
    }

    square.update = function(x,y)
    {
        square.x = x;
        square.y = y;
    }

    return square;
}