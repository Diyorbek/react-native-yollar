import * as React from "react";
import { View } from "react-native";
import { Elevation, ElevationProps } from "../elevation/Elevation";
import { ElevationLevel } from "../elevation/elevationStyles";

export interface PaperProps extends Omit<ElevationProps, "level"> {
  elevation?: ElevationLevel;
  variant?: "elevation" | "outline";
  square?: boolean;
}

export function Paper({
  children,
  elevation = 1,
  borderRadius = 4,
  backgroundColor,
  square,
  variant = "elevation",
  ...props
}: PaperProps) {
  return (
    <Elevation
      level={variant === "elevation" ? elevation : undefined}
      backgroundColor={backgroundColor}
      borderRadius={square ? undefined : borderRadius}
      outline={variant === "outline"}
    >
      <View {...props}>{children}</View>
    </Elevation>
  );
}
