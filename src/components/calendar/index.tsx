import { CalendarList } from "react-native-calendars";
import { useTheme } from "../../theme";
import moment from "moment";
import React, { useState } from "react";
import { LayoutAnimation } from "react-native";
import { weekCountInMonth } from "../../util/formatDate";
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
        pagingEnabled
        markingType="custom"
        onMonthChange={({ year, month }) => {
          updateCalendarHeight(year, month);
        }}
        style={{ height: DEFAULT_CALENDAR_SIZE }}
        calendarHeight={DEFAULT_CALENDAR_SIZE}
        pastScrollRange={0}
        theme={themeBuilder(theme)}
        minDate={moment().format("YYYY-MM-DD")}
        onDayPress={({ dateString }) => onDayPress(dateString)}
        markedDates={formatScheduleToMarkedDays(scheduleDays, theme)}
        showWeekNumbers={false}
      />
      <TimeZoneFooter calendarHeight={calendarHeight} />
    </>
  );
};
