import { Action } from '@reduxjs/toolkit';
import { Schedule } from '@truckup/interfaces';

export interface ScheduleStateInterface {
  isInvalidSelectedSchedule: boolean;
  selectedDay: string | null;
  selectedStartTime: string;
  selectedEndTime: string;
  schedule: Schedule[];
}

export interface ScheduleActionTypes {
  CLEAR_SCHEDULE: string;
  ADD_SCHEDULE: string;
  SELECT_DAY: string;
  SELECT_END_TIME: string;
  SELECT_START_TIME: string;
}

export interface ScheduleAction {
  clearSchedule(): Action;
  addSchedule(): Action;
  selectDay(selectedDay: string): Action;
  selectStartTime(selectedStartTime: string): Action;
  selectEndTime(selectedEndTime: string): Action;
}
