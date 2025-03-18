import ExpensesOutput from '@/components/ExpensesOutput';
import {StyleSheet} from 'react-native'
import {useState, useEffect,useContext} from 'react'
import { getDateMinusdays } from '@/util/date';
import { ExpenseContext } from '@/store-cotext/context-api';
import { Getexpense } from '@/util/post';
import Loadingoverlay from '../components/ui/loadingspinner'
import Erroroverlay from '../components/ui/errorOverlay'


function RecentExpenses(onpress){
  const [isfetching, setisfetching] =useState(true)
  const [error, seterror] = useState()
  const expensesctx =useContext(ExpenseContext) 

 useEffect(()=>{
  async function Myexpp(){
    setisfetching(true)
    try{
      const expenses=  await Getexpense()
     expensesctx.setExpenses(expenses)
    } catch(error){
      seterror('could not fetch expenses!')
    }
    setisfetching(false) 
  }
  Myexpp()
},[])

function errorhandler(){
  seterror(null)
}

if (error && !isfetching){
  return <Erroroverlay message={error} onpress={errorhandler}/>
}

if(isfetching){
 return <Loadingoverlay/>
}

  

  const recentExpenses= expensesctx.expenses.filter((expense)=>{
    const today = new Date()
    const date7daysago = getDateMinusdays (today, 7)
    return (expense.date >=date7daysago) && (expense.date <=today)
  })
  return (
  <ExpensesOutput expenses={recentExpenses} expensePeriod='Last 7 days'/>
  )
  
}
export default RecentExpenses;
const style = StyleSheet.create({
  
  
})