const AWS = require('aws-sdk');
const config = require('../config');

const dynamoDBConfig = {
  apiVersion: '2012-08-10',
  endpoint: `http://${config.dynamoDbHost}:${config.dynamoDbPort}`
}
const dynamodb = new AWS.DynamoDB(dynamoDBConfig);

createTable = (done) => {
  var params = {

    AttributeDefinitions: [
       {
      AttributeName: "SessionId", 
      AttributeType: "S"
     }
    ], 
    KeySchema: [
       {
      AttributeName: "SessionId", 
      KeyType: "HASH"
     }
    ], 
    ProvisionedThroughput: {
     ReadCapacityUnits: 5, 
     WriteCapacityUnits: 5
    }, 
    TableName: config.tableName
   };
   dynamodb.createTable(params, function(err, data) {
     if (err) console.log(err, err.stack); // an error occurred
     else     console.log(data);           // successful response
     done(err, data);
   });

}


exports.handler = (event, context, callback) => {
  // const request = event.Records[0].cf.request;
  createTable (callback)
}
