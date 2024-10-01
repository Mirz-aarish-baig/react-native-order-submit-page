import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert,Image } from 'react-native';

const DeliverySubmitScreen = () => {
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = () => {
    // put sumbmit logic here by mirza arish
    if (address && contact) {
      Alert.alert('Success', 'Your delivery has been submitted!');
    } else {
      Alert.alert('Error', 'Please fill all required fields');
    }
  };

  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../screenpictures/delivery.jpg')} />
      <Text style={styles.title}>Submit Your Delivery</Text>

      <TextInput
        placeholder="Delivery Address"
        style={styles.input}
        value={address}
        onChangeText={setAddress}
      />
      
      <TextInput
        placeholder="Contact Information"
        style={styles.input}
        value={contact}
        onChangeText={setContact}
      />
      
      <TextInput
        placeholder="Special Instructions (Optional)"
        style={styles.input}
        value={instructions}
        onChangeText={setInstructions}
      />
      
      <View style={styles.buttonContainer}>
        <Button title="Submit Delivery" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 10,
    marginTop: 0,
    marginLeft: 40,
  },
  buttonContainer: {
    marginTop: 20,

    
  },
});

export default DeliverySubmitScreen;
