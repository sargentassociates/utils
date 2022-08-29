import { responseURLs } from "../index";

export const getAddressStatusFromUrl = (url: string) => {
    let isFound = '';
    responseURLs.available.forEach(successUrl => {
        console.log(successUrl);
        if (url.includes(successUrl)) {
            isFound = `YES - ${url}`;
        }
    });
    if (isFound) return isFound;
    responseURLs.unavailable.forEach(failureUrl => {
        console.log(failureUrl);
        if (url.includes(failureUrl)) {
            isFound = `NO - ${url}`; 
        }
    })
    if (isFound) return isFound;
    
    return `ERROR - ${url}`;
}