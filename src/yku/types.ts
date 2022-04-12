export type ProductNames =
	| 'kayakPackage'
	| 'paddleboardPackage'
	| 'kidsKayaks'
	| 'tenFootPaddleboards'
	| 'eightFootKayaks'
	| 'inflatablePaddleboards';

export interface Products {
	kayakPackage: number;
	paddleboardPackage: number;
	kidsKayaks: number;
	tenFootPaddleboards: number;
	eightFootKayaks: number;
	inflatablePaddleboards: number;
}
export interface PriceTypes {
	weekday: number;
	weekend: number;
	max: number;
}
export interface Prices {
	kayakPackage: PriceTypes;
	paddleboardPackage: PriceTypes;
	eightFootKayaks: PriceTypes;
	kidsKayaks: PriceTypes;
	tenFootPaddleboards: PriceTypes;
	inflatablePaddleboards: PriceTypes;
}