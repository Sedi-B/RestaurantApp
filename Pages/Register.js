import {
  ImageBackground,
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Ionicons from "@expo/vector-icons/Ionicons";
import app from "../config/firebaseConnect";
import { SafeAreaView } from "react-native";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export default function Register({ navigation }) {
  const navigate = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);
  const auth = getAuth(app);
  const SignUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );
      console.log(response);
      alert("Check Mails");
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
      alert("Registration falied" + error);
    } finally {
      setLoading(false);
    }
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
              style={{ margin: 15 }}
              name="arrow-back-outline"
              size={30}
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
            SIGN UP
          </Text>
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
          <TextInput
            style={{
              width: "60%",
              borderWidth: 2,
              padding: 7,
              marginLeft: 5,
              marginBottom: 10,
              borderRadius: 15,
            }}
            onChangeText={(text) => setEmail(text)}
            placeholder="Enter your email"
            placeholderTextColor="black"
            value={email}
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
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor="black"
            placeholder="Create Password"
            secureTextEntry={true}
            value={password}
            autoCapitalize="none"
            textContentType="newPassword"
          />
          {/* <Text
          style={{ marginLeft: 7, margin: 4, fontWeight: "bold", fontSize: 20 }}
        >
          Confirm Password
        </Text>
        <TextInput
          style={{
            width: "50%",
            borderWidth: 2,
            padding: 7,
            marginLeft: 5,
            marginBottom: 20,
            borderRadius: 15,
          }}
          placeholder={"Confirm Password"}
          value={confirm}
        /> */}

          <View style={{ alignSelf: "center", width: "80%", marginTop: 105 }}>
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
                  onPress={SignUp}
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
                    Register
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
