import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, Image, Dimensions, AsyncStorage } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"
import { Button, Container, Header, Left, Content, Body, Title } from 'native-base';
const {width, height} = Dimensions;
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  logout = () =>{
      console.log("Logout...")
    AsyncStorage.clear();
    this.props.navigation.navigate('Signin');
  }

  render() {
    return (
        <Container>
            <Header style={styles.header}>
                <StatusBar backgroundColor="#8E1AD6" barStyle="light-content"/>
                <Left>
                    <Button transparent>
                        <Icon name="arrow-back" size={28} onPress={() => { this.props.navigation } } color="#fff"/>
                    </Button>
                </Left>
                <Body>
                    <Title>
                        Miller Mosquera
                    </Title>
                </Body>
            </Header>
            <Content>
                <View>
                    <View style={styles.wrapMedia}>
                        <Image style={styles.profileMedia} source={{uri:'https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png'}}/>
                    </View>
                    <View style={styles.wrapText}>
                        <Text style={styles.userName}>Miller Mosquera</Text>
                        <Text style={styles.userTagName}>@mcisup</Text>
                    </View>
                    <View style={styles.wrapButton}>
                        <Button transparent style={styles.btnLogout} onPress={() => this.logout() }><Text style={styles.textButton}>Cerrar sesión</Text></Button>
                    </View>
                </View>
            </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#8E1AD6'
    },
    wrapMedia:{
        marginTop: 20,
        height: 100,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapText:{
        height: 100,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userName:{
        fontSize: 20,
        color:'#000'
    },
    userTagName:{
        fontSize:14,
    },
    profileMedia:{
        height: 100,
        width: 100,
    },
    wrapButton:{
        height: 100,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnLogout:{
        width: 150,
    },  
    textButton:{
        color: '#c03',
        fontSize: 14,
    }
});

export default Profile;