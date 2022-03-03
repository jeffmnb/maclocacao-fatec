import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Text, View } from 'react-native';

import theme from '../../theme';

import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import { Home } from '../pages/Home';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { Favorites } from '../pages/Favorites';
import { UserConfig } from '../pages/UserConfig';

export const TabsRoute = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName=' ' screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: theme.colors.blue,
            tabBarHideOnKeyboard: true,
            tabBarLabelPosition: 'below-icon',
            tabBarStyle: {
                backgroundColor: theme.colors.white,
                borderTopWidth: 0,
                height: heightPercentageToDP('9.5'),
            }
        }}>

            <Tab.Screen name='  ' component={Favorites} options={{

                tabBarIcon: ({ color }) => (
                    <View style={{ top: '15%', justifyContent: 'center', alignItems: 'center', width: 50, height: 50, backgroundColor: theme.colors.white, borderRadius: 6 }}>
                        <AntDesign name="hearto" size={RFValue(25)} color={color} />
                        {/* <Text style={{ fontFamily: theme.fonts.PoppinsBold, fontSize: 11, color: color }}>Home</Text> */}
                    </View>
                )

            }} />


            <Tab.Screen name=' ' component={Home} options={{

                tabBarIcon: ({ color }) => (
                    <View style={{ top: '15%', justifyContent: 'center', alignItems: 'center', width: 50, height: 50, backgroundColor: theme.colors.white, borderRadius: 6 }}>
                        <AntDesign name="home" size={RFValue(26.5)} color={color} />
                        {/* <Text style={{ fontFamily: theme.fonts.PoppinsBold, fontSize: 11, color: color }}>Home</Text> */}
                    </View>
                )

            }} />


            <Tab.Screen name='   ' component={UserConfig} options={{

                tabBarIcon: ({ color }) => (
                    <View style={{ top: '15%', justifyContent: 'center', alignItems: 'center', width: 50, height: 50, backgroundColor: theme.colors.white, borderRadius: 6 }}>
                        <AntDesign name="user" size={RFValue(26.5)} color={color} />
                        {/* <Text style={{ fontFamily: theme.fonts.PoppinsBold, fontSize: 11, color: color }}>Home</Text> */}
                    </View>
                )

            }} />

        </Tab.Navigator>
    )
};