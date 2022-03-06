import { createStackNavigator } from '@react-navigation/stack';
import { SignUp } from '../pages/SignUp';
import { Welcome } from '../pages/Welcome';
import { HotelDescription } from '../pages/HotelDescription';
import { TabsRoute } from './tab.routes';
import { ConfirmHotel } from '../pages/ConfirmHotel';
import { UserProps } from '../pages/UserProps';
import { UserProfile } from '../pages/UserProfile';

export const StackRoutes = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name='Home' component={TabsRoute} />
            <Stack.Screen name='HotelDescription' component={HotelDescription} />
            <Stack.Screen name='ConfirmHotel' component={ConfirmHotel} />
            <Stack.Screen name='UserProps' component={UserProps}/>
            <Stack.Screen name='UserProfile' component={UserProfile}/>
        </Stack.Navigator>
    )
};