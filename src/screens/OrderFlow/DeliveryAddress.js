import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import ArrowBack from '../../components/ArrowBack'
import React from 'react'

export default function DeliveryAddress() {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <ArrowBack />
        <Text style={{fontSize: 25, fontWeight: 600}}>Delivery Address</Text>
      </View>

      <View style={styles.cardDiv}>
        <View style={styles.card}>
            <Text style={styles.cardText}>649 Penn street</Text>
            <Text style={styles.cardText}>RedFord, MI 48239</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.cardText}>649 Penn street</Text>
            <Text style={styles.cardText}>RedFord, MI 48239</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.cardText}>649 Penn street</Text>
            <Text style={styles.cardText}>RedFord, MI 48239</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.cardText}>649 Penn street</Text>
            <Text style={styles.cardText}>RedFord, MI 48239</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.cardText}>649 Penn street</Text>
            <Text style={styles.cardText}>RedFord, MI 48239</Text>
        </View>
        <View style={styles.card}>
            <FontAwesome6 name="add" size={24} color="black" style={styles.addIcon} />
            <Text style={styles.cardText}>Add New Address</Text>
        </View>
      </View>

        <TouchableOpacity style={styles.buttonDiv}>
            <Text style={{textTransform: 'uppercase', color: 'white', fontWeight: 500}}>Select Address</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      background: '#F6F5F5',
      padding: 20,
      height: '100%',
    },
    upper: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 40,
    },
    cardDiv: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginTop: 40,
        gap: 3
    },
    card: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        width: Dimensions.get('window').width / 2 - 30,
        height: 120,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText: {
        fontSize: 13,
        color: '#8F92A1',
    },
    buttonDiv: {
        backgroundColor: '#0FBCF9',
        padding: 16,
        borderRadius: 10,
        marginTop: 140,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addIcon: {
        backgroundColor: '#0FBCF9',
        color: '#fff',
        paddingHorizontal: 7,
        paddingVertical: 5,
        borderRadius: 80,
        marginBottom: 5,
    }
})