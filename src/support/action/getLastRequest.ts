const assert = require('assert')
const callTimeout = 8000;
import { getAllRequests } from "../lib/requestInterceptor";

export default async () => {

    browser.expectRequest('POST', /^https:\/\/rs\.fullstory\.com\/rec\/bundle.*/gm, 200); // expect POST request to fullstory with 200 statusCode

    let requests = await getAllRequests();
    let count = requests.length;
    //console.log('requests currently: ' + count);

    let validRequests = 0;
    while (validRequests <= 0) {
        //console.log('requests currentlyX: ' + requests.length);  //1
        requests = await browser.getRequests();
        //console.log('requests currentlyY: ' + requests.length);  //1
        requests = await requests.filter(request => {
            if (request.method === 'POST' && request.url.includes('https://rs.fullstory.com/rec/bundle')) {   //doesnt like the regex
            //console.log('found url match');
            validRequests = Number(validRequests + 1);
            //console.log('validRequests' + validRequests);
            //console.log(request.url);
            } else {
                //console.log('did not find url match');
                //console.log(request.url);
                //console.log('validRequests' + validRequests);
            }
        });
        await browser.pause(1000)
      }

    //whatever the very last count of requests is should eb the one we want.

    requests = await getAllRequests();
    count = requests.length;
    console.log('requests currently: ' + count);
    console.log('requests desired: ' + Number(count - 1));

    return await browser.getRequest(Number(count - 1));
};
