import React from "react";
import { ScrollView, View } from "react-native";
import { Box } from "../box/Box";
import { Button } from "./Button";
import { Caption, Presentation } from "../../../storybook/StoryBookUtility";

export default function ButtonStories() {
  return (
    <Box flex={1} backgroundColor="white">
      <ScrollView>
        <Box padding={6} maxWidth={500}>
          <Presentation title="default">
            <Button onPress={() => {}}>Hello</Button>
          </Presentation>
          <Presentation title='variant="contained"'>
            <Button onPress={() => {}} variant="contained">
              Hello
            </Button>
          </Presentation>
          <Presentation
            title={
              <>
                <Caption>variant="outlined"</Caption>
                <Caption>color="primary"</Caption>
              </>
            }
          >
            <Button onPress={() => {}} color="primary" variant="outlined">
              Hello
            </Button>
          </Presentation>
          <Presentation
            title={
              <>
                <Caption>variant="contained"</Caption>
                <Caption>color="primary"</Caption>
              </>
            }
          >
            <Button
              onPress={() => alert("'sup?")}
              color="primary"
              variant="contained"
            >
              Hello
            </Button>
          </Presentation>
        </Box>
      </ScrollView>
    </Box>
  );
}
