import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "./src/screens/MainScreen";
import { FeirappColors } from "./src/constants/colors";
import SearchGroceryItems from "./src/screens/SearchGroceryItems";
import ManageGroceryItem from "./src/screens/ManageGroceryItem";
import GroceryItemDetails from "./src/screens/GroceryItemDetails";

const Stack = createNativeStackNavigator();

const StackNaviator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          headerShown: false,
          title: "Principal",
        }}
      />
      <Stack.Screen
        name="SearchGroceryItems"
        component={SearchGroceryItems}
        options={{
          headerStyle: { backgroundColor: FeirappColors.primary010 },
          animation: "slide_from_bottom",
          title: "Pesquisar",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="GroceryItemDetails"
        component={GroceryItemDetails}
        options={{
          headerStyle: { backgroundColor: FeirappColors.primary010 },
          animation: "slide_from_right",
          title: "Detalhes",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="ManageGroceryItem"
        component={ManageGroceryItem}
        options={{
          headerStyle: { backgroundColor: FeirappColors.primary010 },
          animation: "slide_from_right",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
    </Stack.Navigator>
  );
};
const MyStatusBar = ({ backgroundColor, ...props }) => {
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

const App = () => {
  return (
    <NavigationContainer >
      <MyStatusBar
        backgroundColor={FeirappColors.primary010}
        barStyle="light-content"
      />
      <StackNaviator />
    </NavigationContainer>
  );
};

export default App;
