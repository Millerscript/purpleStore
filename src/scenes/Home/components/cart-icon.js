import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"
import {Text, Right, Button, Badge} from 'native-base';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';

const CartIcon = props => (

    <Right>
        <Button transparent onPress={() => (console.log("Hola")) }>
            <Badge style={styles.badgeHome}>
                <Text style={styles.badgeText}>{ (props.cartItem.size > 0) ? props.cartItem.size : 0  }</Text>
            </Badge>
            <Icon name="shopping-cart" size={28} onPress={() => props.navigation.navigate('CartScreen')} color="#fff"/>
        </Button>
    </Right>
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
    badgeHome:{
        height:25,
        width:25,
        zIndex: 3,
        position: 'absolute',
        right: 0, 
        top: 0,
    },
    badgeText:{
        fontSize: 12,
    }
});

const mapStateToProps = (state) => {
    return {
        cartItem: state.get('products')
    }
}

export default connect(mapStateToProps)(withNavigation(CartIcon));