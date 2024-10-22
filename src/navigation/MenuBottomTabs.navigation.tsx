import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Screen1 } from "../screens/index";
import { Entypo, Feather } from "@expo/vector-icons";
import React from 'react';
import {MensagemStack} from "./MensagemStack"

type MenuTabParam = {
    Screen1: undefined
    MensagemStack: undefined
}

type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Screen1">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation;
}

export function MenuBottomTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Screen1" component={Screen1}
                options={{
                    tabBarIcon: () => (
                        /*O 'name' é o nome do icone, caso vc aperte Ctrl + Espaço, ele da uns exemplos de nome de icones*/
                        <Entypo name="list" size={27} color="black" />
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