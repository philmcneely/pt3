const assert = require('assert')
const callTimeout = 8000;
import { getAllRequests } from "../lib/requestInterceptor";

export default async () => {

    browser.expectRequest('POST', /^https:\/\/rs\.fullstory\.com\/rec\/bundle.*/gm, 200); // expect POST request to fullstory with 200 statusCode

    let requests = await browser.getRequests();
    //console.log('current requests: ' + requests.length);

    let validRequests = 0; //this shoudl allow us to at least waitn until a new request is made.
    while (validRequests <= 0) {
        //console.log('current requests on entry: ' + requests.length);  //1
        requests = await browser.getRequests();
        //console.log('current requests on recheck: ' + requests.length);  //1
        requests = await requests.filter(request => {
            if (request.method === 'POST' && request.url.includes('https://rs.fullstory.com/rec/bundle')) {   //doesnt like the regex
            //console.log('found url match');
            validRequests = Number(validRequests + 1);
            //console.log('validRequests ' + validRequests);
            //console.log(request.url);
            } else {
                //console.log('did not find url match');
                //console.log(request.url);
                //console.log('validRequests' + validRequests);
            }
        });
        await browser.pause(1000)
      }

    await browser.assertExpectedRequestsOnly(); // validate the requests
};
