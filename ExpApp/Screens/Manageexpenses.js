import { useContext, useLayoutEffect, useState } from 'react';
import {View, Text, StyleSheet} from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import ButtonPress from '../components/ui/Button'
import { useSelector,useDispatch } from 'react-redux';
import { addExpenses, deleteExpenses } from '@/store/slice';
import { ExpenseContext } from '@/store-cotext/context-api';
import IconButton from '@/components/ui/iconbutton';
import { getFormattedDate } from '../util/date';
import ExpenseForm from '../components/ManageEXP/ExpenseForm'
import {Postexpense, Getexpense, updateExpense, deleteExpense} from '../util/post'
import Loadingoverlay from '../components/ui/loadingspinner'
import Erroroverlay from '@/components/ui/errorOverlay';

function ManageExpenses({route, navigation}){
  const [issubmitting, setissubmiiting] = useState(false)
  const [error, seterror]=useState()
 const expensectx= useContext(ExpenseContext)

  // const ExpenseID= useSelector((state)=>state.data.ids)
  // const dispatch = useDispatch()

    const editedexpenseID = route.params?.expenseID;
    const isEdit = !!editedexpenseID;
  
   const selectedExpense = expensectx.expenses.find((expense)=> expense.id === editedexpenseID)

   useLayoutEffect(()=> {navigation.setOptions({
    title: isEdit ? 'Edit Expensess': 'Add Expenses',
  })   
} , [navigation,isEdit])




async function deleteHandler(){  
  setissubmiiting(true)
  try{
    expensectx.deleteExpenses(editedexpenseID)
    await deleteExpense(editedexpenseID)
    navigation.goBack()
  } catch(error){
    seterror('could not delete expenses-please try again later!')
    setissubmiiting(false)
  }

} 
function cancelHandler(){
  navigation.goBack()
}
async function ConfirmHandler(expensedata){
  setissubmiiting(true)
  try{
    if(isEdit){
      expensectx.updateExpenses(editedexpenseID, expensedata)
      await updateExpense(editedexpenseID, expensedata)
     } else {
     const id= await Postexpense(expensedata)
      expensectx.addExpenses({...expensedata, id:id});
     }
     navigation.goBack()
  }catch(error){
    seterror('Could not save data- please try again later!')
  }
 

}
 
function deleteerrorhandler(){
  seterror(null)
}

if(error && !issubmitting){
  return <Erroroverlay message={error} onpress={deleteerrorhandler}/>
}

if(issubmitting){
  return <Loadingoverlay />
}

  return (
    <View style={styles.editStyle}>
      <ExpenseForm onCancel={cancelHandler} 
      submitButtonlabel={isEdit ? 'UPDATE': 'ADD'}
      onSubmit={ConfirmHandler}
      defaultvalue={selectedExpense}
      />



      {/* <View style={styles.buttonsstyle}>
        <ButtonPress style={styles.buttondesign} mode='flat' onPress={cancelHandler}>Cancel</ButtonPress>
        <ButtonPress style={styles.buttondesign} onPress={UpdateHandler}>{isEdit ? 'Update' :'add'}</ButtonPress>
    </View> */}
    {isEdit && (
      <View style={styles.editstyle2}>
      <IconButton name='delete' size={24} color="white" onPress={deleteHandler}/>
      </View>
    )}
      
    </View>
  )
   
}
export default ManageExpenses;

const styles = StyleSheet.create({
   editStyle:{
    backgroundColor:'deeppink',
    flex:1,
    padding:20,
    color:'white'
   },
   editstyle2:{
     marginTop:20,
     borderTopColor:'white',
     borderTopWidth:3,
     alignItems:'center' ,
     marginHorizontal:40 ,
     marginVertical:50
   },
  //  buttonsstyle:{
  //   flexDirection:'row',
  //   marginTop:50,
  //   marginHorizontal:30,
  //   justifyContent:'space-between',
  //   alignItems:'center'
  //  },
  //  buttondesign:{
  //   marginHorizontal:10,
  //   minWidth:120
  //  }
})