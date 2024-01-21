import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen, ListScreen } from "../screens";
import { RouterIcons } from "../components";
import { screensToIcons } from "../utils";

const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return <RouterIcons icons={screensToIcons[route.name]} focused={focused} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#555555",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerTitle: "Pesquisa de CEP", tabBarLabel: "Pesquisa" }} />
        <Tab.Screen name="List" component={ListScreen} options={{ headerTitle: "Lista de CEP", tabBarLabel: "Listas" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
