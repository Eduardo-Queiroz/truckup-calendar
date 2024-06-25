import { createActions, createReducer } from 'reduxsauce';
import { ScheduleAction, ScheduleActionTypes, ScheduleStateInterface } from './types';
import { isTimeAGreaterThanTimeB } from '../../../utils/helpers/formatDate';

export const INITIAL_SCHEDULE_TIME = "6:00"
export const FINAL_SCHEDULE_TIME = "20:00"

const ScheduleState: ScheduleStateInterface = {
  selectedDay: null,
  selectedStartTime: INITIAL_SCHEDULE_TIME,
  selectedEndTime: FINAL_SCHEDULE_TIME,
  isInvalidSelectedSchedule: false,
  schedule: [],
};

export const { Types, Creators: Actions } = createActions<
  ScheduleActionTypes,
  ScheduleAction
>({
  clearSchedule: [],
  addSchedule: [],
  selectDay: ['selectedDay'],
  selectStartTime: ['selectedStartTime'],
  selectEndTime: ['selectedEndTime'],
});


const clearSchedule = (state: ScheduleStateInterface, { selectedDay }: { selectedDay: string }) =>
  <ScheduleStateInterface>{
    ...state,
    selectedDay: null,
    selectedStartTime: INITIAL_SCHEDULE_TIME,
    selectedEndTime: FINAL_SCHEDULE_TIME,
    isInvalidSelectedSchedule: false,
  };

const selectDay = (state: ScheduleStateInterface, { selectedDay }: { selectedDay: string }) => {
  const scheduleSaved = state.schedule.find(a => a.day == selectedDay)
  return <ScheduleStateInterface>{
    ...state,
    selectedDay,
    selectedStartTime: scheduleSaved?.start || INITIAL_SCHEDULE_TIME,
    selectedEndTime: scheduleSaved?.end || FINAL_SCHEDULE_TIME,
  };
}

const selectStartTime = (state: ScheduleStateInterface, { selectedStartTime }: { selectedStartTime: string }) =>
  <ScheduleStateInterface>{
    ...state,
    selectedStartTime,
    isInvalidSelectedSchedule: state.selectedEndTime && isTimeAGreaterThanTimeB(selectedStartTime, state.selectedEndTime)
  };

const selectEndTime = (state: ScheduleStateInterface, { selectedEndTime }: { selectedEndTime: string }) =>
  <ScheduleStateInterface>{
    ...state,
    selectedEndTime,
    isInvalidSelectedSchedule: state.selectedStartTime && isTimeAGreaterThanTimeB(state.selectedStartTime, selectedEndTime)
  };

const addSchedule = (state: ScheduleStateInterface) => {
  const scheduleSaved = state.schedule.find(a => a.day == state.selectedDay)
  const newSchedule = {
    day: state.selectedDay,
    start: state.selectedStartTime,
    end: state.selectedEndTime,
  }

  const newScheduleList = !!scheduleSaved
    ? state.schedule.map(item => item.day === state.selectedDay ? newSchedule : item)
    : [...state.schedule, newSchedule];

  return <ScheduleStateInterface>{
    ...state,
    selectedDay: null,
    selectedStartTime: INITIAL_SCHEDULE_TIME,
    selectedEndTime: FINAL_SCHEDULE_TIME,
    schedule: newScheduleList
  };
}

export const HANDLERS = {
  [Types.CLEAR_SCHEDULE]: clearSchedule,
  [Types.ADD_SCHEDULE]: addSchedule,
  [Types.SELECT_DAY]: selectDay,
  [Types.SELECT_START_TIME]: selectStartTime,
  [Types.SELECT_END_TIME]: selectEndTime,
};

export const Reducer = createReducer(ScheduleState, HANDLERS);
