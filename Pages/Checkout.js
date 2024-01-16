import React from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Checkout({ route, navigation }) {
  const { cart, setCart } = route.params;

  const calculateTotalItems = () => {
    return Object.values(cart).reduce(
      (total, meal) => total + meal.quantity,
      0
    );
  };

  const calculateTotalPrice = () => {
    return Object.values(cart).reduce(
      (total, meal) => total + meal.price * meal.quantity,
      0
    );
  };

  const handleDeleteItem = (mealId) => {
    const updatedCart = { ...cart };
    delete updatedCart[mealId];
    // setCart(updatedCart);
  };

  const renderSelectedMeals = () => {
    return Object.values(cart).map((meal) => (
      <SafeAreaView
        key={meal.id}
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 15,
          marginRight: 20,
          backgroundColor: "#CDD2D3",
        }}
      >
        <Image style={styles.mealImage} source={meal.image} />
        <View style={{ marginLeft: 5 }}>
          <Text style={styles.mealName}>{meal.name}</Text>
          <Text style={styles.mealDescription}>{meal.description}</Text>
          <View
            style={{
              marginTop: 10,
            }}
          >
            <Text style={{ fontWeight: "500", fontSize: 15 }}>
              Quantity: {meal.quantity}
            </Text>
            <Text style={{ fontWeight: "500", fontSize: 15 }}>
              Price: R {meal.price.toFixed(2)}
            </Text>
          </View>
          <Pressable
            onPress={() => handleDeleteItem(meal.id)}
            style={{
              padding: 5,
            }}
          >
            <MaterialCommunityIcons
              style={{ margin: 10 }}
              name="delete"
              size={40}
              color={"white"}
            />
          </Pressable>
        </View>
      </SafeAreaView>
    ));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flex: 1, margin: 15, justifyContent: "space-between" }}>
          {renderSelectedMeals()}
        </View>
      </ScrollView>
      <View style={{ alignItems: "center", marginTop: 20, marginBottom: 10 }}>
        <Text
          style={{
            fontSize: 16,
            marginVertical: 5,
            fontWeight: 800,
          }}
        >
          Total Items: {calculateTotalItems()}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginVertical: 5,
            fontWeight: 800,
          }}
        >
          Total Price: R{calculateTotalPrice().toFixed(2)}
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Pressable
          style={{
            backgroundColor: "#962222",
            padding: 10,
            width: "80%",
            borderRadius: 30,
            marginBottom: 30,
            marginTop: 10,
          }}
          onPress={() => navigation.navigate("Payment")}
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
            Checkout
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  mealContainer: {},
  mealImage: {
    width: 80,
    height: 80,
    borderRadius: 15,
  },

  mealName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  mealDescription: {
    fontSize: 15,
    marginTop: 5,
  },
});
