const AWS = require('aws-sdk');
const uuidv4 = require('uuid/v4');

const config = require('./config');

const dynamoDBConfig = {
  apiVersion: '2012-08-10',
  endpoint: `http://${config.dynamoDbHost}:${config.dynamoDbPort}`
}
const dynamodb = new AWS.DynamoDB(dynamoDBConfig);

exports.handler = (event, context, callback) => {
  var params = {
    Item: {
     "SessionId": {
       S: uuidv4()
      }
    }, 
    ReturnConsumedCapacity: "TOTAL", 
    TableName: config.tableName
   };

   dynamodb.putItem(params, function(err, data) {
     if (err) console.log(err, err.stack); // an error occurred
     else console.log(data);           // successful response

     callback(err, data)
   });
}
