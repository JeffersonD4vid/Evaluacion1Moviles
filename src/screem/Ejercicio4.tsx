import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Ejercicio4 = () => {
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
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'  
        },
    
        content1:{
            
            width:100,
            height:100,
            backgroundColor:'orange',
            borderWidth:7,
            borderColor:'white',
            
        },
    
        
        content2:{
            
            width:100,
            height:100,
            backgroundColor:'black',
            borderWidth:7,
            borderColor:'white',
            top:100
        },
    
        
        content3:{
            
            width:100,
            height:100,
            backgroundColor:'grey',
            borderWidth:7,
            borderColor:'white',
            bottom:100
        },
    
    
    })