import { ThemeProvider } from "@shopify/restyle";
import { lightTheme, theme } from "./src/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { InitialScreen } from "./src/modules/initial/screens";
import { Provider as ReduxProvider } from "react-redux";
import * as SplashScreen from "expo-splash-screen";
import { store } from "./src/store/config";
import { useAssets } from "./src/utils/hooks/useAssets";
import {
  ColorSchemeProvider,
  useColorScheme,
} from "./src/components/color-scheme";

SplashScreen.preventAutoHideAsync();

const Modules = () => {
  const { colorScheme } = useColorScheme();
  return (
    <ThemeProvider theme={colorScheme === "light" ? theme : lightTheme}>
      <InitialScreen />
    </ThemeProvider>
  );
};
export default function App() {
  const appIsReady = useAssets();
  if (!appIsReady) {
    return null;
  }
  return (
    <ReduxProvider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <ColorSchemeProvider>
            <SafeAreaProvider>
              <Modules />
            </SafeAreaProvider>
          </ColorSchemeProvider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ReduxProvider>
  );
}
