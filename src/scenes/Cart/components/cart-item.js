import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image, Dimensions } from 'react-native';
import {Card} from 'native-base';

const {width, height} = Dimensions;

const CartItem = props => (
    <View style={styles.listItem}>
        <View>
            <Image source={{uri: props.item.media}} 
                    style={styles.productMedia}/>
        </View>
        <View style={styles.info}>
            <Text style={styles.textItemName}>{props.item.name}</Text>
            <Text style={styles.textItemPrice}>{props.item.price}</Text>
            <View style={styles.footerItem}>
                <View style={styles.footerWrapItems}>
                    <Text>Cantidad: 1</Text>
                    <Text onPress={() => props.event(props.item)} style={styles.footerRemoveText}>Eliminar</Text>
                </View>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    listItem:{
        borderRadius:4,
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor:'#fff',
        marginBottom: 10,
    },
    productMedia:{
        height: 100,
        width: 100,
        resizeMode: 'cover',
        borderRadius:4,
    },
    info:{
        padding: 6,
    },
    textItemName:{
        color:'#000',
    },
    textItemPrice:{
        color:'#8E1AD6',
        fontWeight: 'bold',
    },
    footerItem:{
        /*position: 'absolute',*/
        right: 0, 
        bottom: 0,
        marginTop: 20,
        width: 200,
    },
    footerWrapItems:{
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    footerRemoveText:{
        color:'#c03',
        marginLeft: 20,
    }
});

export default CartItem;