import React from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Feather from "@expo/vector-icons/Feather";
import { useTheme } from "@truckup/theme";
import { useColorScheme } from "./provider";

export const ColorSchemeButton = () => {
  const theme = useTheme();
  const { toggle, colorScheme, active } = useColorScheme();
  const tap = Gesture.Tap()
    .runOnJS(true)
    .onStart((e) => {
      if (!active) {
        toggle(e.absoluteX, e.absoluteY);
      }
    });
  return (
    <GestureDetector gesture={tap}>
      <Feather
        name={colorScheme !== "light" ? "moon" : "sun"}
        color={theme.colors.onSurface}
        size={32}
      />
    </GestureDetector>
  );
};
