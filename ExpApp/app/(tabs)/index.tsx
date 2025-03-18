import {StyleSheet} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from '../../Screens/Allexpenses';
import RecentExpenses from '../../Screens/Recentexpenses';
import ManageExpenses from '../../Screens/Manageexpenses';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import IconButton from '../../components/ui/iconbutton';
import ExpenseContextProvider from '../../store-cotext/context-api';
import { StatusBar } from 'expo-status-bar';
import ExpensesItem from '@/components/ExpenseItem';
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomTabFunction(){
  return (
  <BottomTab.Navigator 
  screenOptions={({navigation})=>({headerStyle:{backgroundColor:'hotpink'}, 
  headerTintColor:'white', 
  tabBarStyle:{backgroundColor:'hotpink'}, 
  tabBarActiveTintColor:'white', 
  tabBarInactiveTintColor:'grey',
  headerRight:()=> <IconButton name='plus' size={25} color={'white'} 
  onPress={()=> {navigation.navigate('ManageExpenses')}}/>
 
  })}>
    <BottomTab.Screen name='RecentExpenses' component={RecentExpenses} options={{title:'Recent Expenses', tabBarIcon:()=>(<MaterialIcons name="recent-actors" size={24} color="white" />)}}/>
    <BottomTab.Screen name='AllExpenses' component={AllExpenses} options={{title:'All Expenses',tabBarIcon:()=>(<AntDesign name="wallet" size={24} color="white" />)}}/>
  </BottomTab.Navigator>
  )
}

export default function App(){
  return(
    <><StatusBar style='light' />
    <ExpenseContextProvider>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'hotpink' } }}>
        <Stack.Screen name='BottomTab' component={BottomTabFunction} options={{ headerShown: false }} />
        <Stack.Screen name='ManageExpenses' component={ManageExpenses} />
      </Stack.Navigator>
    </ExpenseContextProvider></>
   
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:70,
    textAlign:'center'
  }

})