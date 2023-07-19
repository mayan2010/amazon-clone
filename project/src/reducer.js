export const initialState = {
    cart: [],
    user: '',
};
export const getTotal = ({ cart }) =>
    cart?.reduce((amount, item) => item.price + amount, 0);
    
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            )
            let newCart = [...state.cart]
            if (index > -1) {
                newCart.splice(index, 1);
            }
            else {
                console.warn('Item not found')
            }
        
            return {
                ...state,
                cart: newCart
                
            }
        case 'USER_LOGIN':
            return {
                ...state,
                   user: state.user + action.user 
            }
        case 'USER_LOGOUT':
            return {
                ...state,
                user: ''
            }
        
        default:
            return state;
    }
};

export default reducer;
