"use strict";
// from https://docs.aws.amazon.com/appsync/latest/devguide/building-a-client-app-node.html
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    // Required: End point URL
    ENDPOINT: 'https://kafqkss4qbgchb276gagbq767a.appsync-api.us-east-1.amazonaws.com/graphql',

    // Optional: will get from user environment ~/.aws if not provided below
    // AWS_ACCESS_KEY_ID: 'your access key id',
    // AWS_SECRET_ACCESS_KEY: 'your secret access key',
    REGION: "us-east-1",
};
exports.default = config;
