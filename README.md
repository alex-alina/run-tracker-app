
## Weight Tracker App - Client

## Demo
WIP

## Description

This is the client for a Weight Tracker App. When users click **Start** they are sent to a **Users' List**.

When a user clicks on their name, they are sent to their Weight Status page, where they can add or delete weight entries.

The goal of this project was to build a Single Page Application to track users weights taken at different dates and display them in a list and a graph.

**Project's status: WIP**

## Tech stack

* React
* Material-UI
* JavaScript
* CSS

## Features

* Start screen and Start button
* Users' list screen
* User's weight tracking screen
* Add weight, Delete weight and Clear list buttons

## Setup

* For the app to run properly you need to instal a JSON-server in order to serve user data from `db.json` through a REST API.
  * The JSON-server exposes a REST API based on a JSON file.
* Install JSON-server using `npm install -g json-server`
* Clone the repository `git clone git@github.com:alex-alina/weight-tracker-app.git`
* Install the dependencies using `yarn install`
* Run the JSON-server using `json-server --delay 1000 --port 4000 db.json`
  * Make sure the JSON server is running at all times, while your application is running.
* Test that the JSON server is running using httpie `http :4000/users`
* Start the server using `yarn start`

## License

MIT Licence - Copyright &copy; 2019 - Alina Rusu.
