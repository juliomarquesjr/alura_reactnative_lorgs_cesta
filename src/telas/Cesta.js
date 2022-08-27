import React from 'react'
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native'

import Texto from './componentes/Texto'

import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'

const tamanho_tela = Dimensions.get('screen').width

export default function Cesta (){
    return(
        <React.Fragment>
            <Image style={estilos.topo} source={topo} />
            <Texto style={estilos.titulo}>Detalhes da Cesta</Texto>
            <View style={estilos.cesta}>
                <Texto style={estilos.nome}>Cesta de Verduras</Texto>
                <View style={estilos.fazenda}>
                    <Image style={estilos.imagemFazenda} source={logo} />
                    <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
                </View>
                <Texto style={estilos.descricao}>
                    Uma cesta com produtos selecionados 
                    cuidadosamentes da fazenda para 
                    a cosinha.
                </Texto>
                <Texto style={estilos.preco}>R$40,00</Texto>
            </View>
        </React.Fragment>
    )
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * tamanho_tela,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 13,

    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold",
    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 15,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
})