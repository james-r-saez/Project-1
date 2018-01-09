# Project 1: Simon!

## Introduction

This is a replication of the classic [Simon game](https://en.wikipedia.org/wiki/Simon_%28game%29) from the 80s-90s using HTML, CSS, and JavaScript. jQuery was also used for quicker DOM manipulation.

![SImon Game](https://www.planet-source-code.com/Upload_PSC/ScreenShots/PIC2006641027542141.gif)

----------
## Rules
In this game, the player is presented with a random lit up color to press. Upon pressing this correct button, the game flashes this color and then another random color and the player must now enter both colors in the correct sequential order. From here, another random color is tacked onto the list and the game goes on and on until the player loses. It usually becomes difficult for people when reaching the double digits as there is a lot of memorization that is required.

----------
## Features
This implementation of Simon has the core functionality of the original game. A start button is provided in order to start the game. In this specific implementation, "strict" mode is always on: the player will have to start from the beginning.
----------
## Pain Points
![Pain Points](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4X74rtuhnFsCgOy2x_s8ze0I3F-VPh_VFTyJwjBt5asq65i7Z)

The biggest pain points was getting the colors to flash in the right order. In the DOM, the elements are pushed sequentially into an array, but looping through this array in jQuery messed up this sequential order. There are also some bugs with the win condition logic being too lenient at times.

----------
