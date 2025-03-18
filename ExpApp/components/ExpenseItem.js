import {FlatList, Pressable, Text, View, StyleSheet} from 'react-native'
import { getFormattedDate } from '../util/date';
import { useNavigation } from '@react-navigation/native';
import ExpenseContextProvider from '../store-cotext/context-api'

function ExpensesItem({id,description, amount,date}){
    const navigation= useNavigation();

    function EditExpensepressHandler(){
        navigation.navigate('ManageExpenses', 
            {                                   
                expenseID: id
            }
        )
    }
    return (
    <Pressable onPress={EditExpensepressHandler}>
        <View style={styles.item1}>
            <View >
        <Text style={styles.item2}>{description}</Text>
        <Text style={styles.item2}>{getFormattedDate(date)}</Text>

        {/* <Text style={styles.item2}>{`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`}</Text> */}

        {/* <Text style={styles.item2}>{getFormattedDate(date)}</Text> */}
        </View>
        <View style={styles.item3}>
        <Text style={styles.item4}>${amount}</Text>
        </View>
        </View>
    </Pressable>
    )
}


export default ExpensesItem;

const styles=StyleSheet.create({
    item1:{
        marginVertical:5,
        backgroundColor:'mistyrose',
        flexDirection:'row',
        padding:12,
        borderRadius:15,
        marginHorizontal:20,
        justifyContent:'space-between',
        minWidth:80
    },
    item2:{
        color:'deeppink',
        fontSize:15,
        fontWeight:'bold'

    },
    item3:{
        padding:8,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        borderColor:'lightpink',
        borderWidth:2

    },
    item4:{
        fontWeight:'bold',
        color:'deeppink'
    }

})

