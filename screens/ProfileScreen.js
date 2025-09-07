import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { useAuth } from "../App";

export default function ProfileScreen() {
  const { user, logout } = useAuth();

  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        {/* Logo */}
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Content */}
        <Text style={styles.title}>โปรไฟล์</Text>
        <View style={styles.info}>
          <Text>Email: {user?.email}</Text>
        </View>
        <Button title="Logout" onPress={logout} />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 70 },
  logo: { width: 120, height: 90, marginBottom: 20, alignSelf: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  info: { marginBottom: 20 },
});
