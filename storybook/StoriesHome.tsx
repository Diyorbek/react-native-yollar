import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../lib/src/Colors";
import { RootStackParamList, StoryComponentName } from "./navigation";

interface ComponentsList {
  label: string;
  routeName: StoryComponentName;
}

const componentsList: ComponentsList[] = [
  {
    routeName: "Button",
    label: "Buttons",
  },
  {
    routeName: "Paper",
    label: "Paper",
  },
  {
    routeName: "TextField",
    label: "TextField",
  },
  {
    routeName: "Typography",
    label: "Typography",
  },
];

export function StoriesHome({
  navigation,
}: StackScreenProps<RootStackParamList, "Home">) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {componentsList.map(({ label, routeName }) => (
          <TouchableOpacity
            key={routeName}
            onPress={() => navigation.navigate(routeName)}
          >
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>{label}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listItem: {
    borderBottomColor: Colors.Light.dark[100],
    borderBottomWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  listItemText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
