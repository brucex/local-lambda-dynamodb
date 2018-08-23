# Running dynamodb server
`./runDynamoDb.sh`

# Create initial db table
`npm run create-table`

# If aws cli and want to see list of tables
`aws dynamodb list-tables --endpoint-url http://0.0.0.0:4545`

# See items in table
`npm run list-table`

# Add item to table
`npm run lambda`

## Common Issues
Failed to start DynamoDB Local. Maybe because the database directory does not exist.

Make sure java is installed and in your path