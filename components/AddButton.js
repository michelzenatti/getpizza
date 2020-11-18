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
        width:190,
        height:40,
        backgroundColor:"#f0bf00",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        elevation:2,
        justifyContent:"flex-end",
        alignItems:"flex-end",
        flexDirection: "row",
        marginHorizontal:150,
    },
    textBtn:{
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold"
    }
});

export default AddButton;