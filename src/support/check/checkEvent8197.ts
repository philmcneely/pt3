const assert = require('assert')
const callTimeout = 8000;
import { getAllRequests } from "../lib/requestInterceptor";
/**
 * Perform an click action on the given element
 * @param  {object}   events   The value 
 */
export default async (events: any) => {

    //market is 0, the first one after click shoudl have our events
    //const request = await browser.getRequest(1);
    //console.log(request.method);
    //console.log(request.url);
    //console.log(request.body);

    let evts = events;
    //console.log(request.url);


    //const data = JSON.stringify(request.body, null, 2);
    //console.log(data);
    //const dataJson = JSON.parse(data);
    //console.log(dataJson);

    //const evts = dataJson.Evts;
    //console.log(evts);
    let evt = evts.find((el: { Kind: number; }) => el.Kind === 8197);
    console.log(evt.Args);

    assert(evt.Args.includes("Product Added"))

    //console.log(evts.results.find((evt: { Kind: number; }) => evt.Kind === 8197));

        

        //assert(data.includes('"Kind": 8197,"Args": ["Product Added","{\"description_str\":\"Highly experimental new fewt.\",\"displayName_str\":\"Mangocados\",\"featuredFruit_real\":1,\"imgName_str\":\"mangocados\",\"price_str\":\"7.99\",\"unit_str\":\"ea\",\"id_str\":\"mangocados\",\"$priority\":null,\"hashKey_str\":\"object:5\",\"product_id_str\":\"7317a3wya\"}"]'), "add fruit");
        //assert(data.includes('"Kind": 8197'), "add fruit");
        //assert(data.includes('{"Kind": 48,"Args": ["logz","\"'+fruitValue+' embiggen user cart.\""],'));
        //assert(data.includes('{"Kind": 48,"Args": ["log","\"USER is going to /market\""],'), "page change");
        //assert(data.includes('{"Kind": 37,"Args": ["https://fruitshoppe.firebaseapp.com/#/market"],'), "page change");
        //assert(data.includes('"appAlertMessage success",[18,2]," Mangocados added to your cart. ",'), "add to cart");

    
};
