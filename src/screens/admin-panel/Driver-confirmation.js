import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export default function Confirm() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Congrats</Text>

      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/Driver-varification.png")}
          style={styles.image}
        />
      </View>

      <Text style={styles.thank}>Thank You!</Text>
      <Text style={styles.para}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Streets of
        Paris echo with stories of love and art. From the Eiffel Tower’s height
        to Seine’s gentle flow. Cafés and boulevards, where dreams and reality
        blend.
      </Text>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>NEXT</Text>
      </TouchableOpacity>
      <Text style={styles.underlinedText}>Add more info to your Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "white",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "gray",
    textAlign: "center",
    marginBottom: 24,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  
  },
  submitButton: {
    backgroundColor: colors.skyblue,
    alignItems: "center",
    borderRadius: 8,
    padding: 15,
  },
  submitText: {
    color: "white",
    fontSize: 16,
  },
  thank:{
    fontSize: 34,
    fontWeight: "bold",
    color: colors.darkBlue,
    textAlign: "center",
  },
  para:{
    fontSize: 18,
    fontWeight: "thin",
    color: colors.gray,
    textAlign: "center",
    marginTop :18,
    marginBottom: 24,

  },
  underlinedText: {
    fontSize: 20,
    color: colors.gray,
    textDecorationLine: 'underline',
    textAlign: "center",
    marginTop :18,

  },
});