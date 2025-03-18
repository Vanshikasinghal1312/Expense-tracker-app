import {View, Text, TextInput, StyleSheet} from 'react-native'

function Input ({label, textInputConfig, style}){
    const inputstyle = [styles.input]
    if (textInputConfig && textInputConfig.multiline){
        inputstyle.push (styles.multlineinput)
    }
    return (
        <View style={[styles.textcontainer, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input}{...textInputConfig}/>
        </View>
    )
}
export default Input;

const styles = StyleSheet.create({
    textcontainer:{
        marginHorizontal:10,
        marginVertical:2    
    },
    label:{
        color:'white',
        marginBottom:5,
        fontSize:15      
    },
    input:{
        backgroundColor:'pink',
        color:'deeppink',
        padding:10,
        borderRadius:10,
        fontSize:15
    },
    multlineinput:{
        minHeight:100,
        textAlignVertical:'top',

    }
})