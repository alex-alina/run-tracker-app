
## Run Tracker App - Client

## Demo
![Demo - WIP](Demo.gif)

## Description

This is the client for a Run Tracker App. When users click **Start** they are sent to a **Users' List**.

When a user clicks on their name, they are sent to their Runs' Status page, where they can add or delete entries.

The goal of this project was to build a SPA to track users runs taken at different dates and display them in a list and a graph.

**Project's status: WIP**

## Tech stack

* React
* Redux
* Material-UI
* JavaScript
* CSS

## Features

* Start screen and Start button
* Users' list screen, displaying longest distance run for each user
* User's runs tracking screen
* Add run, Delete run and Clear list buttons

## Setup

* For the app to run properly you need to instal a JSON-server in order to serve user data from `db.json` through a REST API.
  * The JSON-server exposes a REST API based on a JSON file.
* Install JSON-server using `npm install -g json-server`
* Clone the repository `git clone git@github.com:alex-alina/weight-tracker-app.git`
* Install the dependencies using `yarn install`
* Run the JSON-server using `yarn jsonserve`
  * Make sure the JSON server is running at all times, while your application is running.
* Test that the JSON server is running using httpie `http :4000/users`
* Start the server using `yarn start`

## Future development and improvements

* Display a graph showing the progress
* Use pagination on the lists
* Make app responsive 
* Add unit tests

## License

MIT Licence - Copyright &copy; 2019 - Alina Rusu.
