import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Texto from "../../../components/Texto";

const Item = ({ item: { nome, imagem } }) => {
  return (
    <View style={estilos.item}>
      <Image style={estilos.imagem} source={imagem} />
      <Texto style={estilos.texto} key={nome}>
        {nome}
      </Texto>
    </View>
  );
};
export default Item;

const estilos = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center",
  },
  imagem: {
    height: 46,
    width: 46,
  },
  texto: {
    paddingLeft: 11,
    fontSize: 16,
    lineHeight: 26,
    color: "#464646",
  },
});
