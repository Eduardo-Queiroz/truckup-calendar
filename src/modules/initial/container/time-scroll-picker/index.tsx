import { HorizontalScrollPicker } from "@truckup/components";
import { useTimeIntervals } from "@truckup/utils";
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
