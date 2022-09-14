import { StyleSheet, Text, View,Button,Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {HeaderButtons,HeaderButton,Item} from "react-navigation-header-buttons"
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const HomeScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="register"
            iconName="person-add"
            onPress={() => alert("ลงทะเบียน")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Ionicons name="home" size={30} color="#dc143c" />
      <Text>Home Screen</Text>
     
    </View>
  );
};
  


function SettingScreen({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Setting Screen!</Text>
      <Button
      title="Go to Home"
      onPress={()=>navigation.navigate('Home')}/>
    </View>
    )
  }

  function CustomDrawerContent(props){
    return(
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}/>
        
      </DrawerContentScrollView>
    )
  }

  const Tab = createBottomTabNavigator();

  const Drawer = createDrawerNavigator();



function Mytabs(){
  return(
    <Tab.Navigator
    screenOptions={({route})=>({
      tabBarIcon :({focused,color,size})=>{
        let iconName;
        if(route.name==='Home'){
          iconName = focused
          ?'ios-information-circle'
          :'ios-information-circle-outline'

        } else if(route.name==='Setting'){
          iconName = focused? 'ios-list-box' 
 : 'ios-list'
        }
        return <Ionicons name={iconName} size={size} color={color}/>;
      },
      tabBarActiveTintColor:'tomato',
      tabBarInactiveTintColor:'Gray'

    })}

    >
      <Tab.Screen name='Home' component={HomeScreen}/>
      <Tab.Screen name='Setting' component={SettingScreen}/>
    </Tab.Navigator>
  )
}



function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Mytabs} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>    
  )
}


export default App

const styles = StyleSheet.create({})