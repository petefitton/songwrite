# Songwrite
Live Link: 




### Game Functionality


### Installation/Dependencies
<!-- (how to use app, run locally) -->

### Issues


### Reflections
<!-- (planning stage, various parts of writing code, testing, issues, technologies) -->

### Sources
Redux Documentation: https://redux.js.org/basics/example
Instrument images: https://starbounder.org/Music#Instruments
Random Song Titles: https://random-word-api.herokuapp.com/home
Styled Components: https://levelup.gitconnected.com/building-a-reusable-component-system-with-react-js-and-styled-components-4e9f1018a31c
Docker Toolbox: https://docs.docker.com/toolbox/toolbox_install_mac/
Redux Store Information: https://stackoverflow.com/questions/49104247/in-redux-where-does-the-state-actually-get-stored/49104335
Different File Organizations with React and Redux: https://www.pluralsight.com/guides/how-to-organize-your-react-+-redux-codebase



# Songwrite Pitch
----
### Elevator Pitch
Play as a bedroom songwriter by acquiring new instruments and setting up a successful career!  Win the game by gaining 1000 fans.

### User Stories for MVP
As a user I want to be able to buy new musical instruments.
As a user I want to be able to measure my music's success.
As a user I want to have depth of success across multiple dimensions such as Originality, Popularity, Quality, and Blog Traction
As a user I want to be able to practice performance on a given instrument.
As a user I want to be able to be able to write songs.
As a user I want to be able to release songs.
As a user I want to be able to save my progress and return to the game later.
As a user I want to be able to upgrade my bedroom size.
As a user I want to spend money every month on rent.
As a user I want to have a job that gives me money each week.
As a user I want to be able to sell instruments.
As a user I want to have achievements that show my progress.

##### User Story Stretch Goals
As a user I want to be able to play this game on my phone in addition to larger devices.
As a user I want to choose my initial user stats from a couple options.
As a user I want to be able to sell instruments and downgrade my bedroom if I overspend.
As a user I want to have the option to write music of various types such as indie, acoustic, and edm.

## Planning
----

### Proposed Architecture
React
Redux
Node & Express
Sass
JSON Web Token
Axios
PostGresSQL
Sequelize
Jest
Docker

#### Site Map
![Site Map](/readmeAssets/songwriteSITEMAP.jpg)

#### Wireframes
![Opening Screens Wireframes](/readmeAssets/Wireframes/openingscreens.png)
![New Game Wireframe](/readmeAssets/Wireframes/newgame.png)
![Main Menu Wireframe](/readmeAssets/Wireframes/mainmenuscreen.png)
![Practice Instrument Wireframes](/readmeAssets/Wireframes/practicescreen.png)
![Buy and Sell Instrument Wireframes](/readmeAssets/Wireframes/buysellscreen.png)
![Upgrade Bedroom Wireframes](/readmeAssets/Wireframes/upgraderoomscreen.png)
![Write and Record Wireframes](/readmeAssets/Wireframes/writerecordscreen.png)
![Release Song Wireframes](/readmeAssets/Wireframes/releasescreen.png)
![Social Media Post Wireframes](/readmeAssets/Wireframes/socialmediascreen.png)
![Achievements Wireframe](/readmeAssets/Wireframes/achievementsscreen.png)
![Save Wireframes](/readmeAssets/Wireframes/savescreens.png)
![Save Success and Logout Wireframes](/readmeAssets/Wireframes/savesuccesslogoutscreen.png)
![Job Promotion Wireframe](/readmeAssets/Wireframes/jobpromotionscreen.png)

#### React Components/Tree


#### Redux Store
Information that will need to be handled in Redux:
New Game Initializations
    -First instrument name, skill level, and # of slots it fills
    -Bedroom cost per week, weekly income, and current bank account
    -Bedroom instrument number of slots - just a number (initially 10)
    -Fans set to 0
    Possibly: -Achievements set to an empty array/object
User has an array of owned instrument objects (instrument is removed when sold)
Owned instruments have a name, a skill number, number of slots it requires, and a pointer to an image


#### Sprint Planning


#### Database Structuring
User - Username, Hashed Password (utilize JWT, no connection to Redux)
All game state saved from a user's account - effectively the full Redux store's information at a given point in time
Save initial game state to DB when user account is created

#### Routes
<!-- (Client and Server) -->


### MVP


### Stretch Goals/Features


### Unit Testing


# Screenshots
---

<!-- ![Landing Page Screenshot](/img/screenshots/Landing.png) -->