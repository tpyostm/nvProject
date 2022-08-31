import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { style } from "./component/style";

const FirstPage = ({ navigation }) => {
  const [postText] = React.useState("");
  return (
    <View style={style.container}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={style.textTopStyle}>This is First Page</Text>
        <Button
          title="Go to SecoundPage"
          onPress={() =>
            navigation.navigate("Second Page", {
              postText,
            })
          }
        />
        <Button
          title="Go ThirdPage"
          onPress={() =>
            navigation.navigate("Third Page", {
              postText,
            })
          }
        />
       
      </View>
      <Text style={style.textBottomStyle}>Thai nichi institute of technology</Text>
    </View>
    
  );
};

export default FirstPage;