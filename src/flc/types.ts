export type FormSection = 'comment' | 'firstName' | 'lastName' | 'email';

export type SupportState = {
	[key in FormSection]: string;
}

export type SupportStateValid = {
	[key in FormSection]: boolean;
}