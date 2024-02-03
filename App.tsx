import { SafeAreaView, View } from "react-native";
import { Ejercicio1Screem } from "./src/screem/Ejercicio1Screem";
import { Ejercicio2 } from "./src/screem/Ejercicio2";
import { Ejercicio3 } from "./src/screem/Ejercicio3";
import { Ejercicio4 } from "./src/screem/Ejercicio4";
import { Ejercicio5 } from "./src/screem/Ejercicio5";
import { Ejercicio6 } from "./src/screem/Ejercicio6";
import { Ejercicio7 } from "./src/screem/Ejercicio7";
import { Ejercicio8 } from "./src/screem/Ejercicio8";
import { Ejercicio9 } from "./src/screem/Ejercicio9";

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>

      <Ejercicio1Screem/>
      {/*
      <Ejercicio2/>
      <Ejercicio3/>
      <Ejercicio4/>
      <Ejercicio5/>
      <Ejercicio6/>
      <Ejercicio7/>
      <Ejercicio8/>
      <Ejercicio9/>
      */}
    </SafeAreaView>
     
    
  )
}

export default App;


