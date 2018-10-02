'use strict'

// following https://docs.aws.amazon.com/appsync/latest/devguide/building-a-client-app-node.html
global.WebSocket = require('ws');
global.window = global.window || {
    setTimeout: setTimeout,
    clearTimeout: clearTimeout,
    WebSocket: global.WebSocket,
    ArrayBuffer: global.ArrayBuffer,
    addEventListener: function () {},
    navigator: {
        onLine: true
    }
};
global.localStorage = {
    store: {},
    getItem: function (key) {
        return this.store[key]
    },
    setItem: function (key, value) {
        this.store[key] = value
    },
    removeItem: function (key) {
        delete this.store[key]
    }
};
require('es6-promise').polyfill();
require('isomorphic-fetch');

// Require AppSync module
const AUTH_TYPE = require('aws-appsync/lib/link/auth-link').AUTH_TYPE;
// no reference available, but AWSAppSyncClient is an extension of ApolloClient
// see https://www.apollographql.com/docs/react/api/apollo-client.html
// see https://github.com/awslabs/aws-mobile-appsync-sdk-js/blob/master/packages/aws-appsync/src/client.ts
// also see https://github.com/apollographql/apollo-client/blob/master/packages/apollo-client/src/ApolloClient.ts

const AWSAppSyncClient = require('aws-appsync').default;

function buildClient(config) {
    var credentials
    var AWS
    if (!(config.AWS_ACCESS_KEY_ID && config.AWS_SECRET_ACCESS_KEY)) {
        console.log("Unable to find AWS_ACCESS_KEY_ID & AWS_SECRET_ACCESS_KEY, loading from user's default config in ~/.aws")
        process.env.AWS_SDK_LOAD_CONFIG = true;
        AWS = require('aws-sdk');
        if (config.REGION) {
            AWS.config.update({
                region: config.REGION})
        }      
    } else {
        AWS = require('aws-sdk');
        AWS.config.update({
            region: config.REGION,
            credentials: new AWS.Credentials({
                accessKeyId: config.AWS_ACCESS_KEY_ID,
                secretAccessKey: config.AWS_SECRET_ACCESS_KEY
            })
        });        
    }
    credentials = AWS.config.credentials;      
    // Using IAM
    // Set up Apollo client
    const client = new AWSAppSyncClient({
        url: config.ENDPOINT,
        region: config.REGION,
        auth: {
            type: AUTH_TYPE.AWS_IAM,
            credentials: credentials,
        },
        disableOffline: true,
    });
    return client
}

module.exports = {
    buildClient
}