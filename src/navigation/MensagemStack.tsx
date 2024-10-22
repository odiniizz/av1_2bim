import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack";
import {ScreenCadastroMensagem, ScreenMensagem} from "../screens/index"

type MenuStackParam = {
    Mensagem: undefined
    CadMensagem: undefined
}

type MenuScreenNavigation = StackNavigationProp<MenuStackParam, "Mensagem">
export type MenuStackTypes = {
    navigation: MenuScreenNavigation
}

export function MensagemStack() {
    const Stack = createStackNavigator<MenuStackParam>();
    return (
        <Stack.Navigator screenOptions={{
            animationEnabled: true,
            gestureEnabled: false,
            headerShown: false
        }}>
           <Stack.Screen options={{
            headerTitle: "Mensagens"
           }} name="Mensagem" component={ScreenMensagem}/>

           <Stack.Screen options={{
            headerTitle: "Cadastrar Mensagem" 
           }} name="CadMensagem" component={ScreenCadastroMensagem}/>
        </Stack.Navigator>
    )
}