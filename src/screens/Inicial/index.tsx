import React from "react";
import { View, Text } from "react-native";
import { Painel } from "./styles";

export function Inicial () {
    return (
        <View style={Painel.container}>
            <Text>1. BOTE O QUE QUISER AQUI, CASO QUEIRA MUDAR O ICONE DO MENU, VÁ EM "MenuBottomTabs" E MUDE ONDE ESTA COMENTADO</Text>
            <Text>2. PARA MUDAR AS CORES DOS BOTOES DA TELA DE CADASTRAR MENSAGEM, VÁ EM "components/ButtonInterface/style", LÁ TEM OS ESTILOS DOS BOTOES</Text>
        </View>
    )
}