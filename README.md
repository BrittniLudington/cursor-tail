# Cursor Tail

Have a trail of squares follow cursor around on canvas

## Purpose

To utilize a linked list in the scheme of animation.

## Implementation

- The tail is a linked list of square objects.
- Each square object contains information on its size and location


## tail.js

- tail.js holds the linked list and deals with rendering and updating

### methods

- setUp(): intial function to call. It sets up all the variables to upon starting
- draw(): function that will be called continuously. This function draws on the canvas
- getPosition(event): function that gets the position of the cursor. Is called when the cursor moves over the canvas.