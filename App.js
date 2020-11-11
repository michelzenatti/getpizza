import React from 'react';
import {View , Text, StyleSheet} from 'react-native'
import Greeting from './components/Greeting';

const App = () => {
  return(
    <View style={estilo.conteudo}> 
      <Greeting name="Barreto"/>
      <Greeting name="Miranda"/>
      <Greeting name="Michel"/>
      <Greeting name="Alyson"/>
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