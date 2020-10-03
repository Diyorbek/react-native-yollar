import * as React from "react";
import {
  TouchableHighlight,
  TouchableHighlightProps,
  Text,
  View,
} from "react-native";

export function Button({
  children,
  ...props
}: React.PropsWithChildren<TouchableHighlightProps>) {
  return (
    <TouchableHighlight {...props}>
      <View>
        <Text>{children}</Text>
      </View>
    </TouchableHighlight>
  );
}
