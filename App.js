import React from "react";
import { StyleSheet, View } from "react-native";
import WelcomeScreen from "./app/screen/WelcomeScreen";

export default function App() {
  return (
    <View>
      <Text>This is testing item </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
