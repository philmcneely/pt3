
// Get all captured requests as an array.
// Returns array of request objects.

export function interceptAPICalls(){
    browser.setupInterceptor();
}

export function waitUntilInterceptIsMade(timeout: number | undefined){
    browser.pause(timeout);
}

// Get all captured requests as an array.
export function getAllRequests(){
    return browser.getRequests();
}