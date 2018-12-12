import React from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity, StatusBar, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const {width, height} = Dimensions;

const LoginView = props => (
    
    <View style={styles.container}>
        <StatusBar backgroundColor="#8E1AD6" barStyle="light-content"/>
        <View style={styles.wrapForm}>
            <Image style={styles.appName} source={require('../../../../assets/images/logo.png')}/>
            <TextInput placeholder="Correo electrónico..."
                style={styles.input}
                placeholderTextColor='#fff'
                underlineColorAndroid='transparent'/>
            <TextInput placeholder="Contraseña..."
                style={styles.input}
                placeholderTextColor='#fff'
                underlineColorAndroid='transparent'/>
            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => {props.navigation.navigate('HomeScreen')}}>
                <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.footer}>
            <Text style={styles.footerText}>By Miller Mosquera</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: height,
        width: width,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8E1AD6',
    },
    wrapForm:{
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height:400,
        borderColor: '#fff',
    },
    appName:{
        marginBottom: 30,
    },
    input:{
        width:300,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color : "#fff",
        paddingLeft: 15,
        borderRadius: 30,
        marginBottom: 10,
    },
    loginButton:{
        backgroundColor:"#640B9B",
        borderRadius: 8,
        width:200,
        height:40,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButtonText:{
        color:"#fff",
    },
    footer:{
        justifyContent: 'flex-end',
        alignItems:'center',
        textAlign: 'center',
        zIndex: 2,
        width:width,
        height:20,
        position: 'absolute', left: 0, right: 0, bottom: 0,
    },
    footerText:{
        color:'#fff',
    }
});

export default LoginView;