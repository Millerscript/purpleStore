import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {connect} from 'react-redux';
import {removeAllProductsFromCart} from '../../../actions/cart-action';
const {width, height} = Dimensions;

class Finish extends Component {

    async componentDidMount(){
        console.log("did mount is start")
        this.props.removeItems();
    }

    render() {
        return (
        <View style={styles.container}>
            <Text> Haz finalizado tu compra! </Text>
        </View>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItems: () => dispatch( removeAllProductsFromCart() )
    }
}

const styles = StyleSheet.create({
    container:{
        ...StyleSheet.absoluteFillObject,
        height: height,
        width: width,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8E1AD6',
    }
});
  
export default connect(null, mapDispatchToProps)(Finish);
