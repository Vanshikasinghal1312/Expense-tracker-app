import {Text, View, StyleSheet} from 'react-native'
import ExpensesSummary from './ExpenseSummary';
import ExpensesList from './ExpensesList';

// const DUMMY_DATA= [
//     {
//         id: 'A1',
//         description:'A pair of shoes',
//         amount:52.53,
//         date: new Date('2024-12-18')
//     },
//     {
//         id: 'A2',
//         description:'Bag',
//         amount:88.53,
//         date: new Date('2025-2-15')
//     },
//     {
//         id: 'A3',
//         description:'A pair of shirts',
//         amount:48.53,
//         date: new Date('2024-10-1')
//     },
//     {
//         id: 'A4',
//         description:'A pair of pants',
//         amount:34.53,
//         date: new Date('2024-12-18')
//     },
//     {
//         id: 'A5',
//         description:'A pair of sneekers',
//         amount:86.53,
//         date: new Date('2025-1-1')
//     },
//     {
//         id: 'A6',
//         description:'A pair of saree',
//         amount:78.53,
//         date: new Date('2025-2-17')
//     },
//     {
//         id: 'A7',
//         description:'IceCream',
//         amount:55.53,
//         date: new Date('2024-12-18')
//     },
//     {
//         id: 'A8',
//         description:'Hoodie',
//         amount:51.83,
//         date: new Date('2024-12-18')
//     },
//     {
//         id: 'A9',
//         description:'Football',
//         amount:10.03,
//         date: new Date('2024-12-18')
//     },
//     {
//         id: 'A10',
//         description:'Perfume',
//         amount:25.13,
//         date: new Date('2024-12-18')
//     },
//     {
//         id: 'A11',
//         description:'A pair of clips',
//         amount:34.53,
//         date: new Date('2024-12-18')
//     },
//     {
//         id: 'A12',
//         description:'A pair of pins',
//         amount:34.53,
//         date: new Date('2024-12-18')
//     },
// ]

function ExpensesOutput({expenses, expensePeriod}){
    return (
        <View style={styles.style1}>
            <ExpensesSummary expenses={expenses} periodName={expensePeriod}/>
            <ExpensesList expenses={expenses}/>
        </View>

    )
}
export default ExpensesOutput;
const styles= StyleSheet.create({
    style1:{
        backgroundColor:'deeppink',
        flex:1
    }
    
})