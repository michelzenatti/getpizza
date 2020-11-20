import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import GetPizzaHeader from'../components/GetPizzaHeader';

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
    <FlatList
      data={pizzas}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => 
        <ProductRow
          name={item.name}
          desc={item.desc}
          img={item.img}
          price={item.price}
        />
      }
    />
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
}),

export default Details