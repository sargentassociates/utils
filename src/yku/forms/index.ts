import { EmptyString } from "../../shared";

export type YKUSettingsInfoTypes = 'name' | 'password' | 'username' | EmptyString;

export type YKUSettingsFields = {
    [key in YKUSettingsInfoTypes]: string
}

export interface YKUSettingsModalInfo {
    visible: boolean;
    loading: boolean;
    value: string;
    type: YKUSettingsInfoTypes
}

export const initialModalInfo: YKUSettingsModalInfo = {
	visible: false,
	loading: false,
	value: '',
	type: '',
};

