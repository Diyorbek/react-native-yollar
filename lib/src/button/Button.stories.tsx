import React from "react";
import { View } from "react-native";
import { Button } from "./Button";

export default function ButtonStories() {
  return (
    <View
      style={{
        flex: 1,
        padding: 24,
      }}
    >
      <Button onPress={() => {}}>Hello</Button>
    </View>
  );
}
