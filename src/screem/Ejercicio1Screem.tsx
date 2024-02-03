import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

//Arreglo
 const numeros=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]

export const Ejercicio1Screem = () => {

    //Se declaro dos useState para el estado de pares y impares
    //inicializados en arrays vacio de tipo number.
    const [pares, setPares] = useState<number[]>([]);
    const [impares, setImpares] = useState<number[]>([]);

const clasificarNumeros = () => {

    //Se utilizo el metodo filter ya que con este metodo es mas facil hacer la creacion de nuevos arreglos 
    //en este caso para numeros pares y impares.
    const numerosPares = numeros.filter(numero => numero % 2 === 0);
    const numerosImpares = numeros.filter(numero => numero % 2 !== 0)
    setPares(numerosPares);
    setImpares(numerosImpares);

}

  return (
    <View style={styles.container}>
        <Text style={styles.text}>BIENVENIDO</Text>
        <View>
            <Text style={styles.textVector}>Vector: {numeros.join(', ')}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={clasificarNumeros}>
            <Text style={styles.textBoton}>Clasificar</Text>
        </TouchableOpacity>
        <Text style={styles.textVectorP}>Numeros Pares: {pares.join(', ')}</Text>
        <Text style={styles.textVectorI}>Numeros Impares: {impares.join(', ')}</Text>
    </View>
    
  )
}



const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1D97F7',
        justifyContent:'center'
    },

    text:{
        fontSize:40,
        color:'white',
        textAlign:'center',

    },

    textVector:{
        fontSize:20,
        color:'black',
        top:10,

    },

    textVectorP:{
        fontSize:20,
        color:'black',
        top:50,

    },

    textVectorI:{
        fontSize:20,
        color:'black',
        top:70,

    },

    button: {
        alignItems: 'center',
        backgroundColor: '#2448A7',
        padding: 10,
        top:30,

    },
    
    textBoton:{
        color:'white',
        fontSize:20
    }
})