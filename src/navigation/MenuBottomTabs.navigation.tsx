import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ScreenInicial } from "../screens";
import { Entypo } from "@expo/vector-icons";
import React from 'react';
import { MensagemStack } from "./MensagemStack"
import { Inicial } from "../screens/Inicial";

type MenuTabParam = {
    Inicial: undefined
    MensagemStack: undefined
}

type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Inicial">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation;
}

export function MenuBottomTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inicial" component={Inicial}
                options={{
                    tabBarIcon: () => (
                        /*O 'name' é o nome do icone, caso vc aperte Ctrl + Espaço, ele da uns exemplos de nome de icones*/
                        <Entypo name="camera" size={27} color="black" />
                    )
                }}
            />

            <Tab.Screen name="MensagemStack" component={MensagemStack}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="mail" size={27} color="black" />
                    )
                }}
            />
        </Tab.Navigator>
    )
}