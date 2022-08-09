import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./screens/MainScreen";
import { FeirappColors } from "./constants/colors";
import SearchGroceryItems from "./screens/SearchGroceryItems";

const Stack = createNativeStackNavigator();

const StackNaviator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SearchGroceryItems"
          component={SearchGroceryItems}
          options={{
            headerStyle: { backgroundColor: FeirappColors.primary010 },
            animation: "slide_from_bottom",
            title: "Search",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const MyStatusBar = function ({ backgroundColor, ...props }) {
  const statusBarStyle = [
    { backgroundColor },
    Platform.OS === "android" ? { paddingTop: 42 } : {},
  ];
  return (
    <View style={statusBarStyle}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );
};
export default function App() {
  return (
    <>
      <MyStatusBar
        backgroundColor={FeirappColors.primary010}
        barStyle="light-content"
      />
      <StackNaviator />
    </>
  );
}
