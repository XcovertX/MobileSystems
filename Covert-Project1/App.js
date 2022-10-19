import * as React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

function HomeScreen() {
    return (
        <View style={styles.container1}>
          <Text>Hello, SER 423! My name is James Covert</Text>
          <StatusBar style="auto" />
        </View>
    )
}

function ExitScreen() {
    return (
        <View style={styles.container2}>
          <Text>Thanks for using my app!</Text>
          <StatusBar style="auto" />
        </View>
    )
}

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Exit" component={ExitScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#00ff64',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#FF003E',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
