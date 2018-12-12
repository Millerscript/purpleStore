import React, { Component } from 'react';
import { View, FlatList, Dimensions, StyleSheet } from 'react-native';
import ProductItem from './product-item';
import GridView from 'react-native-super-grid';

const {width, height} = Dimensions;
class ProductList extends Component {
    render() {
        return (

            <GridView
                itemDimension={130}
                items={this.props.products}
                style={styles.gridView}
                renderItem={item => (
                    <ProductItem navigation={this.props.navigation} item = {item}/>
            )}/>

        );
    }
}
const styles = StyleSheet.create({
    containerList:{
        marginTop:10,
        justifyContent:'center',
        width: width,
    },
    list: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    gridView: {
        paddingTop: 25,
        flex: 1,
    },
});
export default ProductList;