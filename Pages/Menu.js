import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";

export default function Menu({ navigation }) {
  const [name, setName] = useState("Masedi");
  const [selectedMeals, setSelectedMeals] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [meals] = useState([
    {
      id: 1,
      name: "Kota",
      image: require("../assets/sephatlo.jpg"),
      category: "meal",
      price: 44.99,
      description: "Kota made with polony,vienna,etc",
    },
    ,
    {
      id: 2,
      name: "Combo  Meal",
      image: require("../assets/combo1.jpg"),
      category: "combo",
      price: 64.99,
      description: "Kota + Chips .",
    },
    {
      id: 3,
      name: "Drinks",
      image: require("../assets/drinks.jpg"),
      category: "drink",
      price: 19.99,
      description: " ",
    },
  ]);

  const addToCart = (meal) => {
    const updatedSelectedMeals = { ...selectedMeals };
    if (updatedSelectedMeals[meal.id]) {
      updatedSelectedMeals[meal.id].quantity += 1;
    } else {
      updatedSelectedMeals[meal.id] = { ...meal, quantity: 1 };
    }
    setSelectedMeals(updatedSelectedMeals);
  };

  const filterMealsByCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredMeals = selectedCategory
    ? meals.filter((meal) => meal.category === selectedCategory)
    : meals;

  const renderMeals = (mealList) => {
    return mealList.map((item) => (
      <Pressable
        key={item.id}
        onPress={() => addToCart(item)}
        style={{
          margin: 10,
          padding: 10,
          borderWidth: 1,
          borderRadius: 5,
        }}
      >
        <Image
          style={{ width: 100, height: 80, borderRadius: 15 }}
          source={item.image}
        />
        <Text style={{ fontWeight: "500" }}>{item.name}</Text>
      </Pressable>
    ));
  };

  return (
    <>
      <View style={{ marginTop: 55, marginBottom: 75 }}>
        <Text style={{ fontSize: 40, marginLeft: 10, fontWeight: "700" }}>
          HELLO, {name}
        </Text>
      </View>

      <View style={{ backgroundColor: "gray", borderRadius: 25, margin: 10 }}>
        <Text
          style={{
            textAlign: "center",
            padding: 10,
            fontSize: 25,
            fontFamily: "Optima-Regular",
          }}
        >
          What are you tasting today?
        </Text>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <ScrollView horizontal overScrollMode="true">
          {meals.map((meal) => (
            <Pressable
              key={meal.id}
              onPress={() => filterMealsByCategory(meal.category)}
              style={{ margin: 10 }}
            >
              <Image
                style={{ width: 200, height: 150, borderRadius: 40 }}
                source={meal.image}
              />
              <Text style={{ fontWeight: "700", marginLeft: 15 }}>
                {meal.name}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <ScrollView>{renderMeals(filteredMeals)}</ScrollView>
      </ScrollView>
      <View style={{ alignItems: "center" }}>
        <Pressable
          style={{
            backgroundColor: "#962222",
            padding: 10,
            width: "80%",
            borderRadius: 30,
            marginBottom: 30,
            marginTop: 10,
            opacity: Object.keys(selectedMeals).length === 0 ? 0.5 : 1,
          }}
          onPress={() =>
            Object.keys(selectedMeals).length !== 0 &&
            navigation.navigate("Checkout", { cart: selectedMeals })
          }
          disabled={Object.keys(selectedMeals).length === 0}
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
            Proceed To Checkout
          </Text>
        </Pressable>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
