'use strict';
import {LambdaEvent} from '../index';
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
