import {View, Text, StyleSheet, Alert} from 'react-native'
import Input from './Input';
import { useState } from 'react';
import ButtonPress from '../ui/Button';
import { getFormattedDate } from '../../util/date';

function ExpenseForm ({onCancel, onSubmit, submitButtonlabel, defaultvalue}){
    const [inputvalues, setInputvalues]= useState({
      amount: defaultvalue ? defaultvalue.amount.toString(): '',
      date: defaultvalue ? getFormattedDate(defaultvalue.date): '',
      description: defaultvalue? defaultvalue.description: '',
    })
    
    function inputchnagehandler(inputidentifier, enteredvalue){
        setInputvalues((currentinput)=>{
            return {
                ...currentinput,
                [inputidentifier]:enteredvalue
            }
             
        })
         
    }

 
     

    function submitHandler(){
        const expensedata={
         amount: +inputvalues.amount,
         date: new Date(inputvalues.date),
         description: inputvalues.description
        }
      
        const myamount= !isNaN(expensedata.amount) && expensedata.amount>0;
        const mydate= expensedata.date.toString() !== 'invalid number';
        const mydescription= expensedata.description.trim().length >0

        if (!myamount || !mydate || !mydescription){
           Alert.alert('Invalid Input','Please check your inputs')
           return;
        } 
        onSubmit(expensedata)     
    }

    return (
        <View style={styles.format}>
            <Text style={styles.format1}>Your Expense</Text>
            <View style={styles.rowstyle}>
            <Input style={styles.rowstyle2}
            label='Amount' textInputConfig={{
            keyboardType: 'decimal-pad',
            
            onChangeText: inputchnagehandler.bind(this, 'amount'),
            value: inputvalues.amount
            }}/>
            <Input style={styles.rowstyle2}
            label= 'date' textInputConfig={{
                placeholder:'YYYY-MM-DD',
                keyboardType:'numeric',
                placeholderTextColor:'white',
                maxLength: 10,
                onChangeText: inputchnagehandler.bind(this, 'date'),
                value: inputvalues.date
            }}/>
            </View>
            <Input label= 'Description' textInputConfig={{
                multiline: true,
                autoCapitalize:'none',
                onChangeText: inputchnagehandler.bind(this, 'description'),
                value: inputvalues.description
            }}/>
             <View style={styles.buttonsstyle}>
        <ButtonPress style={styles.buttondesign} mode='flat' onPress={onCancel}>Cancel</ButtonPress>
        <ButtonPress style={styles.buttondesign} onPress={submitHandler}>{submitButtonlabel}</ButtonPress>
    </View>

        </View>
    )
}
export default ExpenseForm;

const styles=StyleSheet.create({
    rowstyle:{
        flexDirection:'row',
        justifyContent:'space-between'
   
    }, 
    rowstyle2:{
        flex:1
    },
    format:{
        marginTop:40,
    },
    format1:{
        color:'white',
        fontSize:26,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:40
    },
    buttonsstyle:{
        flexDirection:'row',
        marginTop:50,
        marginHorizontal:30,
        justifyContent:'space-between',
        alignItems:'center'
       },
       buttondesign:{
        marginHorizontal:10,
        minWidth:120
       }
})