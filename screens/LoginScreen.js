import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { useAuth } from "../App";

export default function LoginScreen() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    if (email === "test@demo.com" && password === "123456") {
      login(email);
    } else {
      Alert.alert("Login Failed", "Email or password is incorrect");
    }
  };

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
        <Text style={styles.title}>Login</Text>
        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="test@demo.com"
        />
        <Text>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="123456"
        />
        <Button title="Login" onPress={onLogin} />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 20 },
  logo: { width: 120, height: 120, marginBottom: 20, alignSelf: "center" },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
});
