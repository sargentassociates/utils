import { ObjectId } from "mongodb";
import { YesNoError } from "../shared";

export type SupportedISPs = 'spectrum' | 'frontier' | 'att';

export interface AddressKeys {
    street: string;
    aptUnit: string;
    city: string;
    state: string;
    zip: string;
}
export interface ScraperAddressFile extends AddressKeys {
    key: string;
    att?: string;
    spectrum?: string;
    frontier?: string;
}

export interface RawScraperAddressFile {
    Address: string;
    ['Apt/Unit']: string;
    City: string;
    State: string;
    Zip: number;
    Frontier?: string;
    Spectrum?: string;
    ['AT&T']?: string;
}

export interface ScraperFileDocument {
    _id: ObjectId,
    fileName: string;
    dateUploaded: string;
    fileAddressInfo: ScraperAddressFile[];
    processing: boolean;
}

export interface ResponseUrls {
    available: string[],
    unavailable: string[]
}

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

export interface ScraperClusterType {
    isp: SupportedISPs;
    address: ScraperAddressFile;
    index: number;
}

export interface ScraperEnvVariables {
    SERVER_PORT: string;
    CONNECTION_STRING: string;
    TESTING: string;
    HEADLESS: string;
    MAX_CONCURRENCY: string;
}