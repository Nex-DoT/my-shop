const split= (title)=>{
    const titlename = title.split(" ");
    const newTitle = `${titlename[0]} ${titlename[1]}`;
    return newTitle
}
const ValidOrNot = (state , id)=>{
    const tureOrFalse =!!state.selectedItems.find(item=> item.id === id);
    return tureOrFalse
}
const quantityCount = (state,id)=>{
    const index = state.selectedItems.findIndex(item => item.id === id)
    if(index=== -1){
        return false
    }else{
        return state.selectedItems[index].quantity
    }
}
export {split , ValidOrNot , quantityCount} 