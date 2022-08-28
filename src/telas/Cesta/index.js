import React from "react";
import { StyleSheet, View } from "react-native";

import Topo from "./components/Topo";
import Detalhes from "./components/Detalhes";

export default function Cesta({ topo, detalhes }) {
  return (
    <React.Fragment>
      <Topo {...topo} />
      <View style={estilos.cesta}>
        <Detalhes {...detalhes} />
      </View>
    </React.Fragment>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 13,
  },
});
