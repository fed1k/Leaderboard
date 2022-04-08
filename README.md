# Leaderboard
The leaderboard website represents scores submitted by different players. It also allows you to submit your score. All data is preserved in the Leaderboard API service of Microverse.

## Built with
 * HTML
 * CSS
 * JavaScript
 * Webpack
 * FontAwesome icons

## Getting started 
1. Open VSCode or terminal and navigate to the folder where you would like to clone the project.
2. Type "pwd" to see your working directory.
3. Clone repository(git clone "branch-link")
## API information

    The Leaderboard API service was created by Microvere.
    Base URL: https://us-central1-js-capstone-backend.cloudfunctions.net/api/
    To create a game, send a POST action to Base URL + /games, with the name of the game. Parameters example for POST action:

{
    "name": "Firdavs"
}

    Return value: unique identifier for the game

{
    "result": "Game with ID: Zl4d7IVkemOTTVg2fUdz added."
}

    To submit a score, send a POST action to Base URL + /games/ + :id + /scores/. E.g: Base URL/games.lkZvzTSRH77IZXCC4fo9/scores/. Parameters example for POST action:

{ 
    "user": "John Doe",
    "score": 42
}

## Authors
 * Github account: 🐱‍👤(https://github.com/fed1k)
 * LinkedIn account: ✔(https://www.linkedin.com/in/firdavs-allamurotov-12b60a226/)

## Show your support

 Give a ⭐️ if you like this project!
 Acknowledgments

 Microverse for amusing support and guidance.
 Microverse code reviewers.

## 📝License

Coming soon.
