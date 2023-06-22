import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

const Welcome = () => {
    return (
        <View style={styles.container1}>
            <View>
                <Text style={styles.title}>SearchingYard</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Image style={styles.power} source={require('../assets/power.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Welcome
const styles = StyleSheet.create({
    container1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:12,
        backgroundColor:'#01747cec',
        height:'15%',
        borderBottomRightRadius:80
    },
    power:{
        height:32,
        width:32,
        tintColor:'#025258ee',
        backgroundColor:'#d5f4f4',
        borderColor:'#606060',
        padding:24,
        borderRadius:50,
    },
    title:{
        color:'#94f5fced',
        fontSize:25,
        fontWeight:'bold'
    }
})
