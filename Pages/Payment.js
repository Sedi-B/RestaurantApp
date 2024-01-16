import React, { useState } from "react";
import { View, Text, TextInput, Pressable, SafeAreaView } from "react-native";
import Modal from "react-native-modal";

export default function PaymentComponent({ navigation }) {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cashAmount, setCashAmount] = useState("");
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const handleCardPayment = () => {
    if (validateCardDetails()) {
      console.log("Processing card payment with card number:", cardNumber);
      console.log("Expiry Date:", expiryDate);
      console.log("CVV:", cvv);
      setIsPaymentSuccessful(true);
    } else {
      alert("Invalid card details. Please check and try again.");
    }
  };

  const validateCardDetails = () => {
    return (
      cardNumber.trim() !== "" && expiryDate.trim() !== "" && cvv.trim() !== ""
    );
  };

  const handleCashPayment = () => {
    console.log("Processing cash payment with amount:", cashAmount);

    setIsPaymentSuccessful(true);
  };

  const closeModal = () => {
    setIsPaymentSuccessful(false);
    setPaymentMethod(null);
    navigation.navigate("Menu");
  };

  return (
    <SafeAreaView style={{ flex: 1, margin: 15, justifyContent: "center" }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          alignSelf: "center",

          margin: 10,
        }}
      >
        Choose Payment Method:
      </Text>

      <Pressable
        style={{
          backgroundColor: "#962222",
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
        }}
        onPress={() => setPaymentMethod("card")}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Pay with Card
        </Text>
      </Pressable>

      {paymentMethod === "card" && (
        <View>
          <Text style={{ fontSize: 16, marginTop: 10, marginBottom: 5 }}>
            Card Details:
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              marginBottom: 10,
              padding: 10,
            }}
            placeholder="Card Number"
            keyboardType="numeric"
            onChangeText={(text) => setCardNumber(text)}
          />
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              marginBottom: 10,
              padding: 10,
            }}
            placeholder="Exp Date (MM/YY)"
            onChangeText={(text) => setExpiryDate(text)}
          />
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              marginBottom: 10,
              padding: 10,
            }}
            placeholder="CVV"
            keyboardType="numeric"
            onChangeText={(text) => setCvv(text)}
          />
          <Pressable
            style={{
              backgroundColor: "#962222",
              padding: 10,
              borderRadius: 5,
              marginTop: 10,
            }}
            onPress={handleCardPayment}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              Process Card Payment
            </Text>
          </Pressable>
        </View>
      )}

      <Pressable
        style={{
          backgroundColor: "#962222",
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
        }}
        onPress={() => setPaymentMethod("cash")}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Pay with Cash
        </Text>
      </Pressable>

      {paymentMethod === "cash" && (
        <View>
          <Text style={{ fontSize: 16, marginTop: 10, marginBottom: 5 }}>
            Cash Details:
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              marginBottom: 10,
              padding: 10,
            }}
            placeholder="Cash Amount"
            keyboardType="numeric"
            onChangeText={(text) => setCashAmount(text)}
          />
          <Pressable
            style={{
              backgroundColor: "#962222",
              padding: 10,
              borderRadius: 5,
              marginTop: 10,
            }}
            onPress={handleCashPayment}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              Process Cash Payment
            </Text>
          </Pressable>

          <Modal isVisible={isPaymentSuccessful}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}
              >
                Order is now being prepared
              </Text>
              <Pressable
                style={{
                  backgroundColor: "#962222",
                  padding: 10,
                  borderRadius: 5,
                }}
                onPress={closeModal}
              >
                <Text style={{ color: "white", textAlign: "center" }}>
                  Close
                </Text>
              </Pressable>
            </View>
          </Modal>
        </View>
      )}
    </SafeAreaView>
  );
}
