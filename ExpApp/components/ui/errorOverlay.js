import { View, Text, Button,StyleSheet} from 'react-native'

export default function Erroroverlay({message, onpress}){
    return (
        <View style={styles.errorstyle1}>
            <Text style={styles.text}>An Error Occured!</Text>
            <Text style={styles.text2}>{message}</Text>
           <Button style={styles.buttonStyle} onPress={onpress}>Okay!</Button>
        </View>
    )
}
const styles= StyleSheet.create({
    errorstyle1:{
     backgroundColor:'deeppink',
     flex:1,
     justifyContent:'center',
     alignItems:'center'  ,
     padding:25        
    },
    text:{
        color:'white',
        fontSize:30,
        fontWeight:'bold'
    },
    text2:{
        fontSize:20,
        color:'white'
    },
    buttonStyle:{
    borderRadius:10,
    color:'white'
    }
})