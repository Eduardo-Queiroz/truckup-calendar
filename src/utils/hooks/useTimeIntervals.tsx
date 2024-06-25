import { useCallback, useEffect, useMemo } from 'react';

type TimeInterval = {
    formattedTime: string;
    period: string;
    rawTime: string
};


const pad = (num: number): string => num.toString().padStart(2, '0');

const generateTimeIntervals = (): TimeInterval[] => {
    const intervals: TimeInterval[] = [];
    for (let hour = 0; hour < 24; hour++) {
        for (let minutes = 0; minutes < 60; minutes += 15) {
            const period = hour < 12 ? 'am' : 'pm';
            const displayHour = hour % 12 === 0 ? 12 : hour % 12;
            const formattedTime = `${displayHour}:${pad(minutes)}`;
            const rawTime = `${hour}:${pad(minutes)}`;
            intervals.push({ formattedTime, period, rawTime });
        }
    }
    intervals.push({ formattedTime: "11:59", period: "pm", rawTime: "23:59" })
    return intervals;
};


export const useTimeIntervals = (initial: string) => {
    const intervals = useMemo(generateTimeIntervals, []);

    const initialIndex = intervals.findIndex(a => a.rawTime == initial)
    return { intervals, initialIndex };
};