import { DateTime } from "luxon";

export interface UPWCPrices {
    jetskiPackage: {
        firstTierPrice: number;
        secondTierPrice: number;
        thirdTierPrice: number;
        max: number;
        [key: string]: number;
    },
    kidsWaterSkis: UPWCAdditionalProductPriceTypes;
    boatingTube: UPWCAdditionalProductPriceTypes;
    trailerHitch: UPWCAdditionalProductPriceTypes;
    trailerLightsAndPlug: UPWCAdditionalProductPriceTypes;
}

export type UPWCAdditionalProductPriceTypes = {
    price: number;
    max: number;
    [key: string]: number;
}
export type UPWCProductNames =
	| 'jetskiPackage'
	| 'kidsWaterSkis'
	| 'boatingTube'
	| 'trailerHitch'
	| 'trailerLightsAndPlug'

export interface UPWCProductCount {
	jetskiPackage: number;
	kidsWaterSkis: number;
    boatingTube: number;
    trailerHitch: number;
    trailerLightsAndPlug: number;
	[key: string]: number;
}
export interface UPWCProduct {
	name: UPWCProductNames;
	total: number;
}
export interface UPWCReceipt {
	total: number;
	diff: number; 
	days: DateTime[];
	discount: number;
}
export interface UPWCPricesContext {
    prices: UPWCPrices;
    spinning: boolean;
}

export interface UPWCPaymentIntentRequest {
    productCount: UPWCProductCount;
    dates: [string, string];
}