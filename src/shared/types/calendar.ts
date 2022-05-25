import { calendar_v3 } from 'googleapis';

export interface EventObject {
	day: number;
	description: string;
	summary: string;
	month: number;
}
export interface YearEvents {
	1?: EventObject[];
	2?: EventObject[];
	3?: EventObject[];
	4?: EventObject[];
	5?: EventObject[];
	6?: EventObject[];
	7?: EventObject[];
	8?: EventObject[];
	9?: EventObject[];
	10?: EventObject[];
	11?: EventObject[];
	12?: EventObject[];
	[key: string]: EventObject[];
}

export interface CalendarAPIContext {
	spinning: boolean;
	events: calendar_v3.Schema$Event[];
	months: YearEvents;
}