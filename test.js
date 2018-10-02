import clientBuilder from './packages/node-appsync-iam-client'
import config from './config'
const client = clientBuilder.buildClient(config)

import gql from 'graphql-tag';

// ACTION

const TxDebug = gql `
mutation TxDebug{
  txRequest(
    ty:"depo",
    auth:"guess who",
    sub:"xxx",
    d:"{}"
  ){
    items{
      pk
      sk
    }
    error
  }
}`;


client.hydrated().then(function (client) {
    //Now run a query
    client.mutate({
            mutation: TxDebug
        })
        //client.query({ query: query, fetchPolicy: 'network-only' })   //Uncomment for AWS Lambda
        .then(function logData(data) {
            console.log('results of query: ', data);
        })
        .catch(console.error);


});