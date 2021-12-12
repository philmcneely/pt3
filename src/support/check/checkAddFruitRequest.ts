const assert = require('assert')
const callTimeout = 8000;
import { getAllRequests } from "../lib/requestInterceptor";
/**
 * Perform an click action on the given element
 * @param  {String}   value   The value 
 */
export default async (value: string) => {

/*     let requests = await getAllRequests();
    console.log('requests currentlyXXX: ' + requests.length);
    let fruitValue = value;

    for (let request of requests) {
        console.log(request.url);
        //console.log(request.body);

        const data = JSON.stringify(request.body, null, 2);
        console.log(data);

        //assert.deepEqual(data, '"Kind": 8197,"Args": ["Product Added","{\"description_str\":\"Highly experimental new fewt.\",\"displayName_str\":\"Mangocados\",\"featuredFruit_real\":1,\"imgName_str\":\"mangocados\",\"price_str\":\"7.99\",\"unit_str\":\"ea\",\"id_str\":\"mangocados\",\"$priority\":null,\"hashKey_str\":\"object:5\",\"product_id_str\":\"7317a3wya\"}"]');
        //assert.deepEqual( request.body, '58: {When: 390256, Kind: 8197, Args: ["Product Added",…]}', "result object" );
        
        //assert(data.includes('"Kind": 8197,"Args": ["Product Added","{\"description_str\":\"Highly experimental new fewt.\",\"displayName_str\":\"Mangocados\",\"featuredFruit_real\":1,\"imgName_str\":\"mangocados\",\"price_str\":\"7.99\",\"unit_str\":\"ea\",\"id_str\":\"mangocados\",\"$priority\":null,\"hashKey_str\":\"object:5\",\"product_id_str\":\"7317a3wya\"}"]'), "add fruit");
        assert(data.includes('"Kind": 8197,"Args": ["Product Added"'), "add fruit");
        //assert(data.includes('{"Kind": 48,"Args": ["logz","\"'+fruitValue+' embiggen user cart.\""],'));
        assert(data.includes('{"Kind": 48,"Args": ["log","\"USER is going to /market\""],'), "page change");
        assert(data.includes('{"Kind": 37,"Args": ["https://fruitshoppe.firebaseapp.com/#/market"],'), "page change");
        assert(data.includes('"appAlertMessage success",[18,2]," Mangocados added to your cart. ",'), "add to cart");




    } */

    
};
