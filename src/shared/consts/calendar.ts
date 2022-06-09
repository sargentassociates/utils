import { CalendarAPIContext } from "../types/calendar";
import dayjs from '../dayjs';

export const initialCalendarContext: CalendarAPIContext = {
	spinning: true,
	events: [],
	months: {},
};

export const oneWeekFromToday = dayjs().add(7, 'day');
export const oneWeekFormatted = oneWeekFromToday.format('YYYY-MM-DD');