export default function createSquare()
{
    let square = {};
    square.x = -1;
    square.y = -1;
    square.size = 50;
    square.color = "#ffffff";
    square.speed = 10;
    square.draw = function(context)
    {
        if(square.x < 0 && square.y < 0)
            return;
        context.fillStyle = square.color;
        context.fillRect(square.x,square.y,square.size,square.size);
    }

    square.update = function(x,y)
    {
        square.x = x;
        square.y = y;
    }

    square.updatePart = function(previous)
    {
        let needforspeedx = Math.abs((square.x - previous.x) / 3);
        let needforspeedy = Math.abs((square.y - previous.y) / 3);
        
        if(previous.x > square.x)
            square.x += needforspeedx;
        if(previous.x < square.x)
            square.x -= needforspeedx;
        if(previous.y > square.y)
            square.y += needforspeedy;
        if(previous.y < square.y)
            square.y -= needforspeedy;
    }

    return square;
}