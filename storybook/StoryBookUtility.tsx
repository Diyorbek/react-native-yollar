import { useNavigation } from "@react-navigation/native";
import React, { ReactNode, useEffect } from "react";
import { View } from "react-native";
import { Typography, TypographyProps } from "../src/typography/Typography";
import { StoryComponentName } from "./navigation";

export const StoryContainer = ({ children }: any) => (
  <View style={{ flex: 1, padding: 24, backgroundColor: "white" }}>
    {children}
  </View>
);

export function useOpenStory(name: StoryComponentName) {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate(name);
  }, []);
}

export function Presentation({
  title,
  caption,
  children,
}: {
  title?: ReactNode;
  children: ReactNode;
  caption?: ReactNode;
}) {
  return (
    <View style={{ marginVertical: 10 }}>
      {typeof title === "string" ? <Caption>{title}</Caption> : title}
      <View
        style={{
          marginTop: title ? 8 : undefined,
          marginBottom: caption ? 8 : undefined,
        }}
      >
        {children}
      </View>
      {typeof caption === "string" ? <Caption>{caption}</Caption> : caption}
    </View>
  );
}

export function Caption(props: TypographyProps) {
  return (
    <Typography
      variant="caption-13"
      color="placeholder"
      fontWeight="semiBold"
      {...props}
    />
  );
}
