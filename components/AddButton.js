import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const AddButton = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnAdd}>
                <Text style={styles.textBtn}>ADICIONAR AO CARRINHO</Text>
            </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row"
    },
    btnAdd:{
        width:40,
        height:40,
        backgroundColor:"#f0bf00",
        elevation:2,
        justifyContent: "right",
        alignItems:"right"
    },
    textBtn:{
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold"
    }
}),

export default AddButton;