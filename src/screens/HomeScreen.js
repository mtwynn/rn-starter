import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return <View>
    <Text style={styles.text}>Home</Text>
    <Button
      title="Components"
      onPress={() => navigation.navigate("List")}
    />
    <Button
      title="Images"
      onPress={() => navigation.navigate("Images")}
    />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
