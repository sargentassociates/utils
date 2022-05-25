import { UPWCAdditionalProductPriceTypes, UPWCPrices, UPWCPricesContext, UPWCProductCount } from "./types";

export const UPWC_initialProductCount: UPWCProductCount = {
	jetskiPackage: 1,
    kidsWaterSkis: 0,
    boatingTube: 0,
    trailerHitch: 0,
    trailerLightsAndPlug: 0
};

const UPWC_initialContextPrices: UPWCAdditionalProductPriceTypes = {
    price: 0,
	max: 0,
};
const initialProducts: UPWCPrices = {
    jetskiPackage: {
        firstTierPrice: 0,
        secondTierPrice: 0,
        thirdTierPrice: 0,
        max: 0
    },
	kidsWaterSkis: UPWC_initialContextPrices,
    boatingTube: UPWC_initialContextPrices,
    trailerHitch: UPWC_initialContextPrices,
    trailerLightsAndPlug: UPWC_initialContextPrices
};
export const UPWC_initialPricesContext: UPWCPricesContext = {
    prices: initialProducts,
    spinning: false,
};