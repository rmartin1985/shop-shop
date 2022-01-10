# shop-shop-2.0-with-Redux

  ![](https://img.shields.io/badge/license-MIT-blue)

  ## Description
 E-commerce is everywhere and given recent world events, the trend is only going to continue to grow. This is a simple e-commerce style site. The home page lists a number of items for purchase. A user can click on each item and get more detail about that item. 

 The user can add items to their cart from either the homepage or from the individual product page as well. The user will need to sign up in order to actually check out, however. 

 The cart in the top right will expand to show what is in the cart at this given time and the user can also edit the quantities of the items from there. 

 Once they click checkout, the user is taken to the Stripe payment processing page where they can input their card and purchase the items. If the information is deemed valid, they will be directed to a success page and then after 3 seconds they are back on the homepage for more shopping.

 This is an update to an existing code base from earlier in the week. I was challenged with refactoring this site to use Redux as opposed to Context API. I have left comments in the code in order to show what was changed for grading purposes. If you would like to test out the Stripe payment API, this is in test mode so the card number 4242 4242 4242 4242 is used for testing. 

  ## Table of Contents
  1. [Installation](##installation)
  2. [User Story](#user-story)
  3. [Acceptance Criteria](#acceptance-criteria)
  4. [Deployed Application](#deployed-application)
  5. [Demo](#demo)
  6. [Technology](#technology)
  7. [Questions](#questions)
  8. [License](#license)
  

  ## Installation
  1. Fork this repository
  2. Clone repository to your local directory
  3. Make sure you have installed Node.js 
  4. Run npm install to install the necessary dependencies
  ```
  npm install
  ```
  5. Run npm run develop to get a development version of the app to inspect and test out
  ```
  npm run develop
  ```

  ## User Story
  ```
    AS a senior engineer working on an e-commerce platform
    I WANT my platform to use Redux to manage global state instead of the Context API
    SO THAT my website's state management is taken out of the React ecosystem 
  ```
  ## Acceptance Criteria
  ```
    GIVEN an e-commerce platform that uses Redux to manage global state
    WHEN I review the app’s store
    THEN I find that the app uses a Redux store instead of the Context API
    WHEN I review the way the React front end accesses the store
    THEN I find that the app uses a Redux provider
    WHEN I review the way the app determines changes to its global state
    THEN I find that the app passes reducers to a Redux store instead of using the Context API
    WHEN I review the way the app extracts state data from the store
    THEN I find that the app uses Redux instead of the Context API
    WHEN I review the way the app dispatches actions
    THEN I find that the app uses Redux instead of the Context API

  ```

  ## Deployed Application
  Please click the following link  to be taken to a Heroku app of this application: 
  [Shop-Shop](https://radiant-tundra-86540.herokuapp.com/)

  ## Demo 

  ![Shop-Shop](https://media.giphy.com/media/vVtLGTr1dMbhiPY4we/giphy.gif)


  ## Technology Used
  **1. [React](https://reactjs.org/)**

  **2. [Redux](https://redux.js.org/)**

  **3. [Node.js](https://nodejs.org/en/)**

  **4. [MongoDB](https://www.mongodb.com)**

  **5. [Mongoose ODM](https://mongoosejs.com/)**

  **6. [Apollo Client](https://www.apollographql.com/docs/react/)**

  ## Questions

  If you have any questions regarding this project, you can reach me at my GitHub account or by email at:
  <br />
  Github: [rmartin1985](https://github.com/rmartin1985)
  <br />
  Email: rickmartinatx@gmail.com

  ## License
  Licensed under the [MIT License](LICENSE)
