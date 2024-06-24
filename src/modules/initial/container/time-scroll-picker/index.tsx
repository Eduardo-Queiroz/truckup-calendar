import { useEffect } from "react";
import {
  HorizontalScrollPicker,
  HorizontalScrollPickerItemProps,
} from "../../../../components/horizontal-scroll-picker";
import { Box, Text } from "../../../../elements";
import { useTimeIntervals } from "../../../../util/hooks/useTimeIntervals";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TimeItem } from "./TimeItem";

type TimeScrollPickerProps = {
  onSelect: (value: string) => void;
  initial: string;
  isOpened: boolean;
};

export const TimeScrollPicker = ({
  onSelect,
  initial,
  isOpened,
}: TimeScrollPickerProps) => {
  const { intervals, initialIndex } = useTimeIntervals(initial);
  return (
    <HorizontalScrollPicker
      renderItem={TimeItem}
      rowItems={4}
      valueKey="rawTime"
      initialIdx={initialIndex}
      onSelect={onSelect}
      isOpened={isOpened}
      items={intervals}
    />
  );
};
