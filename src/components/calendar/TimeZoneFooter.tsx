import React from "react";
import { Box, Text, Icon } from "@truckup/elements";
import { getCalendars } from "expo-localization";

export const TimeZoneFooter = ({
  calendarHeight,
}: {
  calendarHeight: number;
}) => {
  const { timeZone } = getCalendars()[0];
  return (
    <Box
      top={calendarHeight + 50}
      position="absolute"
      width={"100%"}
      borderColor="neutral700"
      backgroundColor="surfaceContainer"
      borderBottomWidth={1}
      borderTopWidth={1}
      paddingVertical="m"
      alignItems="center"
      flexDirection="row"
      justifyContent="center"
    >
      <Box paddingRight="s">
        <Icon variant="small" name="global" />
      </Box>
      <Text variant="label">{timeZone}</Text>
    </Box>
  );
};
