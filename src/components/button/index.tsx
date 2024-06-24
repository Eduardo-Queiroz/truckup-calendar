import {
  createBox,
  createVariant,
  createRestyleComponent,
  VariantProps,
} from "@shopify/restyle";
import { Box } from "../../elements";
import { buttonTypes, Theme, useTheme } from "../../theme";
import {
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  Text as RNText,
} from "react-native";

type BaseButtonProps = TouchableOpacityProps &
  VariantProps<Theme, "buttonVariants">;
const BaseButton = createRestyleComponent<BaseButtonProps, Theme>(
  [createVariant({ themeKey: "buttonVariants" })],
  TouchableOpacity
);

type BaseTextProps = TextProps & VariantProps<Theme, "buttonTextVariants">;
const BaseButtonText = createRestyleComponent<BaseTextProps, Theme>(
  [createVariant({ themeKey: "buttonTextVariants" })],
  RNText
);

export const Button = ({
  text,
  onPress,
  variant,
  disabled,
}: {
  onPress: () => void;
  text: string;
  disabled: boolean;
  variant: buttonTypes;
}) => {
  const { colors } = useTheme();
  return (
    <BaseButton
      onPress={onPress}
      disabled={disabled}
      variant={variant}
      style={
        disabled ? { backgroundColor: colors.disabledBackground } : undefined
      }
    >
      <BaseButtonText
        variant={variant}
        style={disabled ? { color: colors.disabledTextColor } : undefined}
      >
        {text}
      </BaseButtonText>
    </BaseButton>
  );
};
