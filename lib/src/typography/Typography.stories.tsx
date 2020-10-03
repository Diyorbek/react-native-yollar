import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import {
  Caption,
  Presentation,
  StoryContainer,
} from "../../../storybook/StoryBookUtility";
import { Typography, TypographyProps } from "./Typography";

export default function TypographyStories() {
  const [fontFamily, setFontFamily] = useState<TypographyProps["fontFamily"]>(
    "montserrat"
  );

  return (
    <StoryContainer>
      <View
        style={{
          marginBottom: 20,
        }}
      >
        <TouchableOpacity onPress={() => setFontFamily("montserrat")}>
          <Typography
            fontFamily={fontFamily}
            variant="h3"
            transform="capitalize"
            color={fontFamily === "montserrat" ? "primary" : "textSecondary"}
          >
            use montserrat
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFontFamily("open-sans")}>
          <Typography
            fontFamily={fontFamily}
            variant="h3"
            transform="capitalize"
            color={fontFamily === "open-sans" ? "primary" : "textSecondary"}
          >
            use open sans
          </Typography>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Presentation caption={<Caption>variant="title"</Caption>}>
          <Typography fontFamily={fontFamily} variant="title">
            Large Title
          </Typography>
        </Presentation>
        <Presentation caption={<Caption>variant="h1"</Caption>}>
          <Typography fontFamily={fontFamily} variant="h1">
            Header 1
          </Typography>
        </Presentation>
        <Presentation caption={<Caption>variant="h2"</Caption>}>
          <Typography fontFamily={fontFamily} variant="h2">
            Header 2
          </Typography>
        </Presentation>
        <Presentation caption={<Caption>variant="h3"</Caption>}>
          <Typography fontFamily={fontFamily} variant="h3">
            Header 3
          </Typography>
        </Presentation>
        <Presentation caption={<Caption>variant="body-20"</Caption>}>
          <Typography fontFamily={fontFamily} variant="body-20">
            Body 20
          </Typography>
        </Presentation>
        <Presentation caption={<Caption>variant="body-17"</Caption>}>
          <Typography fontFamily={fontFamily} variant="body-17">
            Body 17
          </Typography>
        </Presentation>
        <Presentation caption={<Caption>variant="body-15"</Caption>}>
          <Typography fontFamily={fontFamily} variant="body-15">
            Body 15
          </Typography>
        </Presentation>
        <Presentation caption={<Caption>variant="caption-13"</Caption>}>
          <Typography fontFamily={fontFamily} variant="caption-13">
            Caption 13
          </Typography>
        </Presentation>
        <Presentation caption={<Caption>variant="caption-11"</Caption>}>
          <Typography fontFamily={fontFamily} variant="caption-11">
            Caption 11
          </Typography>
        </Presentation>
        <Presentation
          caption={
            <>
              <Caption>variant="body-15"</Caption>
              <Caption>color="primary"</Caption>
              <Caption>transform="uppercase"</Caption>
              <Caption>fontWeight="semiBold"</Caption>
            </>
          }
        >
          <Typography
            fontFamily={fontFamily}
            variant="body-15"
            color="primary"
            transform="uppercase"
            fontWeight="semiBold"
          >
            Tagline 15
          </Typography>
        </Presentation>
        <Presentation
          caption={
            <>
              <Caption>variant="caption-13"</Caption>
              <Caption>color="primary"</Caption>
              <Caption>transform="uppercase"</Caption>
              <Caption>fontWeight="semiBold"</Caption>
            </>
          }
        >
          <Typography
            fontFamily={fontFamily}
            variant="caption-13"
            color="primary"
            transform="uppercase"
            fontWeight="semiBold"
          >
            Tagline 12
          </Typography>
        </Presentation>
        <Presentation
          caption={
            <>
              <Caption>variant="caption-11"</Caption>
              <Caption>color="primary"</Caption>
              <Caption>transform="uppercase"</Caption>
              <Caption>fontWeight="semiBold"</Caption>
            </>
          }
        >
          <Typography
            fontFamily={fontFamily}
            variant="caption-11"
            color="primary"
            transform="uppercase"
            fontWeight="semiBold"
          >
            Tagline 11
          </Typography>
        </Presentation>
      </ScrollView>
    </StoryContainer>
  );
}
