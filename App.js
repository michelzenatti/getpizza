import React, {useState} from 'react';
import {View , Text, StyleSheet, TouchableOpacity, TouchableOpacityBase} from 'react-native'

const App = () => {

  const [numero, setNumero] = useState(10);

  function alteraValor(){
    setNumero(numero+10);
  }
   
  
  return(
    <View style={estilo.conteudo}> 
       <TouchableOpacity onPress={alteraValor}>
         <Text>Toque aqui</Text>
        </TouchableOpacity>
        <Text>{numero}</Text>  
    </View>
  )
}

const estilo = StyleSheet.create({
  conteudo:{
    justifyContent: "center",
    alignItems: "center",
    flex:1
  } 
});

export default App;