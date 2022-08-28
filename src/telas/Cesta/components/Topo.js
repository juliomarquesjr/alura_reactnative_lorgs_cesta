import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

import Texto from "../../../components/Texto";
import topo from "../../../../assets/topo.png";

const tamanho_tela = Dimensions.get("screen").width;

export default function Topo({ titulo }) {
  return (
    <React.Fragment>
      <Image style={estilos.topo} source={topo} />
      <Texto style={estilos.titulo}>{titulo}</Texto>
    </React.Fragment>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * tamanho_tela,
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
});
