import React from 'react';
import {StyleSheet, View, StatusBar, FlatList, Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"
import { Header, Container, Content, Text, Right, Left, Button, Body, Title, Footer, List, ListItem } from 'native-base';
import CartItem from './cart-item';
const {width, height} = Dimensions;

const CartView = props => (
    <Container backgroundColor="#fafafa">
        <Header style={styles.header}>
            <StatusBar backgroundColor="#8E1AD6" barStyle="light-content"/>
                <Left>
                    <Button transparent onPress={() => (console.log("Go back")) }>
                        <Icon name="arrow-back" size={28} onPress={() => { props.goBack() } } color="#fff"/>
                    </Button>
                </Left>
            <Body>
                <Title>Tus productos</Title>
            </Body>
            <Right>
                <Button transparent onPress={() => (console.log("Hola")) }>
                    <Icon name="more-vert" size={28} onPress={() => console.log("Options")} color="#fff"/>
                </Button>
            </Right>
        </Header>
        <Content>
            <FlatList vertical data={props.products.toArray()} 
                                contentContainerStyle={styles.list} 
                                renderItem={ ({item}) => <CartItem event={props.onPressEvent} navigation={props.navigation} item = {item}/> }
                    />
        </Content>
        <Footer>
            <Button onPress={ () => props.navigation.navigate('FinishScreen') }>
                <Text>Finalizar la compra</Text>
            </Button>
        </Footer>
    </Container>
);

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#8E1AD6'
    },
    containerStyle:{
        backgroundColor: "#fafafa",
    },
    list:{
        backgroundColor: '#fff',
        padding: 6,
        marginLeft: 4,
        marginRight: 4,
    }
});

export default CartView;