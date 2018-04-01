#!/bin/sh

echo 'Starting production build...'
npm run build
echo 'DONE!'
printf '=========================================\n\n'

echo 'Creating scripts for running the app...'
CURRENT_PATH=$(pwd)
APP_NAME=${PWD##*/}
START_SCRIPT='#!/bin/sh\n\ncd '$CURRENT_PATH'\nnpm run electron\n'
echo '-> shell script: '$APP_NAME'.sh'
echo $START_SCRIPT > $APP_NAME.sh
chmod 755 $APP_NAME.sh
echo '-> macos script: '$APP_NAME'.command'
echo $START_SCRIPT > $APP_NAME.command
chmod 755 $APP_NAME.command
echo 'DONE!'
printf '=========================================\n\n'

echo 'Here we go, production build is done. You can:'
echo 'For windows/linux/mac, Run shell script in terminal by'
echo '  ./'$APP_NAME'.sh'
echo 'For mac, double click command script "'$APP_NAME'.command" to run'
