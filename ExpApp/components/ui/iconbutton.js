import {Text, View, Pressable, StyleSheet} from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';



export default function IconButton({onPress,name,size,color }){
    return (
        <Pressable onPress={onPress}>
        <View style={styles.iconstyle}>
        <AntDesign name={name} size={size} color={color}/>
        </View>    
        </Pressable>
    )
}
const styles = StyleSheet.create({
    iconstyle:{
        marginHorizontal:20,
        marginVertical:20
    }
})