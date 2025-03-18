import {View, Text, StyleSheet} from 'react-native'

function ExpensesSummary({expenses,periodName}){
    const expensesSum= expenses.reduce((sum, expenses)=>{
        return sum + expenses.amount
    },0)
    return (
    <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.container2}>{periodName}</Text>
                <Text style={styles.container3}>${expensesSum.toFixed(2)}</Text>
            </View>
           
        </View>
    )
}

export default ExpensesSummary;
const styles= StyleSheet.create({
 container:{
    backgroundColor:'gainsboro',
    padding:15,
    borderRadius:20,
    margin:10,
    
   
 },
 container1:{
    flexDirection:'row',
    justifyContent:'space-between'    
 },
 container2:
 {
    color:'hotpink',
    fontWeight:'bold',
    fontSize:16
 },
 container3:{
    color:'deeppink',
    fontWeight:'bold',
    fontSize:16
 }
    
})