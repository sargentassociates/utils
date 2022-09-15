import { responseURLs } from "../index";

export const getAddressStatusFromUrl = (originalUrl: string, url: string) => {
    if (originalUrl === url) {
        return `STALLED – DID NOT LEAVE PAGE. BAD ADDRESS?`
    } 
    let isFound = '';
    responseURLs.available.forEach(successUrl => {
        if (url.includes(successUrl)) {
            isFound = `YES - ${url}`;
        }
    });
    if (isFound) return isFound;
    responseURLs.unavailable.forEach(failureUrl => {
        if (url.includes(failureUrl)) {
            isFound = `NO - ${url}`; 
        }
    })
    if (isFound) return isFound;
    
    return `UNKNOWN - ${url}`;
}