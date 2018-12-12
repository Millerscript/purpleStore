import React, { Component } from 'react';
import DetailView from './components/detail-overview';
import {connect} from 'react-redux';
import {addProductToCart} from '../../../actions/cart-action'
class Detail extends Component{
    render(){
        console.log(this.props.navigation.getParam('price', 'default-value'))

        const data = {
            id:this.props.navigation.getParam('id', 'default-value'),
            media:this.props.navigation.getParam('media', 'default-value'),
            name:this.props.navigation.getParam('name', 'default-value'),
            description: this.props.navigation.getParam('description', 'default-value'),
            price:this.props.navigation.getParam('price', 'default-value'),
        };

        const { goBack } = this.props.navigation;
        return(
            <DetailView onPressEvent={this.props.addItemToCart} 
                        product={data} 
                        navigation={ this.props.navigation } 
                        goBack={ goBack }/> 
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
      addItemToCart: (product) => dispatch( addProductToCart(product) )
    }
}
  
export default connect(null, mapDispatchToProps)(Detail);