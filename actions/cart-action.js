export function addProductToCart(product){
    console.log(product)
    return {
        type: 'ADD_TO_CART', payload: product
    }
}

export function removeProductFromCart(product){
    return {
        type: 'REMOVE_FROM_CART', payload: product
    }
}

export function removeAllProductsFromCart(){
    return {
        type: 'REMOVE_ALL_FROM_CART'
    }
}