import React,{createContext , useReducer } from 'react';
const initialState ={
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false
}
const sumItem = item=>{
    const itemsCounter = item.reduce((total, product)=>total + product.quantity , 0);
    const total = item.reduce((total , product)=>total + product.price *product.quantity , 0).toFixed(2);
    return {total , itemsCounter}

}
const cartReducer = (state , action)=>{
    switch(action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItem(state.selectedItems),
                checkout : false
            }
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumItem(state.selectedItems)
            }
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
                ...sumItem(state.selectedItems)
            }
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
                ...sumItem(state.selectedItems)
            }
        case "CHECKOUT" :
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true
            }
        case "CLEAR":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: false
            }
        default: 
        return state;
    }  
}
export const CARTContextOfReducer = createContext() ;
const UseReducerContext = ({children}) => {
    const [state , dispatch] = useReducer(cartReducer , initialState)
    return (
        <CARTContextOfReducer.Provider value={{state , dispatch}}>
            {children}
        </CARTContextOfReducer.Provider>
    );
};

export default UseReducerContext;