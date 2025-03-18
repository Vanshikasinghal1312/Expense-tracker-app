import { createContext, useReducer} from 'react'
const DUMMY_EXPENSES= [
    {
        id: 'A1',
        description:'A pair of shoes',
        amount:52.53,
        date: new Date('2024-12-18')
    },
    {
        id: 'A2',
        description:'Bag',
        amount:88.53,
        date: new Date('2025-2-15')
    },
    {
        id: 'A3',
        description:'A pair of shirts',
        amount:48.53,
        date: new Date('2024-10-1')
    },
    {
        id: 'A4',
        description:'A pair of pants',
        amount:34.53,
        date: new Date('2024-12-18')
    },
    {
        id: 'A5',
        description:'A pair of sneekers',
        amount:86.53,
        date: new Date('2025-1-1')
    },
    {
        id: 'A6',
        description:'A pair of saree',
        amount:78.53,
        date: new Date('2025-2-17')
    },
    {
        id: 'A7',
        description:'IceCream',
        amount:55.53,
        date: new Date('2024-12-18')
    },
    {
        id: 'A8',
        description:'Hoodie',
        amount:51.83,
        date: new Date('2024-12-18')
    },
    {
        id: 'A9',
        description:'Football',
        amount:10.03,
        date: new Date('2024-12-18')
    },
    {
        id: 'A10',
        description:'Perfume',
        amount:25.13,
        date: new Date('2024-12-18')
    },
    {
        id: 'A11',
        description:'A pair of clips',
        amount:34.53,
        date: new Date('2025-2-25')
    },
    {
        id: 'A12',
        description:'A pair of pins',
        amount:34.53,
        date: new Date('2024-12-18')
    },
]

export const ExpenseContext = createContext({
    expenses:[],
    addExpenses:({description, amount, date}) => {},
    setExpenses:(expenses)=>{},
    deleteExpenses:(id)=>{},
    updateExpenses:(id, {description, amount,date})=>{}
})

function ExpenseReducer(state, action){
    switch (action.type) {
        case 'ADD':
            // const id = new Date().toString() + Math.random().toString()
            // return [{...action.payload,id:id },...state];
            return [action.payload,...state];
        case 'SET':
            const inverted = action.payload.reverse()
            return inverted;
        case 'UPDATE':
            const updatabeExpensesIndex = state.findIndex((expense)=>expense.id === action.payload.id)
            const updatableExpense = state [updatabeExpensesIndex]
            const updateItem ={...updatableExpense,...action.payload.data}
            const updatedexpenses =[...state];
            updatedexpenses[updatabeExpensesIndex]=updateItem
            return updatedexpenses;
        case 'DELETE':
          return state.filter ((expense) => expense.id !==  action.payload)
         default:
        return state;
    }
}

function ExpenseContextProvider ({children}){
const [expensesState, dispatch]= useReducer(ExpenseReducer,DUMMY_EXPENSES)

function addExpenses(expensedata){
   dispatch({type:'ADD', payload: expensedata})
}
function setExpenses(expenses){
    dispatch({type:'SET', payload: expenses})
}
function deleteExpenses (id){
    dispatch({type:'DELETE',payload: id})
}

function UpdateExpenses (id, expensedata){
    dispatch({type:'UPDATE',payload: {id:id, data:expensedata}})
}

const value={
    expenses:expensesState,
    addExpenses:addExpenses,
    setExpenses:setExpenses,
    deleteExpenses:deleteExpenses,
    updateExpenses:UpdateExpenses
}
    return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
}

export default ExpenseContextProvider;