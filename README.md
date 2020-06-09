# Songwrite
Live Link: 




### Game Functionality


### Installation/Dependencies
<!-- (how to use app, run locally) -->

### Issues


### Reflections
<!-- (planning stage, various parts of writing code, testing, issues, technologies) -->

### Sources
- Redux Documentation: https://redux.js.org/basics/example
- Instrument images: https://starbounder.org/Music#Instruments
- Random Song Titles: https://random-word-api.herokuapp.com/home
- Styled Components: https://levelup.gitconnected.com/building-a-reusable-component-system-with-react-js-and-styled-components-4e9f1018a31c
- Docker Toolbox: https://docs.docker.com/toolbox/toolbox_install_mac/
- Redux Store Information: https://stackoverflow.com/questions/49104247/in-redux-where-does-the-state-actually-get-stored/49104335
- Different File Organizations with React and Redux: https://www.pluralsight.com/guides/how-to-organize-your-react-+-redux-codebase



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
- React
- Redux
- Node & Express
- Sass
- JSON Web Token
- Axios
- PostGresSQL
- Sequelize
- Jest
- Docker

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
![Insufficient Funds Wireframes](/readmeAssets/Wireframes/insufficientfunds.png)
![Insufficient Funds Wireframe](/readmeAssets/Wireframes/insufficientfundscont.png)

#### React Component Trees
![First set of Component Trees](/readmeAssets/ComponentTrees/songwriteComponentTree-Page-1.jpg)
![Second set of Component Trees](/readmeAssets/ComponentTrees/songwriteComponentTree-Page-2.jpg)
![Third set of Component Trees](/readmeAssets/ComponentTrees/songwriteComponentTree-Page-3.jpg)
![Fourth set of Component Trees](/readmeAssets/ComponentTrees/songwriteComponentTree-Page-4.jpg)
![Fifth set of Component Trees](/readmeAssets/ComponentTrees/songwriteComponentTree-Page-5.jpg)
![Sixth set of Component Trees](/readmeAssets/ComponentTrees/songwriteComponentTree-Page-6.jpg)
![Seventh set of Component Trees](/readmeAssets/ComponentTrees/songwriteComponentTree-Page-7.jpg)

#### Redux Store
Information that will need to be handled in Redux:
New Game Initializations
    -First instrument name, skill level, and # of slots it fills
    -Savings in bank account
    -Bedroom cost per week and Bedroom instrument number of slots (initially 10)
        Note on Bedroom: Three bedrooms will exist in database. Size of 1 will be initial room. Size 2 and 3 are increasingly larger. Initialization will establish link between user and bedroom of size 1 with necessary statistics stored in Redux store.  Bedroom stats only stored in DB (one single location).
    -Fans set to 0
    -Job that provides a weekly income, with job level starting at 0
    Possibly: -Achievements set to an empty array/object
User has an array of owned instrument objects (instrument is removed when sold)
Owned instruments have a name, a skill number, number of slots it requires, and a pointer to an image
User has an array of song objects - each song has a randomly generated name, a success value (out of 100), and a boolean of released or not
User has an array or object that list fulfilled achievements

#### Sprint Planning
My schedule is currently heavily in flux due to my Software Engineering Teaching Assistant position combined with my ongoing job search, so this sprint plan does not have the typical timeline that I usually create.

    Sprint Planning
    Design Site Map
    Design Wireframes
    Design React Component Trees
    Plan out variables in Redux Store
    Plan out Database Structure
Build out Components
Build Redux files (actions, reducers, const declarations, and reducers combined in store)
Connect Redux with Components
Stub out Back-end Routes
Create Database with model files
Connect back end with database
JSON Web Token setup and testing (connection with database)
Spruce up design with Sass and add all game assets
Plan out tests
Build Tests
Perform tests
Make changes until all tests pass
Research containerization
Deploy with containerization

#### Database Structuring
User - Username, Hashed Password (utilize JWT, no connection to Redux)
All game state saved from a user's account - effectively the full Redux store's information at a given point in time
Save initial game state to DB when user account is created
See note on Bedroom in Redux Store section above.
![Database Structure Diagram](/readmeAssets/songwriteDB.jpg)

### MVP
MVP is functionality for game.  Basic pages for each part of "site" as well as Redux fully set up.  Instrument images included in MVP.

### Stretch Goals/Features
Stretch goals are primarily cosmetic at this time.  Original background for use on many of not all pages of site.  Further work on a logo or design for the first page at least.  Work on fonts and colors/overall-design.

This project will not utilize test driven development.  Unit testing will be written upon completion of game.  My goal with using Jest on this project is to get more familiarity with it.  As such, I will focus on it once the game is mostly built rather than integrating it from the very beginning for this project.

I also consider the containerization of this project as a stretch goal.  It is not required for the success of the game, but is also something I would like to get experience with.  I will deal with it at the end of the project if I have enough time to put into it.

### Unit Testing


# Screenshots
---

<!-- ![Landing Page Screenshot](/img/screenshots/Landing.png) -->