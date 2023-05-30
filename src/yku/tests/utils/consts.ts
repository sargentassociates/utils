import { YKUProducts, YKUPrices } from "../../types";

const zeros: YKUProducts = {
    kayakPackage: 0,
    paddleboardPackage: 0,
    tenFootPaddleboards: 0,
    eightFootKayaks: 0,
    kidsKayaks: 0,
    inflatablePaddleboards: 0
}
export const kayakPackage: YKUProducts = {
    ...zeros,
    kayakPackage: 1,
}
export const paddleboardPackage: YKUProducts = {
    ...zeros,
    paddleboardPackage: 1,
}
export const mixtureOne: YKUProducts = {
    ...zeros,
    eightFootKayaks: 2,
    kidsKayaks: 1
}
export const mixtureTwo: YKUProducts = {
    ...zeros,
	eightFootKayaks: 4,
    tenFootPaddleboards: 2,
    inflatablePaddleboards: 2
}