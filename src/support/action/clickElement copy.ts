import { Selector } from 'webdriverio';
import checkIfElementExists from '../lib/checkIfElementExists';
const assert = require('assert')
/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   selector Element selector
 */
export default async (
    action: 'click' | 'doubleClick',
    type: 'link' | 'selector',
    selector: Selector
) => {
    /**
     * Element to perform the action on
     * @type {String}
     */
    const selector2 = (type === 'link') ? `=${selector}` : selector;

    /**
     * The method to call on the browser object
     * @type {String}
     */
    const method = (action === 'click') ? 'click' : 'doubleClick';

    await checkIfElementExists(selector2);

    browser.setupInterceptor();
    browser.expectRequest('POST', /^https:\/\/rs\.fullstory\.com\/rec\/bundle.*/gm, 200); // expect POST request to /api/foo with 400 statusCode
    
    let requests = await browser.getRequests();
    console.log('requests currently: ' + requests.length);

    await $(selector2)[method]();  //click the link
    
    await browser.pause(5000); // maybe wait a bit until request is finished

    requests = await browser.getRequests();
    console.log('requests currently: ' + requests.length);

    //assert.equal(requests.length, 1);
    const request = await browser.getRequest(requests.length-1);
    console.log(request.method);
    console.log(request.url);
    console.log(request.body);

    await browser.assertRequests(); // validate the requests
};
