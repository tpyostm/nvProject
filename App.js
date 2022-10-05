import { StyleSheet, Text, View, Button,Image ,SafeAreaView} from "react-native";
import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import HomeScreen from "./screen/HomeScreen"
import ProductScreen from "./screen/ProductScreen";
import DetailScreen from "./screen/DetailScreen";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255,45,85)",
  },
};



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
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function ProductStack(){
  return(
    <Stack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:'#0096DA'
        },
        headerTintColor:'#ffff',
        headerTitleStyle:{
          fontWeight:'bold'
        }
      }}
    >
        <Stack.Screen name="Product" component={ProductScreen}/>
        <Stack.Screen name="Detail" component={DetailScreen}/>
    </Stack.Navigator>
  )
}

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "white",
          width: 240,
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Product" component={ProductStack} />
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