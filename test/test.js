'use strict';
var expect = require('chai').expect;
var LambdaEvent = require('../dist/index.js').LambdaEvent;
var fs=require("fs");

describe('Sample HTTP Test', () => {
    var routes=require('../dist/sample_routes/mock.js');
    it('should match Object', async () => {
        var event=require('./data/mock-http.json');
        let l=new LambdaEvent(event);
        let request=l.req();
        let route=new routes.mock_route();
        let data= await route.r(request);
        console.log(data);
        // var result = index.getPlural('Boy');
        expect(data).to.deep.equal({
            id: 1,
            first: 'Jane',
            last: 'Smith'
        });
    });
    
});

describe('Test JS Routes', () => {
    var routes=require('../dist/sample_routes/mock-example.js');
    it('should return Object', async () => {
        var event=require('./data/mock-http.json');
        let l=new LambdaEvent(event);
        let request=l.req();
        let route=new routes.mock_route();
        let data= await route.r(request);
        console.log(data);
        // var result = index.getPlural('Boy');
        expect(data).to.deep.equal({
            id: 1,
            first: 'Jane',
            last: 'Smith'
        });
    });
    
});

async function getMockData(fileName){
    return new Promise(function(resolve, reject){
        fs.readFile(
            fileName,
            'utf8',
            function(err, data){
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
        });
    })
}