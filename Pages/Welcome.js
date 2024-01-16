import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, Text, View, Pressable } from "react-native";

export default function Welcome({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{ fontFamily: "sans-serif", fontSize: 50, marginBottom: 30 }}
      >
        SEDI's TASTE
      </Text>
      <Image
        style={{
          width: 400,
          height: 400,
          borderRadius: 400 / 2,
          marginBottom: 30,
        }}
        source={require("../assets/sephatlo.jpg")}
      />
      <Text
        style={{
          marginBottom: 50,
          // fontFamily: "Krona One",
          fontSize: 20,
        }}
      >
        HAVE A BITE OF BUNNY
      </Text>
      <Pressable
        style={{
          backgroundColor: "#962222",
          padding: 10,
          width: "80%",
          borderRadius: 30,
          marginBottom: 30,
        }}
        onPress={() => navigation.navigate("Login")}
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
          SignIn
        </Text>
      </Pressable>
      <Pressable
        style={{
          backgroundColor: "#962222",
          padding: 10,
          width: "80%",
          borderRadius: 30,
          marginBottom: 30,
        }}
        onPress={() => navigation.navigate("Register")}
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
          SignUp
        </Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}
