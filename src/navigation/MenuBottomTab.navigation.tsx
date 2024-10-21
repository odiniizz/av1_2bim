import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ScreenCadastrar, ScreenListar } from '../screens';
import { Ionicons } from "@expo/vector-icons";
import { colors } from '../styles/colors'

type MenuTabParam = {
    Listar: undefined
    Cadastrar: undefined
}
type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Listar">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveBackgroundColor: colors.secondary,
            tabBarActiveTintColor: colors.white,
            headerShown: false,
            tabBarInactiveBackgroundColor: colors.secondary,
            tabBarInactiveTintColor: colors.white,
        }}
        >
            <Tab.Screen name="Listar" component={ScreenListar}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="home" size={24} color="black" />
                    ),
                }}
            />
            <Tab.Screen name="Cadastrar" component={ScreenCadastrar}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="list" size={24} color="black" />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}