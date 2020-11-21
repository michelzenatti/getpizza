import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import GetPizzaHeader from'../components/GetPizzaHeader';
import ProductRow from'../components/ProductRow';

const Details = ()=>{
    const route = useRoute();
    const pizza = route.params.props;
    console.log(pizza);
    return (
        <View>
        <View>
            <Text>pizza{pizza.name}</Text>
        </View>
    <GetPizzaHeader/> 
        </View>
  )
    }
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  logo:{
    width:30,
    height:30
  },
})

export default Details;