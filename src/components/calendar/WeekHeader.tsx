import { Box, Text } from "@truckup/elements";

const WEEK_DATA = ["S", "M", "T", "W", "T", "F", "S"];
export const WeekHeader = () => (
  <Box
    borderColor="neutral700"
    borderBottomWidth={1}
    borderTopWidth={1}
    paddingVertical="m"
    paddingHorizontal="xxl"
    justifyContent="space-between"
    flexDirection="row"
  >
    {WEEK_DATA.map((day, index) => (
      <Text variant="label" color="neutral200" key={index}>
        {day}
      </Text>
    ))}
  </Box>
);
