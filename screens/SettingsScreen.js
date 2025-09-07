import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Switch,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";

export default function SettingsScreen() {
  const [isEnabled, setIsEnabled] = useState(false);

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
        <View style={styles.row}>
          <Text style={styles.text}>เปิดใช้งานฟีเจอร์ทดลอง</Text>
          <Switch value={isEnabled} onValueChange={setIsEnabled} />
        </View>
        <Text style={styles.status}>สถานะ: {isEnabled ? "เปิด" : "ปิด"}</Text>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 70 },
  logo: { width: 120, height: 90, marginBottom: 20, alignSelf: "center" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: { fontSize: 18 },
  status: { marginTop: 20, fontSize: 16 },
});
