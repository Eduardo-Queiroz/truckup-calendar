import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { Box, Text } from "@truckup/elements";
import { Button } from "@truckup/components";
import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TimeScrollPicker } from "../time-scroll-picker";
import { StateInterface } from "@truckup/store/reducers/types";
import { Actions } from "@truckup/store/reducers/schedule";
import { WarningMessage } from "./WarningMessage";
import { TimeBottomSheetHeader } from "./TimeBottomSheetHeader";

const { clearSchedule, selectEndTime, selectStartTime, addSchedule } = Actions;

export const TimeBottomSheet = () => {
  const dispatch = useDispatch();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const selectedDay = useSelector(
    ({ schedule }: StateInterface) => schedule.selectedDay
  );

  const selectedStartTime = useSelector(
    ({ schedule }: StateInterface) => schedule.selectedStartTime
  );

  const selectedEndTime = useSelector(
    ({ schedule }: StateInterface) => schedule.selectedEndTime
  );

  const isInvalidSelectedSchedule = useSelector(
    ({ schedule }: StateInterface) => schedule.isInvalidSelectedSchedule
  );

  useEffect(() => {
    if (!!selectedDay) bottomSheetRef.current?.snapToIndex(0);
  }, [selectedDay]);

  const memoizedBackdrop = useMemo(
    () => (props: BottomSheetBackdropProps) =>
      (
        <BottomSheetBackdrop
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          {...props}
        />
      ),
    []
  );
  return (
    <BottomSheet
      enablePanDownToClose
      ref={bottomSheetRef}
      index={-1}
      snapPoints={["62%"]}
      handleComponent={null}
      onClose={() => {
        dispatch(clearSchedule());
      }}
      backdropComponent={memoizedBackdrop}
      backgroundStyle={{ opacity: 0 }}
    >
      <Box flex={1} justifyContent="flex-end">
        <Box backgroundColor="surfaceVariant">
          <TimeBottomSheetHeader
            selectedDay={selectedDay}
            onClose={() => bottomSheetRef.current?.close()}
          />
          <Box padding="l">
            <Text variant="label">Start work at</Text>
          </Box>
          <Box paddingBottom="xxl">
            <TimeScrollPicker
              initial={selectedStartTime}
              isOpened={!!selectedDay}
              onSelect={(value) => {
                dispatch(selectStartTime(value));
              }}
            />
          </Box>

          <Box padding="l" paddingTop="l">
            <Text variant="label">End work by</Text>
          </Box>

          <Box paddingBottom="xxl">
            <TimeScrollPicker
              initial={selectedEndTime}
              isOpened={!!selectedDay}
              onSelect={(value) => {
                dispatch(selectEndTime(value));
              }}
            />
          </Box>

          <WarningMessage isVisible={isInvalidSelectedSchedule} />

          <Box
            alignItems="center"
            paddingVertical="xl"
            borderTopWidth={1}
            borderColor="neutral800"
          >
            <Button
              onPress={() => {
                bottomSheetRef.current?.close();
                dispatch(addSchedule());
              }}
              variant="primary"
              disabled={isInvalidSelectedSchedule}
              text="Set time"
            />
          </Box>
        </Box>
      </Box>
    </BottomSheet>
  );
};
