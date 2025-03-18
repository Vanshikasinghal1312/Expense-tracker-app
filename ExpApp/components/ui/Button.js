import {Text, View, StyleSheet, Pressable} from 'react-native'

export default function ButtonPress({children, onPress, mode, style}){
    return(
        <View style={style}>
        <Pressable onPress={onPress} >
            <View style={[styles.buttonstyle, mode === 'flat' && styles.flat]}>
                <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
            </View>
        </Pressable>
        </View>
    )
}


const styles= StyleSheet.create({
    buttonstyle:{
        padding:10,
        borderRadius:8,
        backgroundColor:'hotpink',
        alignItems:'center'
    },
    flat:{
        backgroundColor:'aliceblue'
    },
    buttonText:{
        color:'white',
        textAlign:'center'
    },
    flatText:{
        color:'hotpink'
    },
    
})