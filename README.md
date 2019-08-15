# Cursor Tail

Have a trail of squares follow cursor around on canvas

## Purpose

To utilize an array in the scheme of animation.

## To use

type in a number in the text box and click submit. Place mouse on the canvas

## Implementation

- The tail is an array of square objects.
- Each square object contains information on its size and location


## tail.js

- tail.js holds the array and deals with rendering and updating

### methods

- setUp(): intial function to call. It sets up all the variables to upon starting
- draw(): function that will be called continuously. This function draws on the canvas
- getPosition(event): function that gets the position of the cursor. Is called when the cursor moves over the canvas.
- renderCanvas(event): renders the array of squares given the length inputted.

## square.js

- square.js creates a basic square object to put in the array in tail.js

### methods

- createSquare(): creates and returns a square object with the following information:

- size (both width and height)
- x location
- y location
- color
- opacity
- draw(context)
- update(x,y) for the head square
- updatePart(previous) for the rest

## Rules

- The first square in the array must always be in the position of the cursor if the cursor is on the canvas.

- remaining squares should follow in the first square's footsteps
- try delaying update? Use setInterval?
- Implement a speed
- Speed needs to change depending on distance from previous part.
