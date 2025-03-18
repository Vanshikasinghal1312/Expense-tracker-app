import {View, Text, StyleSheet} from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput'
import { useContext } from 'react';
import { ExpenseContext } from '@/store-cotext/context-api';

function AllExpenses(){
  const expensesctx =useContext(ExpenseContext)
  return (
  <ExpensesOutput expenses={expensesctx.expenses} expensePeriod= 'Total'/>
)
    
}
export default AllExpenses;

const styles = StyleSheet.create({
    container1:{
        marginTop:70,
        textAlign:'center'
      }
    
})