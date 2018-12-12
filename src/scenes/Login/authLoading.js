import React, { Component } from 'react';
import { View,  ActivityIndicator,StyleSheet, AsyncStorage } from 'react-native';

class AuthLoading extends Component {
  constructor(props) {
    super(props);
    console.log('AuthLoading.js');
    this.validateToken();
  }
  
  validateToken = async () =>{
      try {
        const data = await AsyncStorage.getItem('data');
        if(data){
          const dataUser = JSON.parse(data);
          console.log(dataUser.token);
  
          setTimeout ( ()=>{
            this.props.navigation.navigate(dataUser.token ? 'HomeScreen': 'Signin');
          },2000);
        }else{
          this.props.navigation.navigate('Signin');
        }
      } catch (error) {
          console.log('Error en validateToken...' + error);
          this.props.navigation.navigate('Signin');
      }
  }

  render() {
    return (
      <View style={styles.container}>
          <ActivityIndicator
            size="large"
            color="#0000ff"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8E1AD6'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})

export default AuthLoading;