# serverlessq
A Node JS module for serverless application routing.

## Supported Services  
This package currently supports AWS Lambda with future support for Microsoft Azure Functions and Google Functions expected.

Recommend using the Serverless framework for packaging and simplification of Node JS serverless development:
https://serverless.com/

## AWS Lambda
It can process events from the following Lambda triggers:
* API Requests from API Gateway
* SQS Messages
* DynamoDB
* S3

## Installation
```sh
npm install expressless --save
```

## Usage
There are 2 parts available to use as part of this package:
* LambdaEvent
* Router

Create a new directory or use an exsiting serverless directory
```sh
mkdir myapp
cd myapp
```

### Router
Router is used for creating your own API routes in app similar to Node Express apps.

Create routes using as follows

```sh
mkdir routes
cd routes
```

Add a new file under routes
e.g routes/staff.js
```javascript
var Router=require('serverless-parser').Router;
var routes=new Router();

export class mock_route{
    async r(req){
        return await route(req);
    }
}

/**
 * Route asks for a request object it can work with so it can resolve
 * data to be sent back.
 * 
 * @param req 
 */
async function route(req){
    routes.add(
        'GET', 
        '/mock', 
        async function(){
            return {
                id: 1,
                first: 'Jane',
                last: 'Smith'
            }
    });
    
    return routes.process(
        req
    );
}

module.exports=route

```

### LambdaEvent
LambdaEvent is used to specifically process LambdaEvents before sending to Router.

Create your default function 

### Javascript

```javascript
var require=require('expressless');

```

### Typescript

```typescript
'use strict';
import {LambdaEvent} from 'expressless';
import {mock_route} from '../sample_routes/mock';

export async function route (event, context){
  console.log("This is a mock event");
  let l=new LambdaEvent(event);
  let request=l.req();
  let route=new mock_route();
  let data= await route.r(request);
  console.log(data);
  // return {
  //   status: 200,
  //   body: data
  // }
  return l.res(data);
};

```