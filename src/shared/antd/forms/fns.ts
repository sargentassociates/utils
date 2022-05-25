/* eslint-disable @typescript-eslint/no-explicit-any */

export const getConfirmPswRules = (confirmMsg?: string, failureMsg?: string) => {
	return [
		{
			required: true,
			message: confirmMsg || 'Please confirm your password!',
		},
		({ getFieldValue }: any) => ({
			validator(_: any, value: any) {
				if (!value || getFieldValue('password') === value) {
					return Promise.resolve();
				}
				return Promise.reject(new Error(failureMsg || "Passwords don't match!"));
			},
		}),
	];
};

export const getRequiredField = (field: string, msg?: string) => {
	return [
		{
			required: true,
			message: msg ? msg : `Please enter a ${field}.`,
		},
	];
};