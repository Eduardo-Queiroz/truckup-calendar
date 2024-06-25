import { HorizontalScrollPickerItemProps } from "@truckup/components";
import { Box } from "@truckup/elements";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useTheme } from "@truckup/theme";

export const TimeItem = ({ item, active }: HorizontalScrollPickerItemProps) => {
  const {
    colors: { primary, neutral400 },
    textVariants: { bigHeavy, heavy, title, labelBold },
  } = useTheme();
  const currentTitleColor = active ? primary : neutral400;
  const currentTitleVariant = active ? bigHeavy : heavy;
  const animatedTitleStyle = useAnimatedStyle(() => {
    return {
      ...currentTitleVariant,
      color: withTiming(currentTitleColor, {
        duration: 50,
      }),
      fontSize: withTiming(currentTitleVariant.fontSize, {
        duration: 50,
      }),
    };
  });

  const currentPeriodColor = active ? primary : neutral400;
  const currentPeriodVariant = active ? title : labelBold;
  const animatedPeriodStyle = useAnimatedStyle(() => {
    return {
      ...currentPeriodVariant,
      color: withTiming(currentPeriodColor, {
        duration: 50,
      }),
      fontSize: withTiming(currentPeriodVariant.fontSize, {
        duration: 50,
      }),
    };
  });

  return (
    <Box style={{ width: active ? 100 : "auto" }} alignItems="center">
      <Animated.Text style={[animatedTitleStyle]}>
        {item.formattedTime}
      </Animated.Text>
      <Box marginTop={"xs"} alignItems="center">
        <Animated.Text style={[animatedPeriodStyle]}>
          {item.period}
        </Animated.Text>
      </Box>
    </Box>
  );
};
