import React from "react";
import { StyleSheet, Button, View, Text } from "react-native";

export const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Home Screen</Text>
      <Text style={styles.helloWorld}>Hello World 🥺!!</Text>
      <Button
        title="GO TO Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 36,
    margin: 16,
  },
  helloWorld: {
    fontSize: 24,
  },
});
