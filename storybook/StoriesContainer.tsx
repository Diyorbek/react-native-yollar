import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StoriesHome } from "./StoriesHome";
import ButtonStories from "../lib/src/button/Button.stories";
import { Stack } from "./navigation";
import PaperStories from "../lib/src/paper/Paper.stories";
import TypographyStories from "../lib/src/typography/Typography.stories";
import TextFieldStories from "../lib/src/textfield/TextField.story";

export function StoriesContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={StoriesHome}
          options={{ headerTitle: "React Native Yollar" }}
        />
        <Stack.Screen name="Button" component={ButtonStories} />
        <Stack.Screen name="Paper" component={PaperStories} />
        <Stack.Screen name="TextField" component={TextFieldStories} />
        <Stack.Screen name="Typography" component={TypographyStories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
