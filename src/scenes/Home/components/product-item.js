import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';

const ProductItem = props => (
    <TouchableHighlight underlayColor={'#f2f2f2'} onPress={ () => { props.navigation.navigate('DetailScreen', props.item) } }>
        <View style={styles.itemContainer}>
            <Image 
                source={{uri: props.item.media}} 
                style={styles.productMedia}
            />
            <Text style={[styles.textItemName, styles.wrapItemItex]}>{props.item.name}</Text>
            <Text style={[styles.textItemPrice, styles.wrapItemItex]}>{props.item.price}</Text>
        </View>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 200,
    },
    listItem:{
        margin: 2,
        width: 201,
        height: 200,
        borderRadius:4,
        borderColor:'#ddd',
        backgroundColor: '#fff',
    },
    wrapItemItex:{
        paddingLeft:4,
        paddingRight: 4,
    },
    textItemName:{
        color:'#000',
    },
    textItemPrice:{
        color:'#8E1AD6',
        fontWeight: 'bold',
    },
    productMedia:{
        height:150,
        resizeMode: 'cover',
        borderRadius:4,
    },

});

export default ProductItem;