/**
 * Perform an click action on the given element
 * @param  {object}   events   All events object
 * @param  {object}   code   The value 
 * @param  {number}   args   The value
 */
 export default async (events: any, code: number, args: string) => {

    let evts = events;
    let arg = args;
    let eventCode = code;

    for (let event of events) {
        //console.log(event);
        if (event.Kind === eventCode && event.Args.toString().includes(args)) {  //this is super simple and should be expanded for additional values and timestamps
            console.log("event found");
            return true;
        } else if (event.Kind === eventCode) {
            //console.log("event but event not found");
        }

    }
    return false;
    
};
