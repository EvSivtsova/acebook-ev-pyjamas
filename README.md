# Acebook
<div align="center">
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
  <img src="https://img.shields.io/badge/Handlebars-black?style=for-the-badge&logo=Handlebars&logoColor=white" alt="Handlebars"/>
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white"/>
  <img src="https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e"/>
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
</div>
<br>

This is a Makers' challenge from weeks 8 and 9. We were given a Node.js template for the Acebook engineering project based on which we built a website app which that allows befriending and unfriending people, publishing posts, comments, and likes. 

## Meet the team!

* [Ahmed](https://github.com/meddydev)<br>
* [Ev](https://github.com/EvSivtsova)<br>
* [Irina](https://github.com/IrinaVi)<br>
* [Paris](https://github.com/ParisMonson)<br>
* [Sara](https://github.com/Saraesabbagh)<br>
* [Shaun](https://github.com/shaunywho)<br>

## TechStack:

- [Javascript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/en/): back-end JavaScript runtime environment.
- [Express](https://expressjs.com/): web framework for Node.js.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [Handlebars](https://handlebarsjs.com/) to render view templates.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [MoongoDB Atlas](https://www.mongodb.com/cloud/atlas) to deploy and scale a MongoDB cluster in the cloud.
- [Heroku](https:/www.heroku.com) to deploy applications in the cloud. 
- [ESLint](https://eslint.org) for linting.
- [Jest](https://jestjs.io/) for testing.
- [Cypress](https://www.cypress.io/) for end-to-end testing.

To install the project, clone the repository and install node.js and the dependencies within the project's folder:

```
git clone https://github.com/EvSivtsova/acebook-the-pyjamas.git
cd acebook-the-pyjamas
npm install bundle
```
#### To view the application

1. Start the server
```
npm start
```
2. Browse to [http://localhost:3000](http://localhost:3000) to view the project.

The deployed version of the app can be seen [here](https://acebook-the-pyjamas.herokuapp.com)
<br>
<br>
#### To run the tests

1. Start test server. The server must be running locally with test configuration for the integration tests to pass.

```
npm run start:test
```

This starts the server on port `3030` and uses the `acebook_test` MongoDB database, so that integration tests do not interact with the development server.

- Run all tests
  ```
  npm test
  ```
- Run a check
  ```bash
  npm run lint              # linter only
  npm run test:unit         # unit tests only
  npm run test:integration  # integration tests only
  ```
