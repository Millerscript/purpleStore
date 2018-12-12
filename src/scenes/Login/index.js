import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import {StyleSheet, View, Text, AsyncStorage, Dimensions, TouchableOpacity, StatusBar, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const {width, height} = Dimensions;

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: 'mc@gmail.com',
            password: 'junior17',
            error: '',
        }
    }

    onChangeText = (input, text)=>{
        if(input == 'email'){
            this.setState({
                email: text
            })
        }else if(input == 'password'){
            this.setState({
                password: text
            })
        }
    }

    validate = () =>{
        var vBalid = true;
        console.log(this.state);

        if(this.state.email === ""){
            this.setState({error: 'El email es requerido'});
            vBalid = false;
            return;
        }
        
        if(this.state.password === ""){
            this.setState({error: 'El password es requerido'});
            vBalid = false;
            return;
        }

        if(vBalid){
            console.log("VALIDATION DONE!");
            this.setState({error: ''});
            this.login();
        }
    }

    login = async () =>{
        try{
            const userAuth = {
                name: 'Miller Mosquera',
                token: '9028349028349dfdfdf082304',
            };
            console.log(JSON.stringify(userAuth));
            await AsyncStorage.setItem('data', JSON.stringify(userAuth));
            this.props.navigation.navigate('HomeScreen');
        }catch(e){
            console.log(e)
        }

    }

    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor="#8E1AD6" barStyle="light-content"/>
                <View style={styles.wrapForm}>
                    <Image style={styles.appName} source={require('../../../assets/images/logo.png')}/>
                    <TextInput placeholder="Correo electrónico..."
                        style={styles.input}
                        placeholderTextColor='#fff'
                        underlineColorAndroid='transparent'
                        value={this.state.email}
                        onChangeText={(text)=>this.onChangeText('email',text)}/>
                    <TextInput placeholder="Contraseña..."
                        style={styles.input}
                        placeholderTextColor='#fff'
                        underlineColorAndroid='transparent'
                        value={this.state.password}
                        onChangeText={(text)=>this.onChangeText('password',text)}
                        secureTextEntry/>
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={() => this.validate() }>
                        <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>By Miller Mosquera</Text>
                </View>
            </View>
        );
    }

}
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

export default withNavigation(Login);