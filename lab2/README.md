# CS-546 Lab 2

## Modules and Basic Node

This week, you will be creating your first package and first module!

You will write 2 files this week; one of which will be a module, one of which will use that module.

index.js: This file will require printShape.js and print 10 triangles, 10 squares, and 10 rhombi of sizes of your choosing.
printShape.js: This module will provide several ways of printing shapes, each of a certain number of sizes;

# printShape.js

This metric will print out a variety of shapes on your console

## triangle(lines)

Given a variable representing the number of lines, will draw a triangle.

Input of 1:

/\
Input of 2:

 /\
/--\
Input of 4:

   /\
  /  \
 /----\
Input of 4:

   /\
  /  \
 /    \
/------\

## square(lines)

Will print a square; must provide at least 2 lines.

For the horizontal edges, use a -

Examples:

Input of 2:

    |--|
    |--|
Input of 3:

    |---|
    |   |
    |---|

## rhombus(lines)

Has to have a minimum of 2 lines, and must provide an even number of lines!

Draws a rhombus on the screen.

Examples:

Input of 2:

    /-\
    \-/
Input of 4:

    /-\
   /   \
   \   /
    \-/

# Requirements

- You must not submit your node_modules folder
- You must remember to save your dependencies to your package.json folder
- You must do basic error checking in each function
Check for arguments existing and of proper type.
Throw if anything is out of bounds (ie, trying to perform an incalculable math operation or accessing data that does not exist)
If a function should return a promise, instead of throwing you should return a rejected promise.