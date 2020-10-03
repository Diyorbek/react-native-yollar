import * as React from "react";
import { Box } from "../box/Box";
import { TextField } from "./TextField";
import { Caption, Presentation } from "../../../storybook/StoryBookUtility";
import { Typography } from "../typography/Typography";
import { Paper } from "../paper/Paper";
import { ScrollView } from "react-native-gesture-handler";
import { KeyboardAvoidingView, Platform } from "react-native";

export default function TextFieldStories() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
      keyboardVerticalOffset={90}
    >
      <Box flex={1} backgroundColor="white">
        <ScrollView>
          <Box maxWidth={500} padding={6}>
            <Presentation title='variant="outlined" (default)'>
              <TextField placeholder="Plese type somethin" />
            </Presentation>
            <Presentation title='variant="filled"'>
              <TextField variant="filled" placeholder="Plese type somethin" />
            </Presentation>
            <Presentation title='helperText="Something odd"'>
              <TextField
                helperText="Something odd"
                placeholder="Plese type somethin"
              />
            </Presentation>
            <Presentation
              title={
                <>
                  <Caption>{`error={true}`}</Caption>
                  <Caption>helperText="Something wrong"</Caption>
                </>
              }
            >
              <TextField
                error={true}
                helperText="Something wrong"
                placeholder="Plese type somethin"
              />
            </Presentation>
            <Presentation title="startAdornment={<.../>}">
              <TextField
                placeholder="Look left"
                startAdornment={
                  <Paper elevation={3}>
                    <Typography variant="h3">Hey</Typography>
                  </Paper>
                }
              />
            </Presentation>
            <Presentation title="endAdornment={<.../>}">
              <TextField
                placeholder="Look right"
                endAdornment={
                  <Paper elevation={3}>
                    <Typography variant="h2">Hello</Typography>
                  </Paper>
                }
              />
            </Presentation>
            <Presentation
              title={
                <>
                  <Caption>{`startAdornment={<.../>}`}</Caption>
                  <Caption>{`endAdornment={<.../>}>`}</Caption>
                </>
              }
            >
              <TextField
                placeholder="Yohoo"
                startAdornment={
                  <Paper elevation={3}>
                    <Typography variant="h2">Start</Typography>
                  </Paper>
                }
                endAdornment={
                  <Paper elevation={3}>
                    <Typography variant="h3">End</Typography>
                  </Paper>
                }
              />
            </Presentation>
          </Box>
        </ScrollView>
      </Box>
    </KeyboardAvoidingView>
  );
}
