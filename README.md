# Games of Moria

Welcome to the [Games of Moria](https://tmea-farkas.github.io/middle-earth/) memory card game.

# Introduction

**Games of Moria** is a memory card game based on the main characters of the fantasy trilogy called *The Lord of the Rings* written by J R R Tolkien and adapted to film by Peter Jackson.
This game was created by and for fans of the Tolkien-universe. Although it being genre speficic, it can be enjoyed by users not familiar to the works of Tolkien.

Navigating the game is simple:
Once on the home page the user can utilise the clickable buttons to either tell them more about the game ("*Gather the Knowledge*), choose to have a timer (*Additions*) or go straight to the game itself (*Adventure awaits*).
**To enter the game type in the word "*mellon*"** (elvish for friend).


# User Experience

## User stories
- As a first-time user I want
    - to understand the purpose the game
    - to be able to easily navigate through the game
    - to have all the neccessary information to be able to fuccessfully use the game
    - to have instant feedback on my progress within the game
    - to be able to go back to the main page without having to reverse my actions
- As a returning user I want
    - to easily access the game without having to go through information that I already know

Considering the above user stories I approached the building of the game as follows:

The objective here was to create a game site that is easy to navigate, accessible from all devices and has the neccessary tools provided to be engaging and entertaining for the user.

As a first step I wrote down what the site should entail and what the theme should be.
Decided to use Middle Earth as the theme since it has a massive fan-base, which would help with the popularity and relevance of the game; in addition: new users that aren't fans yet could then become one as the game would prompt users to have a further look into it therefore grow the games' popularity even further.

When deciding on the layout of the game, my aim was on simplicity and navigation. Having the three buttons at the very start meant that the user (depending if first-time or returning) can decide where to begin. Providing that option means ease of access for returning users increasing the chances for future use.

Navigating the game is simple and logical. By simply clicking on the relevant content can take the user to specific parts of the game.

Finally, when it comes to the design of the game, the aim was to help visibility and accessibility for users by creating a good contrast between foreground and background and ensuring that content sizing is appropriate for all device sizes.

In the following sections there is further elaboration on what design elements were used and the reason behind them.

# Design

## Colours
When deciding on the colour theme I used ColorSpace to help creating a visually pleasing palette.
The colours are
- Palasite Blue: Hex #334A51 - used as background color throughout 
- Mellow Gold: Hex #FFD1AE - used for the heading
- Alpine Expedition: Hex #94E7FF - used for 'h2' font colour
- Mountain Stream: Hex #96AFB8 - used for 'p' font colour and gameplay background

All colours above mentioned have passed through testing for combination compliance with Contrast Grid (see testing section).

## Typography
Deciding on the font for the game was easy. I chose to stay true to the theme and import a custom font family that has been implemented throughout the game. This font was used in the movies and is generally associated with the World of Tolkien.
**Font Family: "Aniron"** from 1001 Fonts.

## Images
The specific images used in the game are of the main characters of the story. The *moria* section background is the image of the Gates of Moria from the movie adaptations providing a sense of beginning of the "adventure" that follows playing the game.
All images have been sourced from Reddit (specifically looked for high-resolution images in this theme).

# Features

## Existing Features

### The landing page

### Game Entry 

### Gameplay

## Features left to implement 

When possible I am also planning on implementing an instant feedback feature connected to the end result of the game where users that opted for completing the game with the timer activated and managed to successfully complete the game within the time allotted, will get a "reward" message containing a fun-fact relating to the movie adaptations.


# Technologies Used
- Languages:
    - HTML: to create structure
    - CSS: to style
    - JavaScript: to manipulate content
- VSCode - to build the project
- GitHub - to save and store files
- 1001 Fonts - create custom font
- Font Awesome - to import icons
- Favicon.io - to create favicon
- TinyJPG - to compress images
- ColorSpace - to find a matching color palette


# Deployment
To deploy the project I used GitHub as my hosting platform and took the steps as follow:

- go to **Settings**
- in the **Code and Automation** section select **Pages**
- select source to **deploy from branch**
- select **Main Branch**
- under branch click **Save**

# Testing
- HMTL & CSS
- JavaScript

# Bugs

During development there were several bugs that needed adressing:
1. getting the #moria section background image to position focusing on the middle of the image on all size devices. 
    - solved the issue by adjusting the background-position from 75% to 50%.
2. figuring out the cards to display in a 4x4 grid
    - the issue was solved by changing the class attribute the styles were applied to from ==.game-container== to ==.game-grid==

# Credits
All content has been curated by me, Timea Farkas.
Help during development accrued from:
- Matthew Bodden, mentor
- Slack colleagues
- W3Schools providing explanations
- ChatGPT providing detailed explanations to some elements and attributes
- Youtube to gain insight into making similar games

Thank you for your time reading this. Hope you enjoy playing this game as much as I enjoyed creating it for you!