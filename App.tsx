import { ThemeProvider } from "@shopify/restyle";
import { theme } from "./src/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { InitialScreen } from "./src/modules/initial/screens";
import { Provider as ReduxProvider } from "react-redux";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { store } from "./src/store/config";
import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { useAssets } from "./src/util/hooks/loadAssets";

SplashScreen.preventAutoHideAsync();

export default function App() {
  useAssets();
  return (
    <ReduxProvider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <ThemeProvider theme={theme}>
            <SafeAreaProvider>
              <InitialScreen />
            </SafeAreaProvider>
          </ThemeProvider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ReduxProvider>
  );
}
