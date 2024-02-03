import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Ejercicio2 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.content1}></View>
        <View style={styles.content2}></View>
        <View style={styles.content3}></View>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#1D97F7',
        justifyContent:'flex-start',
        alignItems:'flex-end',
        
    },

    content1:{
        flex:1,
        width:100,
        height:100,
        backgroundColor:'orange',
        borderWidth:7,
        borderColor:'white',
        marginTop:10
    },

    
    content2:{
        flex:5,
        width:100,
        height:100,
        backgroundColor:'black',
        borderWidth:7,
        borderColor:'white',
    },

    
    content3:{
        flex:1,
        width:100,
        height:100,
        backgroundColor:'grey',
        borderWidth:7,
        borderColor:'white',
        marginBottom:10
    },


})