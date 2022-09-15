export type YesNo = 'yes' | 'no';
export type YesNoError = YesNo | 'error';
export type EmptyString = '';
export interface SSIndex {
    [key: string]: string
}