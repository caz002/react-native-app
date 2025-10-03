import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { auth } from "../firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore();
// Example profile colors (ensure you have corresponding images like profile_red.png, etc.)
const profileColors = ["blue", "red"];

export default function AuthScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLogin, setIsLogin] = useState("");

  // functions
  const signup = async () => {
    setErrorMsg("");
    if (!email || !password || !username) {
      setErrorMsg("Please fill out all fields");
      return;
    }

    // logic for profile pic
    const randomColor = profileColors[randomIndex];
    const profilePic = `profile_${randomColor}.png`;
  };
  return (
    <View className="flex flex-col flex-1 items-center justify-center">
      <Text className="text-4xl font-bold text-blue-500">
        Welcome to CafeFinder!
      </Text>
      {/* Input Text*/}
      {isLogin && (
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          placeholderTextColor="#666"
        />
      )}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholderTextColor="#666"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry
        placeholderTextColor="#666"
      />
      {errorMsg && <Text>{errorMsg}</Text>}
      <View>
        <TouchableOpacity onPress={isLogin ? login : signup}>
          <Text>{isLogin ? "Log In" : "Sign Up"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text>
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Have an account? Log In"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
