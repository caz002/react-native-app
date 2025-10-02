import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { auth } from "../firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { TextInput } from "react-native/types_generated/index";

const db = getFirestore();

export default function AuthScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLogin, setIsLogin] = useState("");

  // functions
  const signup = async () => {
    setErrorMsg("");
  };
  return (
    <SafeAreaView>
      <View className="align-center mb-20">
        <Text>Cafe Finder</Text>
      </View>
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
    </SafeAreaView>
  );
}
