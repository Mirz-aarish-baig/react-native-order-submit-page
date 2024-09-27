import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import React from 'react';

export default function Menu() {
    const [isActive, setIsActive] = useState(false);
    const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);

    const toggleActiveSwitch = () => setIsActive(previousState => !previousState);
    const toggleNotificationSwitch = () => setIsNotificationEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Text style={styles.menuText}>Menu</Text>

            <View style={styles.switchContainer}>
                <View style={styles.switchText}>
                    <Text style={styles.label}>Active</Text>
                    <Text style={styles.subLabel}>Turn active to receive new tasks</Text>
                </View>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isActive ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleActiveSwitch}
                    value={isActive}
                />
            </View>

            <View style={styles.switchContainer}>
                <View style={styles.switchText}>
                    <Text style={styles.label}>Notifications</Text>
                    <Text style={styles.subLabel}>Keep your notifications on or off</Text>
                </View>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isNotificationEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleNotificationSwitch}
                    value={isNotificationEnabled}
                />
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Admin Panel</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    menuText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 35,
        marginBottom: 30,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 10,
    },
    switchText: {
        flex: 1,
    },
    label: {
        fontSize: 18,
        fontWeight: '600',
        paddingBottom: 4,
    },
    subLabel: {
        fontSize: 13,
        color: '#888',
    },
    button: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
    },
});
