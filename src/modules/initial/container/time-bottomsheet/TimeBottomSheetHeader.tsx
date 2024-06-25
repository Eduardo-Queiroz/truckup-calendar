import { IconButton } from "@truckup/components";
import { Box, Text } from "@truckup/elements";
import { formatDate } from "@truckup/utils";

type TimeBottomSheetHeaderProps = {
  selectedDay: string | null;
  onClose: () => void;
};

export const TimeBottomSheetHeader = ({
  selectedDay,
  onClose,
}: TimeBottomSheetHeaderProps) => (
  <Box
    backgroundColor="surfaceVariant"
    borderColor="neutral800"
    borderTopWidth={1}
    borderBottomWidth={1}
  >
    <Box
      width={36}
      height={5}
      backgroundColor="neutral500"
      alignSelf="center"
      borderRadius="pill"
      marginVertical="s"
    />
    <Box
      paddingVertical="xs"
      paddingHorizontal="l"
      marginBottom="m"
      justifyContent="space-between"
      flexDirection="row"
      alignItems="center"
    >
      <Text variant="title">
        Set availability on {selectedDay && formatDate(selectedDay)}
      </Text>
      <IconButton variant="medium" name="close" onPress={onClose} />
    </Box>
  </Box>
);
