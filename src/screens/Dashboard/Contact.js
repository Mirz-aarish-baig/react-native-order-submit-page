import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { colors } from "../../utils/colors";
import React, { useState } from "react";

function ContactScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Button Alert

  const handlePress = () => {
    alert("Your Message has been submitted");
  };

  return (
    <ScrollView contentContainerStyle={styles.contain}>
      <View style={styles.contain}>
        <Image
          source={require("../../../assets/Contact.png")}
          style={styles.image}
        />

        <Text style={styles.label}>Name</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>E-mail</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your e-mail"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Message</Text>

        <TextInput
          style={[styles.input, { height: 80 }]}
          placeholder="Enter a message"
          multiline={true}
          numberOfLines={4}
          value={message}
          onChangeText={setMessage}
        />

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    flexGrow: 1, // Allows the ScrollView to grow with the content
    padding: 30,
    alignItems: "center",
    backgroundColor: colors.white,
  },

  image: {
    marginTop: 20,
    marginBottom: 10,
    width: 300,
    height: 200,
  },

  label: {
    fontSize: 15,
    width: Dimensions.get("window").width * .9,
    color: "gray",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 7,
    width: Dimensions.get("window").width * .9,
    marginBottom: 20,
    paddingLeft: 10,
  },
  output: {
    fontSize: 18,
  },

  button: {
    backgroundColor: colors.primary,
    width: Dimensions.get("window").width * .9,
    padding: 15,
    marginTop: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default ContactScreen;
