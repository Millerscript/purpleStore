import React, { Component } from 'react';
import HomeView from './components/home-overview';
import {PRODUCTS} from '../../data.js'
import axios from 'axios';
const API_BASE = "http://broommer.com/api/test_app_products";
class Home extends Component{

    state = {
        products:[]
    };
    
    componentDidMount(){
        this.getProductsFromApi();
    }
    
    async getProductsFromApi(){

        try{
            const data = await axios.post(API_BASE);
            if(data){
              this.setState({
                products:data.data
              })
              console.log(data.data)
            }
        }catch(err){
            console.log(err);
        }

    }
    

    render(){
        return(
            <HomeView navigation={ this.props.navigation } products={this.state.products}/> 
        );
    }
}

//export default Home;
/*
    Para crear el enlace entre Redux y React Native, debemos crear una función que se llama mapStateToProps
    el nombre del state es el que se crea en reducers/index.js, 'heroes'
*/
export default Home;