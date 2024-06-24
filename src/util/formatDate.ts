import moment from 'moment';

export const formatDate = (dateString: string): string => {
    const parsedDate = moment(dateString, 'YYYY-MM-DD');
    return parsedDate.format('MMM DD, YYYY');
};

export const isTimeAGreaterThanTimeB = (timeA: string, timeB: string) => {
    const format = 'HH:mm';
    const momentA = moment(timeA, format);
    const momentB = moment(timeB, format);

    return momentA.isAfter(momentB);
}

export const weekCountInMonth = (year: number, month: number) => {
    const firstOfMonth = new Date(year, month - 1, 1);
    const lastOfMonth = new Date(year, month, 0);

    const numberOfDaysInMonth = lastOfMonth.getDate();
    const firstWeekDay = firstOfMonth.getDay();
    let startDayOfWeek = 0;

    if (firstWeekDay !== 0) {
        startDayOfWeek = 7 - firstWeekDay;
    }

    const used = firstWeekDay + numberOfDaysInMonth;
    return Math.ceil(used / 7);
}