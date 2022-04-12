export type YKUProductNames =
	| 'kayakPackage'
	| 'paddleboardPackage'
	| 'kidsKayaks'
	| 'tenFootPaddleboards'
	| 'eightFootKayaks'
	| 'inflatablePaddleboards';

export interface YKUProducts {
	kayakPackage: number;
	paddleboardPackage: number;
	kidsKayaks: number;
	tenFootPaddleboards: number;
	eightFootKayaks: number;
	inflatablePaddleboards: number;
}
export interface YKUPriceTypes {
	weekday: number;
	weekend: number;
	max: number;
}
export interface YKUPrices {
	kayakPackage: YKUPriceTypes;
	paddleboardPackage: YKUPriceTypes;
	eightFootKayaks: YKUPriceTypes;
	kidsKayaks: YKUPriceTypes;
	tenFootPaddleboards: YKUPriceTypes;
	inflatablePaddleboards: YKUPriceTypes;
}