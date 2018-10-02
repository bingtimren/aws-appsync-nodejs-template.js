# aws-appsync-nodejs-template.js
A node.js client example using AWS AppSync service with IAM authorization. 

## Config
Build the AppSync service & create an access key. Then put the settings in "config.js" 

In "test.js" which will be executed if you run "npm run test", there is a mutation which is sent. Change that to your own query, mutation, etc.

## Explained
This demo follows the developer guide at https://docs.aws.amazon.com/appsync/latest/devguide/building-a-client-app-node.html and put the code that build a AWSAppSyncClient in ./packages/node-appsync-iam-client.js

An AWSAppSyncClient is an extention of a ApolloClient. So more on using client can be found at https://www.apollographql.com/docs/react/api/apollo-client.html

This template also demos how to obtain configuration & credential from user's environment.

## To Build
npm run build

## To Test
npm run test
