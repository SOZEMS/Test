import React, { useState, createContext, useContext } from "react";
import { Image } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useColorScheme } from "react-native";

// import screens
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ActivityScreen from "./screens/ActivityScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";

// ---------- Auth Context ----------
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

// ---------- Tab Navigator ----------
const Tab = createBottomTabNavigator();
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // ซ่อนชื่อปุ่ม
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("./assets/home.png")}
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? "#007AFF" : "#555",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("./assets/activity.png")}
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? "#007AFF" : "#555",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("./assets/profile.png")}
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? "#007AFF" : "#555",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("./assets/settings.png")}
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? "#007AFF" : "#555",
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// ---------- Stack Navigator ----------
const Stack = createNativeStackNavigator();
function RootNavigator() {
  const { user } = useAuth();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="MainTabs" component={MainTabs} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
}

// ---------- App ----------
export default function App() {
  const scheme = useColorScheme();
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: (email) => setUser({ email }),
        logout: () => setUser(null),
      }}
    >
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
        <RootNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
