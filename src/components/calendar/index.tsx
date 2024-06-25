import { CalendarList, DateData } from "react-native-calendars";
import { useTheme } from "@truckup/theme";
import moment from "moment";
import React, { useState } from "react";
import { LayoutAnimation } from "react-native";
import { weekCountInMonth } from "@truckup/utils";
import { WeekHeader } from "./WeekHeader";
import { formatScheduleToMarkedDays, themeBuilder } from "./util";
import { TimeZoneFooter } from "./TimeZoneFooter";

const DEFAULT_CALENDAR_SIZE = 330;

type CalendarProps = {
  onDayPress: (daySelected: string) => void;
  scheduleDays: string[];
};

export const Calendar = ({ onDayPress, scheduleDays }: CalendarProps) => {
  const theme = useTheme();
  const [calendarHeight, setCalendarHeight] = useState(DEFAULT_CALENDAR_SIZE);

  const updateCalendarHeight = (year: number, month: number) => {
    const weeks = weekCountInMonth(year, month);
    const newHeight = weeks * 55;

    LayoutAnimation.linear();
    setCalendarHeight(newHeight);
  };

  return (
    <>
      <WeekHeader />
      <CalendarList
        key={theme.colorScheme}
        pagingEnabled
        markingType="custom"
        onVisibleMonthsChange={(months: DateData[]) => {
          if (months.length == 1)
            updateCalendarHeight(months[0].year, months[0].month);
        }}
        style={{ height: DEFAULT_CALENDAR_SIZE }}
        calendarHeight={DEFAULT_CALENDAR_SIZE}
        pastScrollRange={0}
        theme={themeBuilder(theme)}
        minDate={moment().format("YYYY-MM-DD")}
        onDayPress={({ dateString }: DateData) => onDayPress(dateString)}
        markedDates={formatScheduleToMarkedDays(scheduleDays, theme)}
        showWeekNumbers={false}
      />
      <TimeZoneFooter calendarHeight={calendarHeight} />
    </>
  );
};
