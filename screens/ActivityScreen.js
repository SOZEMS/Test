import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";

export default function ActivityScreen() {
  const data = [
    { id: "1", name: "เปิดแอป" },
    { id: "2", name: "ดูหน้าหลัก" },
    { id: "3", name: "แก้ไขโปรไฟล์" },
  ];

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
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 70 },
  logo: { width: 120, height: 90, marginBottom: 20, alignSelf: "center" },
  item: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
  },
});
