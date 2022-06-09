import { Dayjs } from "dayjs";
import { getDatesBetweenTwoDates } from "../shared";
import { UPWCPrices, UPWCProductCount, UPWCProductNames, UPWCReceipt } from "./types"


export const UPWC_getJetskiPrice = (days: number, prices: UPWCPrices) => {
    if (days < 0) {
        return 0;
    } else if (days < 4) {
        return prices.jetskiPackage.firstTierPrice;
    } else if (days < 6) {
        return prices.jetskiPackage.secondTierPrice;
    } else {
        return prices.jetskiPackage.thirdTierPrice;
    }

}
export const UPWC_getPrices = (productCount: UPWCProductCount, prices: UPWCPrices, dates: [Dayjs, Dayjs]) => {
	const priceObject: UPWCReceipt = {
        total: 0,
        diff: 0,
        days: [],
        discount: 0
    };

    const days = getDatesBetweenTwoDates(dates);
    const price = UPWC_getJetskiPrice(days.length, prices);

    if (dates[0] && dates[1]) {
        priceObject.days = days;
        for (let i = 0; i < days.length; i++) {
            priceObject.total += price;
        }
        
        for(let key in productCount) {
            if (key !== 'jetskiPackage') {
                productCount[key] ? priceObject.total += prices[key].price : null;
            }
        }
        
        return priceObject;
    } 
};

export const UPWC_getLegibleNames = (name: UPWCProductNames) => {
    switch (name) {
        case 'jetskiPackage':
            return 'Jetski Package';
        case 'boatingTube':
            return 'Boating Tube';
        case 'kidsWaterSkis':
            return 'Kids Water Skis';
        case 'trailerHitch':
            return 'Trailer Hitch';
        case 'trailerLightsAndPlug':
            return 'Trailer Light/Plug';
    }
}