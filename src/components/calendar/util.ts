import moment from "moment";
import { Theme } from "@truckup/theme";

export const formatScheduleToMarkedDays = (scheduleDays: string[], theme: Theme) => {
    const todayFormat = moment().format('YYYY-MM-DD')
    const hasScheduleToday = scheduleDays.find(a => a == todayFormat)

    const formattedSchedules = scheduleDays.reduce((acc: any, date: string) => {
        acc[date] = {
            selected: true,
            customStyles: {
                container: {
                    backgroundColor: theme.colors.primary,
                    width: 29,
                    height: 29,
                    lineHeight: 20
                },
            },
        };
        return acc;
    }, {} as Record<string, any>);
    if (!hasScheduleToday)
        return {
            ...formattedSchedules, [todayFormat]: {
                selected: true,
                customStyles: {
                    container: {
                        backgroundColor: theme.colors.danger,
                        width: 29,
                        height: 29,
                        alignItems: "center"
                    },
                    text: {
                        color: theme.colors.onSurface,
                        lineHeight: 20
                    }
                },
            }
        }
    return formattedSchedules
}


export const themeBuilder = ({ colors }: Theme) => ({
    backgroundColor: colors.surface,
    calendarBackground: colors.surface,
    selectedDayBackgroundColor: colors.primary,
    dayTextColor: colors.onSurface,
    monthTextColor: colors.onSurface,
    textDayFontFamily: "Lazzer-SemiBold",
    textMonthFontFamily: "Lazzer-SemiBold",
    textDayFontSize: 16,
    textMonthFontSize: 16,
    dotStyle: { height: 0 },
    textDisabledColor: colors.neutral600,
    arrowColor: "white",
    "stylesheet.calendar.main": {
        text: {
            color: "red",
        },
    },
    "stylesheet.calendar.header": {
        week: {
            height: 0,
        },
    },
})