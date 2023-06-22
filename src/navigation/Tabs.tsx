import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Remorts from '../screens/Remorts';
import Setting from '../screens/Setting';

const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 4,
                    backgroundColor: '#013c41',
                    borderTopLeftRadius: 18,
                    borderTopRightRadius: 18,
                    height: 80,
                    position: 'absolute',

                }
            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            borderColor: '#ffffff',
                            borderRadius: 50,
                            elevation: 4,
                            backgroundColor: focused ? '#025258ee' : '#e1f9fd',
                            borderWidth: 2, padding: 12
                        }}>
                            <Image source={require('../assets/home1.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: focused ? '#ffffff' : '#000000',
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Remort" component={Remorts}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                borderColor: '#ffffff',
                                borderRadius: 50,
                                elevation: 4,
                                backgroundColor: focused ? '#025258ee' : '#e1f9fd',
                                borderWidth: 2, padding: 12
                            }}
                        >
                            <Image source={require('../assets/remote-control.png')}
                                style={{
                                    height: 35,
                                    width: 45,
                                    tintColor: focused ? '#ffffff' : '#000000',

                                }}
                            />
                        </View>
                    )
                }} />
            <Tab.Screen name='Setting' component={Setting}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                borderColor: '#ffffff',
                                borderRadius: 50,
                                elevation: 4,
                                backgroundColor: focused ? '#025258ee' : '#e1f9fd',
                                borderWidth: 2, padding: 12
                            }}
                        >
                            <Image source={require('../assets/setting.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: focused ? '#ffffff' : '#000000',

                                }}
                            />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({})