import { Box, Text } from "../../../elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { TimeBottomSheet } from "../container/time-bottomsheet";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../../store/reducers/schedule";
import { StatusBar } from "expo-status-bar";
import { Calendar } from "../../../components";
import { StateInterface } from "../../../store/reducers/types";
import { Schedule } from "../../../interfaces/Schedule";

import { useMemo, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";

const { selectDay } = Actions;
export const InitialScreen = () => {
  const dispatch = useDispatch();
  const stateScheduleDays = useSelector(
    ({ schedule }: StateInterface) => schedule.schedule
  );
  const scheduleDays = useMemo(
    () => stateScheduleDays.map((a: Schedule) => a.day),
    [stateScheduleDays]
  );

  return (
    <Box backgroundColor="surface" flex={1}>
      <StatusBar style="light" />
      <SafeAreaView>
        <Box alignItems="center" paddingVertical="l">
          <Text variant="title">Availability</Text>
        </Box>
        <Box marginTop="m">
          <Calendar
            scheduleDays={scheduleDays}
            onDayPress={(day: string) => {
              dispatch(selectDay(day));
            }}
          />
        </Box>
      </SafeAreaView>
      <TimeBottomSheet />
    </Box>
  );
};
