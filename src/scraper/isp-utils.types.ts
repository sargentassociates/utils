import { AddressKeys } from './types';

export interface ISPs {
    userAgent: string;
    att: ISPObject;
    spectrum: ISPObject;
    frontier: ISPObject;
}

export interface ISPSelectors extends AddressKeys {
    submit: string;
    suggestion?: string;
}
export interface ISPObject {
    link: string;
    selectors: ISPSelectors;
}