import { StyleSheet, Text, View, Button, Image } from "react-native";
import React from "react";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-web";

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

function NortiScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Nortification Screen</Text>
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
      <Drawer.Screen name="Nortification" component={NortiScreen} />
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
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: "center",
  },
});

export default App;
