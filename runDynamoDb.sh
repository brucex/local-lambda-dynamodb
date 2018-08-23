#!/bin/sh

dynamoDir='dynamoDBDir'
dynamoPort=`cat config.js|grep dynamoDbPort| awk '{print $2}'|sed 's/,//g'`
mkdir -p $dynamoDir
node ./node_modules/local-dynamo/bin/launch_local_dynamo.js --database_dir=$dynamoDir --port=$dynamoPort
