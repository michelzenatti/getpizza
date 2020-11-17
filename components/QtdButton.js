import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const QtdButton = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnLeft}>
                <Text style={styles.textBtn}>-</Text>
            </TouchableOpacity>
            <View style={styles.input}>
                <Text style={styles.textInput}>01</Text>
            </View>
            <TouchableOpacity style={styles.btnRight}>
                 <Text style={styles.textBtn}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row"
    },
    btnLeft:{
        width:40,
        height:40,
        backgroundColor:"#f0bf00",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        elevation:2,
        justifyContent: "center",
        alignItems:"center"
    },
    btnRight:{
        width:40,
        height:40,
        backgroundColor:"#f0bf00",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        elevation:2,
        justifyContent: "center",
        alignItems:"center"
    },
    input:{
        width:40,
        height:40,
        backgroundColor: "#fff",
        elevation:2,
        justifyContent:"center",
        alignItems:"center"

    },
    textBtn:{
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold"
    },
    textInput:{
        fontSize: 15,
        color: "#676767",
        
    }

});

export default QtdButton;