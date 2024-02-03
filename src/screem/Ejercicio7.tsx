import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Ejercicio7 = () => {
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
            
           
            
        },
    
        content1:{    
            flex:2,      
            width:'100%',
            height:100,
            backgroundColor:'orange',
            borderWidth:7,
            borderColor:'white',
            alignSelf:'stretch'
        },
    
        
        content2:{
            flex:2,
            width:'100%',
            height:100,
            backgroundColor:'black',
            borderWidth:7,
            borderColor:'white',

        },
    
        
        content3:{
            flex:4,
            width:'100%',
            height:100,
            backgroundColor:'grey',
            borderWidth:7,
            borderColor:'white',
            
        },
    
    
    })