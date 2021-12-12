const assert = require('assert')
const callTimeout = 8000;
import { getAllRequests } from "../lib/requestInterceptor";
import checkEventCode from "./checkEventCode";
/**
 * Perform an click action on the given element
 * @param  {object}   code   The value 
 * @param  {number}   args   The value
 */
export default async (
    code: number, 
    args: string
    ) => {

    let requests = await getAllRequests();
    let count = requests.length;
    console.log('requests currently: ' + count);
    console.log('request desired: ' + Number(count - 1));

    //need to get last request
    //const request = await browser.getRequest(1); //this is only true in a specific case
    const request = await browser.getRequest(Number(count - 1));

    //console.log(request.method);
    //console.log(request.url);
    //console.log(request.body);

    let evtId = Number(code);
    console.log("evtId: " + evtId);
    let arg = args;
    console.log("arg: " + arg);

    //do the JSON dance

    const data = JSON.stringify(request.body, null, 2);
    //console.log(data);
    const dataJson = JSON.parse(data);
    //console.log(dataJson);

    //console.log(dataJson.Evts);
    const evts = dataJson.Evts;

    assert(await checkEventCode(evts, evtId, arg));

    
};
