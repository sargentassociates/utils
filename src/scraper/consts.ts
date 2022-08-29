import { ResponseUrls } from "..";
import { ISPs } from "./isp-utils.types"

const submitButton = 'button[type="submit"]';
const getPlaceholder = (placeholder: string) => {
    return `input[placeholder="${placeholder}"]`
};

const getId = (id: string) => `#${id}`;

const getClass = (className: string) => `.${className}`;

export const ISPUtils: ISPs = {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4182.0 Safari/537.36',
    att: {
        link: 'https://www.att.com/buy/broadband/availability.html',
        selectors: {
            address: getId('address1-desktop'),
            aptUnit: '',
            zip: getPlaceholder('Zip Code'),
            state: '',
            city: '',
            submit: '',
        }
    },
    spectrum: {
        link: 'https://www.spectrum.com',
        selectors: {
            address: getId('address1-desktop'),
            aptUnit: '',
            zip: getId('zip-desktop'),
            state: '',
            city: '',
            submit: submitButton
        }
    },
    frontier: {
        link: 'https://frontier.com/buy',
        selectors: {
            address: getId('street-address'),
            aptUnit: '',
            zip: '',
            state: '',
            city: '',
            submit: getClass('address-form__button'),
            suggestion: getId('react-select-2-option-0')
        }
    }
}

export const responseURLs: ResponseUrls = {
    available: [
        'https://www.spectrum.com/buy/featured', 
        'https://www.spectrum.com/address/multiple-unit', 
        'https://frontier.com/buy/plan-package/'
    ],
    unavailable: [
        'https://www.spectrum.com/address/house-not-found', 
        'https://www.spectrum.com/address/out-of-footprint',
        'https://frontier.com/buy/unserviceable-allconnect/'
    ]
}