import { StyleSheet, Text, View, Button, Image } from "react-native";
import React from "react";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import HomeScreen from "./screen/HomeScreen";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-web";

import ProductScreen from "./screen/ProductScreen";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255,15,85)",
  },
};

function FeedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Feed Screen</Text>
      <Button onPress={() => navigation.openDrawer()} title="Home Screen" />
    </View>
  );
}


function CustomDrawerContent(props) {
  return (
    <SafeAreaView>
      <Image
        style={styles.sideMenuProfileIcon}
        source={require("./assets/react_logo.png")}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
       <DrawerItem
          label="Close Drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Product" component={ProductScreen} />
    </Drawer.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
   container: {
      height: 80,
      elevation: 3,
      borderColor: 'gray',
      borderRadius: 5,
      flexDirection: 'row',
      marginHorizontal: 20,
  },
  dataContainer: {
      flex: 1,
  },
  thumbnail: {
      width: 70,
      height: 70,
  },   
});


export default App;
