import React from 'react';
import {StyleSheet, View, StatusBar, Image, Dimensions, ToastAndroid } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"
import { Header, Container, Content, Text, Right, Left, Button, Body, Title, List, ListItem } from 'native-base';

const {width, height} = Dimensions;

const DetailView = props => (
    <Container>
        <Header style={styles.header}>
            <StatusBar backgroundColor="#8E1AD6" barStyle="light-content"/>
                <Left>
                    <Button transparent onPress={() => (console.log("Go back")) }>
                        <Icon name="arrow-back" size={28} onPress={() => { props.goBack() } } color="#fff"/>
                    </Button>
                </Left>
            <Body>
                <Title>{props.product.name}</Title>
            </Body>
            <Right>
                <Button transparent onPress={() => (console.log("Hola")) }>
                    <Icon name="more-vert" size={28} onPress={() => console.log("Options")} color="#fff"/>
                </Button>
            </Right>
        </Header>
        <Content>
            <View style={styles.wrapImage}>
                <View style={styles.btnAddToCart}>
                    <Icon name="add-box" size={24} 
                        onPress={ () =>{ 
                            ToastAndroid.show('Has agregado '+ props.product.name+' al carrito de compras!', ToastAndroid.SHORT);
                            props.onPressEvent(props.product) 
                        } } 
                        color="#fff"/>
                </View>
                <Image source={{uri: props.product.media}} style={{height: 350, width: width, flex: 1}}/>
            </View>
            <View style={styles.wrapInfo}>
                <Text>
                    {props.product.description}
                </Text>
                <Text style={styles.textPrice}>
                    {props.product.price}
                </Text>
            </View>
            <View style={styles.wrapInfo}>
                <Text style={styles.informationTitle}>
                    Información del producto
                </Text>
                
                <List>
                    <ListItem>
                        <Text>Talla: M, S, L y XL</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Colores: Rojo, Azul, Verde y Amarillo</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Vendedor: BRMER</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Domicilio: No</Text>
                    </ListItem>
                </List>

            </View>
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
    wrapInfo:{
        padding: 6,
    },
    textPrice:{
        fontWeight: 'bold',
        color: '#8E1AD6'
    },
    wrapImage:{
        width: width,
        height: 350,
    },
    btnAddToCart:{
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#8E1AD6',
        marginBottom: 6,
        marginLeft: 6,
        zIndex: 2,
        width: 40, 
        padding:8,
        flexDirection: 'row',
        position: 'absolute', left: 0, right: 0, bottom: 0,
    },
    informationTitle:{
        fontWeight:'bold',
    }
});

export default DetailView;
