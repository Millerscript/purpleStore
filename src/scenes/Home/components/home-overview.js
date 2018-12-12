import React from 'react';
import {StyleSheet, StatusBar, Dimensions} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"
import {Header, Container, Content, Text, Right, Left, Button, Body, Title, Item, Input, Badge} from 'native-base';
import ProductList from './product-list';
import CartIcon from './cart-icon'

const {width, height} = Dimensions;
const itemWidth = ( width - 10 );
const HomeView = props => (
    <Container>
        <Header style={styles.header}>
            <StatusBar backgroundColor="#8E1AD6" barStyle="light-content"/>
            <Left>
                <Button transparent onPress={() => props.navigation.navigate('ProfileScreen')}>
                    <Icon name="account-circle" size={28} onPress={() => props.navigation.navigate('ProfileScreen')} color="#fff"/>
                </Button>
            </Left>
          <Body>
            <Title>Home</Title>
          </Body>
        
          <CartIcon navigation={ props.navigation }/>

        </Header>
        <Content style={styles.containerStyle}>

            <ProductList products={props.products} navigation={ props.navigation }/>

        </Content>
    </Container>
);

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#8E1AD6'
    },
    containerStyle:{
        backgroundColor: "#fafafa",
    },
    inputSearch:{
        marginLeft:6,
        marginRight: 6,
        marginTop: 6,
        backgroundColor: "#fff",
    },
});

export default HomeView;