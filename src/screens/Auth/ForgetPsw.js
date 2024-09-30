import { React } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import Fontisto from '@expo/vector-icons/Fontisto';

export default function ForgotPsw(){
    const handleClick = () => {
        alert("Button clicked!");
    }
    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
           <View style={styles.firstContainer}>
            <Text style={styles.heading}>Recovery Password</Text>
            <Text style={styles.para}>Enter the email address associated with your account and we'll send you a link to reset your password.</Text>
           </View>
            <View style={styles.secondContainer}>
            <Text style={styles.email}>E-mail</Text>
            <TextInput style={styles.input} placeholder="Email"></TextInput>
            <Fontisto name="email" size={24} color="rgb(178,180,191)" style={styles.icon}/>
            </View>
                <TouchableOpacity style={styles.button} onPress={()=>handleClick()}><Text style={styles.buttonText}>Send</Text></TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff',
    },
    heading:{
        fontSize:25,
        fontWeight:'bold',
        marginBottom:20,
        color: "rgb(178,180,191)",
    },
    para:{
        fontSize:16,
        marginBottom:20,
        textAlign:'center',
        color: "rgb(178,180,191)",
    },
    input:{
        color: "rgb(178, 180, 191)",
        width:'90%',
        height:40,
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:5,
        padding:10,
    },
    button:{
        backgroundColor:'rgb(15,188,249)',
        padding:10,
        borderRadius:10,
        width:'90%',
        alignItems:'center',
        marginBottom:25,
        height: 60,
        textAlign: "center",
    },
    buttonText:{
        color: 'white',
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center',
        margin: "auto",
    },
    firstContainer:{
        alignItems:'center',
        justifyContent: 'space-between',
        flex:1,
        width: "90%",
        marginTop: 50,
        marginBottom: 20,
    },
    secondContainer:{
        alignItems:'center',
        flex: 1,
        width: "100%",
        marginBottom: 180,
    },
    email:{
        fontSize:16,
        marginBottom:5,
        fontWeight:'bold',
        textAlign:'left',
        width:300,
        color: "rgb(178,180,191)",
    },
    icon:{
        position: 'absolute',
        right: 35,
        top: 32,
    }
    


})
