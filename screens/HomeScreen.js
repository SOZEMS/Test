import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { useAuth } from "../App";

export default function HomeScreen() {
  const { user } = useAuth();

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
        <Text style={styles.title}>ยินดีต้อนรับ</Text>
        <Text style={styles.text}>คุณ {user?.email}</Text>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: { flex: 1, alignItems: "center", paddingTop: 70 },
  logo: { width: 120, height: 90, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 18 },
});
