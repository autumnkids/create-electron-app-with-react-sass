#!/bin/sh

echo 'Start creating...'

if [ -z $1 ]; then
  echo 'Please enter the destination folder name.'
  exit 1
fi

DEST_FOLDER=$1
if [[ ! $1 == */* ]]; then
  DEST_FOLDER=../$1
fi
if [ ! -d $DEST_FOLDER ]; then
  echo 'Creating destination folder...'
  mkdir -p $DEST_FOLDER
  echo 'DONE!'
  printf '=========================================\n\n'
fi

echo 'Copying files to destination...'
echo '-> ./src/'
cp -r ./src $DEST_FOLDER/src/
echo '-> app_starter.js'
cp ./app_starter.js $DEST_FOLDER/
echo '-> electron_starter.js'
cp ./electron_starter.js $DEST_FOLDER/
echo '-> index.html index.js'
cp ./index.* $DEST_FOLDER/
echo '-> package.json'
cp ./package.json $DEST_FOLDER/
echo '-> webpack.config.js'
cp ./webpack.config.js $DEST_FOLDER/
echo 'DONE!'
printf '=========================================\n\n'

echo 'Entering destination folder...'
cd $DEST_FOLDER
echo 'In folder' $DEST_FOLDER
echo 'Installing dependencies...'
echo '-> electron'
npm install
echo '-> react'
npm install --save-dev babel-loader babel-core babel-preset-react babel-plugin-transform-class-properties react react-dom
echo '-> webpack'
npm install --save-dev webpack webpack-cli
echo '-> webpack-dev-server'
npm install --save-dev webpack-dev-server
echo '-> sass'
npm install --save-dev style-loader css-loader sass-loader node-sass
echo 'DONE!'
printf '=========================================\n\n'

echo 'Working on an initial build...'
npm run build
echo 'DONE!'
printf '=========================================\n\n'

echo 'Now you can go to' $DEST_FOLDER 'and run "npm start" to start'
