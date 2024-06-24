import { createTheme, useTheme as useThemeRS } from "@shopify/restyle";

export type buttonTypes = "primary";

export type iconTypes = "medium";

export const theme = createTheme({
  colorScheme: "light",
  spacing: {
    xs: 4,
    s: 8,
    m: 12,
    l: 18,
    xl: 20,
    xxl: 34,
  },
  colors: {
    primary: "#00CC66",
    onPrimary: "#010203",

    surface: "#010203",
    onSurface: "#F4F4F4",

    surfaceVariant: "#171A1C",

    surfaceContainer: "#292A2B",
    onSurfaceContainer: "#F4F4F4",

    danger: "#FF5F5F",

    neutral50: "#F4F4F4",
    neutral100: "#DFDFDF",
    neutral200: "#AAAAAB",
    neutral300: "#818384",
    neutral400: "#757576",
    neutral500: "#4C4E50",
    neutral600: "#4F4F50",
    neutral700: "#3B3C3D",
    neutral800: "#3A3D3F",

    disabledBackground: "#353638",
    disabledTextColor: "#727374",
  },
  borderRadii: {
    pill: 2.5,
    circular: 16,
  },
  textVariants: {
    defaults: {
      color: "onSurface",
    },
    title: {
      fontSize: 16,
      color: "onSurface",
      fontFamily: "Lazzer-Bold",
      lineHeight: 16,
    },
    label: {
      fontSize: 14,
      fontFamily: "Lazzer-SemiBold",
      lineHeight: 14,
    },
    labelBold: {
      fontSize: 14,
      fontFamily: "Lazzer-Bold",
      lineHeight: 14,
    },
    heavy: {
      fontSize: 28,
      fontFamily: "Lazzer-Heavy",
      lineHeight: 28,
      color: "neutral400",
    },
    bigHeavy: {
      fontSize: 36,
      fontFamily: "Lazzer-Heavy",
      lineHeight: 36,
      color: "primary",
    },
    danger: {
      fontSize: 14,
      fontFamily: "FiraCode-Regular",
      lineHeight: 20,
      color: "danger",
    },
  },
  buttonVariants: {
    primary: {
      backgroundColor: "primary",
      width: "90%",
      height: 56,
      borderRadius: "circular",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  buttonTextVariants: {
    primary: {
      fontSize: 16,
      color: "onPrimary",
      fontFamily: "Lazzer-Bold",
      lineHeight: 16,
    },
  },
  iconVariants: {
    small: {
      width: 14,
      height: 14,
    },
    medium: {
      width: 24,
      height: 24,
    },
  },
});

export type Theme = typeof theme;
export const useTheme = useThemeRS<Theme>;
