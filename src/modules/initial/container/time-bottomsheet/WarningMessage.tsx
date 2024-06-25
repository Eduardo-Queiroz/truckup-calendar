import React, { useEffect } from "react";
import { Box, Icon, Text } from "@truckup/elements";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export const WarningMessage = ({ isVisible }: { isVisible: boolean }) => {
  const translateY = useSharedValue(50);
  const opacity = useSharedValue(0);
  const height = useSharedValue(0);

  useEffect(() => {
    if (isVisible) {
      translateY.value = withTiming(0, { duration: 300 });
      opacity.value = withTiming(1, { duration: 300 });
      height.value = withTiming(80, { duration: 300 });
    } else {
      translateY.value = withTiming(50, { duration: 300 });
      opacity.value = withTiming(0, { duration: 300 });
      height.value = withTiming(0, { duration: 300 });
    }
  }, [isVisible, translateY, opacity, height]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      opacity: opacity.value,
      height: height.value,
    };
  });
  return (
    <Animated.View style={[animatedStyle]}>
      <Box padding="l">
        <Box flexDirection="row">
          <Box paddingRight="s" paddingTop="xs">
            <Icon variant="small" name="danger" />
          </Box>
          <Text variant="danger">
            Select an end time that`s later than you start time.
          </Text>
        </Box>
      </Box>
    </Animated.View>
  );
};
