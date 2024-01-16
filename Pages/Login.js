import {
  ImageBackground,
  View,
  Text,
  TextInput,
  Pressable,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import app from "../config/firebaseConnect";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigationState } from "@react-navigation/native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);
  const auth = getAuth(app);
  //Login  function
  const SignIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert("You're now logged in");
      navigation.navigate("Menu");
    } catch (error) {
      console.log(error);
      alert("failed to log in" + error);
    } finally {
      setLoading(false);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <SafeAreaView>
      <View style={{ height: "90%" }}>
        <View style={{ height: "50%" }}>
          <ImageBackground
            source={require("../assets/sign.jpg")}
            style={{ width: "100%", height: "100%" }}
          >
            <Ionicons
              style={{ margin: 10 }}
              name="arrow-back-outline"
              size={40}
              onPress={() => navigation.navigate("Welcome")}
            />
          </ImageBackground>
        </View>

        <View style={{ marginLeft: 10 }}>
          <Text
            style={{
              margin: 5,
              fontWeight: "bold",
              fontSize: 25,
              marginLeft: 5,
            }}
          >
            SIGN IN
          </Text>
          <View>
            <Text
              style={{
                marginLeft: 7,
                margin: 5,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              E-mail
            </Text>
          </View>

          <View style={{ marginBottom: "15" }}>
            <TextInput
              style={{
                width: "60%",
                borderWidth: 2,
                padding: 7,
                marginLeft: 5,
                marginBottom: 10,
                borderRadius: 15,
              }}
              placeholder="Enter your email"
              placeholderTextColor="black"
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Text
              style={{
                marginLeft: 7,
                margin: 4,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Password
            </Text>
            <TextInput
              style={{
                width: "60%",
                borderWidth: 2,
                padding: 7,
                marginLeft: 5,
                marginBottom: 10,
                borderRadius: 15,
              }}
              placeholder="Enter your Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholderTextColor="black"
              autoCapitalize="none"
            />
          </View>

          <View
            style={{
              position: "relative",
              bottom: 0,
              marginTop: 80,
            }}
          ></View>

          <View style={{ alignSelf: "center", width: "80%", marginTop: 75 }}>
            {Loading ? (
              <ActivityIndicator size={"large"} color={"red"} />
            ) : (
              <>
                <Pressable
                  style={{
                    backgroundColor: "#962222",
                    padding: 10,
                    borderRadius: 30,
                    marginBottom: 10,
                    marginLeft: 10,
                  }}
                  onPress={SignIn}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      justifyContent: "center",
                      color: "black",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    Login
                  </Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
