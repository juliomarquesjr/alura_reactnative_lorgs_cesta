import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Texto({ children, style }){
    let estilo = estilos.texto

    if(style?.fontWeight === 'bold'){
        estilo = estilos.textoNegrito
    }

    return(
        <React.Fragment>
            <Text style={[style, estilo]}>{ children }</Text>
        </React.Fragment>
    )
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal",
    }
})