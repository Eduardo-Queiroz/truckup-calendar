import { Touchable } from "react-native";
import { Box, Icon, IconProps } from "../../elements";
import { TouchableOpacity } from "react-native-gesture-handler";

export const IconButton = ({
  onPress,
  disabled,
  ...rest
}: IconProps & {
  onPress: () => void;
  disabled?: boolean;
}) => (
  <TouchableOpacity onPress={onPress} disabled={disabled}>
    <Box padding="xs">
      <Icon {...rest} />
    </Box>
  </TouchableOpacity>
);
