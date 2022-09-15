export const tryFn = (fn: Function, errorType: string) => {
	try {
        console.log('trying', errorType);
		return fn();
	} catch (err) {
		console.log(errorType, 'error: ----------------------------------------');
		console.log(err);
	}
}; 