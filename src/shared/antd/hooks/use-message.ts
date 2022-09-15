import { message } from 'antd';

export const useMessage = () => {
	const success = (msg: string) => {
		message.success(msg);
	};
	const warning = (msg: string) => {
		message.warning(msg);
	};
	const error = (msg: string) => {
		message.error(msg);
	};

	return { success, error, warning };
};
