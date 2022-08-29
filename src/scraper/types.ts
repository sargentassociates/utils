import { ObjectId } from "mongodb";
import { YesNoError } from "../shared";

export type SupportedISPs = 'spectrum' | 'frontier' | 'att';

export interface AddressKeys {
    address: string;
    aptUnit: string;
    city: string;
    state: string;
    zip: string;
}
export interface ScraperAddressFile extends AddressKeys {
    key: string;
    att?: YesNoError | string;
    spectrum?: YesNoError | string;
    frontier?: YesNoError | string;
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