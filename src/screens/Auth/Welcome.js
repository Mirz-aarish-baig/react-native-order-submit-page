import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.topCircle}>
        <Text style={styles.logoText}>App Logo</Text>
      </View>

      <View style={styles.mainContent}>
        <Text style={styles.titleText}>Welcome!</Text>
        <Text style={styles.subtitleText}>
          consectetur adipiscing elit duis tristique sollicitudin nibh sit amet
          commodo nulla facilisi nullam vehicula ipsum
        </Text>

        <TouchableOpacity style={styles.emailButton}>
          <Icon name="email" size={25} color="#fff" />
          <Text style={styles.buttonText}>Login with E-mail</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.facebookButton}>
          <Icon name="facebook" size={25} color="#fff" />
          <Text style={styles.buttonText}>Login with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton}>
          <FontAwesome name="google" size={25} color="#000" />
          <Text style={styles.goooglebuttonText}>Login with Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Don’t have an account? <Text style={styles.signUpText}>Sign up</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topCircle: {
    backgroundColor: "#00B2FF",
    height: "37%",
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  subtitleText: {
    textAlign: "center",
    color: "#808080",
    marginBottom: 20,
  },
  paginationDots: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },

  emailButton: {
    flexDirection: "row",
    scaleX: 2,
    backgroundColor: "#0FBCF9",
    color: "white",
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  facebookButton: {
    flexDirection: "row",
    backgroundColor: "#4165AE",
    padding: 15,
    color: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  googleButton: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  goooglebuttonText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
  },
  footer: {
    paddingVertical: 20,
    alignItems: "center",
  },
  footerText: {
    color: "#808080",
  },
  signUpText: {
    color: "#00B2FF",
    fontWeight: "bold",
  },
});
