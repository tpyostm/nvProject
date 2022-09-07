import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

import { NavigationContainer,DefaultTheme } from "@react-navigation/native";

import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from "@react-navigation/drawer";

const MyTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'rgb(255,15,85)'
  }
}

function FeedScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Feed Screen</Text>
      <Button
      onPress={()=>navigation.openDrawer()} 
      title="Open Drawer"/>

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

function CustomDrawerContent(props){
  return(
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
      <DrawerItem label='Close Drawer' onPress={()=> props.navigation.closeDrawer()} />
      <DrawerItem label='Toggle Drawer' onPress={()=> props.navigation.toggleDrawer()} />
    </DrawerContentScrollView>
  )
}
const Drawer = createDrawerNavigator();


function MyDrawer(){
  return(
    <Drawer.Navigator 
    useLegacyImplementation
    drawerContent={(props)=><CustomDrawerContent {...props}/>}
    >
        <Drawer.Screen name="Feed" component={FeedScreen} />
        <Drawer.Screen name="Nortification" component={NortiScreen}/>

      </Drawer.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer/>
    </NavigationContainer>
  );
};

export default App;