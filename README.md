## Create Electron Simple App

## What's this?

A helper to create a basic electron app for you to start with, which integrates [electron 1.8.4](https://electronjs.org/), [react](https://reactjs.org/) and [sass](https://sass-lang.com/).

## How to use?

```
./create_electron_simple_app.sh /path/to/your-app
```

If only the app name is provided, it'll create the app folder in `../app-name`

## What happens if I run the command above?

It'll copy most of the necessary files, including the ones inside `./src`, into your app's folder. And then it'll run `npm` to install all the necessary dependencies. Finally, you should be able to run `npm start` in your app's folder to start, which will run the webpack dev server and launch electron with a delay in order to wait for the server to be launched.

## What this includes

* Some basic components in `./src`
  * button.js
  * webview.js
* package.json
  * specifies an electron version to install, and some basic scripts
* webpack.config.js
  * specifies the build bundle output, react loader, and sass loader
* app_starter.js
  * to start the app with a delay until the server is launched
* create_electron_simple_app.sh
  * which is a shell script to create your app repository
* electron_starter.js
  * to start the electron app
* index.html
  * is a skeleton of the main page
* index.js
  * is the entry point to render your app

## Credit

The main idea of how to integrate electron, react and sass is from [juxtinteractive/electron-react-sass](https://github.com/juxtinteractive/electron-react-sass). I mainly follow the guideline addressed [here](https://github.com/juxtinteractive/electron-react-sass/blob/master/docs/guide.md), with some updates.
