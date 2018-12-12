import React, { Component } from 'react';
import CartView from './components/cart-overview';
import {connect} from 'react-redux';
import {removeProductFromCart} from '../../../actions/cart-action';
class Cart extends Component{
    render(){
        console.log("Productos del carrito")
        console.log(this.props.products.toArray())

        const { goBack } = this.props.navigation;
        return(
            <CartView navigation={ this.props.navigation } onPressEvent={this.props.removeItem} products={this.props.products} goBack={ goBack }/> 
        );
    }

}

const mapStateToProps = (state) => {
    return {products: state.get('products')}
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (product) => dispatch( removeProductFromCart(product) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);