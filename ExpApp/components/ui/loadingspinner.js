import { View, ActivityIndicator, StyleSheet} from 'react-native'

export default function Loadingoverlay(){
    return (
        <View style={styles.loading}>
            <ActivityIndicator size='large' color='white'/>
        </View>
    )
}
const styles= StyleSheet.create({
    loading:{
        backgroundColor:'deeppink',
        flex:1,
        justifyContent:'center'
    }
})