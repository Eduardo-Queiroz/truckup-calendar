import { useEffect, useState } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export const useAssets = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      await Font.loadAsync({
        ["FiraCode-Regular"]: require("./../../../assets/fonts/FiraCode-Regular.otf"),
        ["Lazzer-Heavy"]: require("./../../../assets/fonts/Lazzer-Heavy.otf"),
        ["Lazzer-Bold"]: require("./../../../assets/fonts/Lazzer-Bold.otf"),
        ["Lazzer-SemiBold"]: require("./../../../assets/fonts/Lazzer-SemiBold.otf"),
        ["Lazzer-Medium"]: require("./../../../assets/fonts/Lazzer-Medium.otf"),
      });

      setAppIsReady(true);
    }
    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  return appIsReady;
};
