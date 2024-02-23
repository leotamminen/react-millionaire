# React Millionaire Quiz

This is a React web app based on the popular game show "Who Wants to Be a Millionaire"

## Live Demo

- The version deployed to GitHub Pages with 15 test questions from a local data source can be accessed [here](https://leotamminen.github.io/react-millionaire).

## Local Setup with MongoDB

To run the application locally with MongoDB integration, follow these steps:

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies with `npm i`.
4. Set up MongoDB and configure the connection URI in the `.env` file.
5. Start the backend server in the backend directory with `node server.js`.
6. Start the frontend development server in the frontend directory with `npm start`.

## Available Scripts

Currently in the projects `frontend/` directory, you can run:

- `npm start`: Starts the frontend.
- `npm run build`: Builds the app for production.

## Branch Information

- The `master` branch includes a version of the app with static data. Currently getting the test questions from the frontend!
- The `mongo-questions` branch working on localhost setup and getting the questions from mongodb
- The `vercel-deploy` branch is currently under development and aimed at deploying the app to Vercel later.
- The `gh-pages` branch is used for GitHub Pages deployment, providing a live demo with test questions.

## TODO

- [ ] Lifelines

  - [ ] 50:50 (easiest)
  - [ ] Phone a friend
  - [ ] Ask the audience

- [ ] money-list's active item needs to lock to million after the player has won the game.
- [ ] Responsiveness
- [ ] Start screen (name)
- [x] Winning screen
- [ ] Make the GameWinner.js look better
- [ ] Add rest of the sounds correct/incorrect sounds, maybe lock in answer
- [ ] Big question pool, select difficulty
