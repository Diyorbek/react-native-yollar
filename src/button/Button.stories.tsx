import React from "react";
import { ScrollView } from "react-native";
import { Box } from "../box/Box";
import { Button } from "./Button";
import { Caption, Presentation } from "../../storybook/StoryBookUtility";

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
          <Presentation title='variant="outlined" color="primary"'>
            <Button onPress={() => {}} color="primary" variant="outlined">
              Hello
            </Button>
          </Presentation>
          <Presentation title='variant="contained" color="primary"'>
            <Button
              onPress={() => alert("'sup?")}
              color="primary"
              variant="contained"
            >
              Hello
            </Button>
          </Presentation>
          <Presentation
            title={
              <>
                <Caption>variant="contained"</Caption>
                <Caption>color="primary"</Caption>
                <Caption>startIcon={`{...}`}</Caption>
              </>
            }
          >
            <Button
              onPress={() => {}}
              color="primary"
              startIcon={
                <Box
                  width={24}
                  height={24}
                  borderWidth={1}
                  borderColor="blue"
                />
              }
            >
              Hello
            </Button>
          </Presentation>
          <Presentation
            title={
              <>
                <Caption>variant="contained"</Caption>
                <Caption>color="primary"</Caption>
                <Caption>startIcon={`{...}`}</Caption>
                <Caption>endIcon={`{...}`}</Caption>
              </>
            }
          >
            <Button
              onPress={() => {}}
              color="primary"
              variant="contained"
              startIcon={<Box width={16} height={16} backgroundColor="white" />}
              endIcon={<Box width={24} height={24} backgroundColor="white" />}
            >
              Hello
            </Button>
          </Presentation>
        </Box>
      </ScrollView>
    </Box>
  );
}
