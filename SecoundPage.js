import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from "react";

const SecondPage = ({ navigation }) => {
  const [postText, setPostText] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.heading}>This is Secound Page</Text>
        <Button
          title="Go to First Page"
          onPress={() =>
            navigation.navigate("First Page", {
              postText,
            })
          }
        />
        <Button
          title="Go to Third Page"
          onPress={() =>
            navigation.navigate("Third Page", {
              postText,
            })
          }
        />
      </View>
    </View>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: "center",

    marginVertical: 10,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
  },
});