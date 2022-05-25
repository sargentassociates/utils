import { UPWCPrices, UPWCProductCount } from '../../types';

export const prices: UPWCPrices = {
	jetskiPackage: {
		firstTierPrice: 399,
		secondTierPrice: 350,
		thirdTierPrice: 325,
		max: 1,
	},
	kidsWaterSkis: {
		price: 50,
		max: 1,
	},
	boatingTube: {
		price: 50,
		max: 1,
	},
	trailerHitch: {
		price: 20,
		max: 1,
	},
	trailerLightsAndPlug: {
		price: 15,
		max: 1,
	},
};

export const packageOne: UPWCProductCount = {
    jetskiPackage: 1,
    kidsWaterSkis: 0,
    boatingTube: 0,
    trailerHitch: 0,
    trailerLightsAndPlug: 0
}
export const packageTwo: UPWCProductCount = {
    jetskiPackage: 1,
    kidsWaterSkis: 0,
    boatingTube: 0,
    trailerHitch: 1,
    trailerLightsAndPlug: 1
}
export const packageThree: UPWCProductCount = {
    jetskiPackage: 1,
    kidsWaterSkis: 1,
    boatingTube: 1,
    trailerHitch: 1,
    trailerLightsAndPlug: 1
}
export const packageFour: UPWCProductCount = {
    jetskiPackage: 1,
    kidsWaterSkis: 1,
    boatingTube: 1,
    trailerHitch: 0,
    trailerLightsAndPlug: 0
}
