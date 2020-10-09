import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Presentation } from "../../storybook/StoryBookUtility";
import { Box } from "../box/Box";
import { Typography } from "../typography/Typography";

import { Paper } from "./Paper";

export default function PaperStories() {
  return (
    <Box flex={1} backgroundColor="white">
      <ScrollView>
        <Box paddingTop={6} paddingHorizontal={8}>
          <Typography variant="title">Paper component</Typography>

          <Box
            maxWidth={300}
            justifyContent="space-around"
            flexDirection="column"
          >
            <Presentation caption='variant="outline"'>
              <Paper variant="outline">
                <Box width={100} height={100} />
              </Paper>
            </Presentation>

            <Presentation caption="elevation={1}">
              <Paper elevation={1}>
                <Box width={100} height={100} />
              </Paper>
            </Presentation>

            <Presentation caption="elevation={3}">
              <Paper elevation={3} borderRadius={6}>
                <Box width={100} height={100} />
              </Paper>
            </Presentation>

            <Presentation caption="elevation={5}">
              <Paper elevation={5} borderRadius={6}>
                <Box width={100} height={100} />
              </Paper>
            </Presentation>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
}
