import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView 
    options={{ headerShown: false }} // Hide the header here
    style={styles.container}>
        <View style={styles.logo}></View>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.logoText}>App Logo</Text>
      </View>

      {/* Middle Section */}
      <View style={styles.middle}>
        <Text style={styles.title}>Welcome to Admin Section</Text>
        <Text style={styles.description}>
          consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum
        </Text>
      </View>

      {/* Footer with Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LET'S GET STARTED</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#0FBCF9',
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomStartRadius: 500,
    borderBottomEndRadius: 500,
    position: 'relative',  // Ensure header has a relative position to create a stacking context
    zIndex: 1,  // Header stays on top
  },
  
  logo: {
    backgroundColor: '#9FE4FD',
    width: 139,
    height: 150,
    position: 'absolute',
    top: 143,
    right: -41,
    zIndex: -1,  // Logo should go behind the header due to zIndex
    borderBottomEndRadius: 100,
    borderBottomStartRadius: 1,
    borderTopStartRadius: 1,
    borderTopEndRadius: 10,
  },
  
  
  logoText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  middle: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
  },
  footer: {
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#00AEEF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
