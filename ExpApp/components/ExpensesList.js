import {View, Text, FlatList, StyleSheet} from 'react-native'
import ExpensesItem from './ExpenseItem'
 


function renderHandlerItem(itemData){
    return <ExpensesItem {...itemData.item}/>
}


function ExpensesList({expenses}){
    return (
    <FlatList data={expenses} 
    renderItem={renderHandlerItem} 
    keyExtractor={(item)=> item.id}/>
    

)
}

export default ExpensesList;

const style= StyleSheet.create({
    
})