import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { colors } from "../../utils/colors";

const Declinereport = () => {
    const [reason, setReason] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(2);

    const renderStars = () => {
        return [...Array(5)].map((_, index) => (
            <TouchableOpacity key={index} onPress={() => setRating(index + 1)}>
                <Text style={styles.star}>{index < rating ? '★' : '☆'}</Text>
            </TouchableOpacity>
        ));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Decline Report</Text>

            <View style={styles.imageContainer}>
                <Image source={require('../../../assets/decline.png')} style={styles.image} />
            </View>

            <Text style={styles.label}>Reason</Text>
            <TextInput
                value={reason}
                onChangeText={setReason}
                style={styles.input}
                placeholder="Enter reason"
            />

            <Text style={styles.label}>Description</Text>
            <TextInput
                value={description}
                onChangeText={setDescription}
                style={styles.input}
                placeholder="Enter description"
            />

            <Text style={styles.label}>Rate your Decline</Text>
            <View style={styles.ratingContainer}>{renderStars()}</View>

            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitText}>SUBMIT</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: colors.offwhite,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.gray,
        textAlign: 'center',
        marginBottom: 20,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 150,
        height: 200,
        resizeMode: 'contain',
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: colors.white,
        marginBottom: 16,
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    star: {
        fontSize: 30,
        color: colors.red,
        marginHorizontal: 5,
    },
    submitButton: {
        backgroundColor: colors.skyblue,
        alignItems: 'center',
        borderRadius: 8,
        padding: 15,
    },
    submitText: {
        color: colors.white,
        fontSize: 16,
    },
});

export default Declinereport;
