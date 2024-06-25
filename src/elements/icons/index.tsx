import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from "@shopify/restyle";
import { Theme } from "@truckup/theme";
import { CloseIcon } from "./close";
import { GlobalIcon } from "./global";
import { DangerIcon } from "./danger";

type iconType = "close" | "global" | "danger";

const icons = {
  ["close"]: CloseIcon,
  ["global"]: GlobalIcon,
  ["danger"]: DangerIcon,
};

type IconSelectorProps = { name: iconType };

const IconSelector = ({ name, ...rest }: IconSelectorProps) => {
  const Icon = icons[name];
  return <Icon {...rest} />;
};

export type IconProps = IconSelectorProps & VariantProps<Theme, "iconVariants">;
export const Icon = createRestyleComponent<IconProps, Theme>(
  [createVariant({ themeKey: "iconVariants" })],
  IconSelector
);
