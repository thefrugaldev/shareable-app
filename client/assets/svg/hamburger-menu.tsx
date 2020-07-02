import React from "react";
import Svg, { Path } from "react-native-svg";

const HamburgerMenuSvg = () => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M3 12h18M3 6h18M3 18h18" />
    </Svg>
  );
};

export default HamburgerMenuSvg;
