# LearningBadges

Description

Questions and comments to: [eric.garcia@nearshoretechnology.com]

How to Install?
--------------
1. Install [NodeJs](https://nodejs.org/en/)
2. Validate installations by running `node --version` and `npm --version`
3. Install [MongoDB](https://www.mongodb.com/download-center)
4. Install [Robomongo](https://robomongo.org/download)
5. Inside Backend folder; run `npm install`
6. Inside Backend folder; run `npm run populate:db`
7. Inside Frontend folder; run `npm install`

Notes
--------------
- `npm run populate:db` should only be executed once and after doing `npm install`.

Running Backend
--------------
1. Make sure mongodb is running
2. Inside Backend project folder, run: `npm run start:dev`

Running Frontend
--------------
1. Inside Frontend project folder, run: `npm start`
2. Open [localhost:3000](http://localhost:3000) in your web browser

## Backend Structure
- t4r: Application
  - Feature
    - index.js: Export Functionality
    - feature.js: Model
    - controller.js: Logic
    - test.js: Tests

## Frontend Structure
- app
  - components: Dummy Components (stateless)
    - component
      - index.js: Dummy Component
      - messages.js: Static messages
  - containers: Smart Components (stateful)
    - container
      - index.js: Smart Component
      - constants: Action type constants
      - actions: Redux actions
      - reducer: Redux Reducer
      - selectors: Selectors for Redux
      - sagas: Sagas
