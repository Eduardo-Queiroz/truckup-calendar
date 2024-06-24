import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export const CloseIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill="#F4F4F4"
      fillOpacity={0.48}
      d="M19.238 6.177a1 1 0 0 0-1.415-1.414L12 10.586 6.177 4.763a1 1 0 1 0-1.414 1.414L10.586 12l-5.823 5.823a1 1 0 1 0 1.414 1.414L12 13.414l5.823 5.823a1 1 0 1 0 1.415-1.414L13.414 12l5.824-5.823Z"
    />
  </Svg>
);
