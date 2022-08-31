import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { style } from "./component/style";

const ThirdPage = ({ navigation }) => {
  const [postText] = React.useState("");
  return (
    <View style={style.container}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={style.textTopStyle}>This is Third Page</Text>
        <Button
          title="Go to First Page"
          onPress={() =>
            navigation.navigate("First Page", {
              postText,
            })
          }
        />
        <Button
          title="Go to Secound Page"
          onPress={() =>
            navigation.navigate("Second Page", {
              postText,
            })
          }
        />
      </View>
      <Text style={style.textBottomStyle}>Thai nichi institute of technology</Text>
    </View>
  );
};

export default ThirdPage;

