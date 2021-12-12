const assert = require('assert')
const callTimeout = 8000;
import { getAllRequests } from "../lib/requestInterceptor";
/**
 * Perform an click action on the given element
 * @param  {object}   events   The value 
 * @param  {object}   code   The value 
 * @param  {number}   args   The value
 */
export default async (events: any, code: number, args: string) => {

    let evts = events;
    let arg = args;
    let eventCode = code;

    for (let event of events) {
        //let evt = events.find((el: { Kind: number; }) => el.Kind === 48);
        
        //console.log(event);
        if (event.Kind === eventCode && event.Args.toString().includes(args)) {
            console.log("event found");
            //assert(event.Args.toString().includes(args));
            return true;
        } else if (event.Kind === 48) {
            //console.log("event48 but event not found");
        }

    }
    return false;
    
};
