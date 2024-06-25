import { useMemo } from "react";
import { Box, Text } from "@truckup/elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { TimeBottomSheet } from "../container/time-bottomsheet";
import { useDispatch, useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { Calendar, ColorSchemeButton } from "@truckup/components";
import { Actions } from "@truckup/store/reducers/schedule";
import { StateInterface } from "@truckup/store/reducers/types";
import { Schedule } from "@truckup/interfaces";

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
        <Box
          alignItems="center"
          paddingVertical="m"
          paddingHorizontal="l"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box width={35} />
          <Text variant="title">Availability</Text>
          <Box width={35} />
          {/* <ColorSchemeButton /> */}
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
