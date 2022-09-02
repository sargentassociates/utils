import { responseURLs } from "../index";

export const getAddressStatusFromUrl = (url: string) => {
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