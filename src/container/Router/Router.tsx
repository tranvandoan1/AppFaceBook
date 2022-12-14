// In App.js in a new project
import {
  ImageURISource,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  LogBox,
} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconNotifi from 'react-native-vector-icons/Ionicons';
import HomeIcon from 'react-native-vector-icons/AntDesign';
import IconHome from 'react-native-vector-icons/Entypo';
import IconMenu from 'react-native-vector-icons/SimpleLineIcons';
import IconFriend from 'react-native-vector-icons/Feather';
import Home from '../Home/Home';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Size, SizeScale} from '../../assets/size';
import Friend from '../Friend/Friend';
import colors from '../../assets/colors';
// @ts-ignore
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
const Tab = createBottomTabNavigator();

function Router(props: any) {
  const width = SizeScale().width;
  const height = SizeScale().height;
  const widthApp = Size().width;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: widthApp > 739 ? height * 155 : height * 17,
          zIndex: 0,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderColor: 'gray',
        },
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <View></View>,
          tabBarActiveBackgroundColor: '#fff',
          tabBarLabel: ({focused, color}) => (
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 5,
                height: '100%',
                borderColor: colors.color_blue,
                borderTopWidth: focused ? 1 : 0,
                width: '90%',
              }}>
              <IconHome
                name="home"
                size={widthApp > 739 ? width * 8 : width * 40}
                style={{
                  color: focused ? colors.color_blue : '#555555',
                  fontWeight: '600',
                }}
              />
              <Text
                style={{
                  fontSize: widthApp > 739 ? width * 4 : width * 18,
                  fontWeight: '600',
                  color: focused ? colors.color_blue : '#555555',
                }}>
                Trang ch???
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="friend"
        component={Friend}
        options={{
          headerShown: false,
          tabBarIcon: () => <View></View>,
          tabBarActiveBackgroundColor: '#fff',
          tabBarLabel: ({focused, color}) => (
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 5,
                height: '100%',
                borderColor: colors.color_blue,
                borderTopWidth: focused ? 1 : 0,
                width: '90%',
              }}>
              <IconFriend
                name="users"
                size={widthApp > 739 ? width * 8 : width * 40}
                style={{
                  color: focused ? colors.color_blue : '#555555',
                  fontWeight: '600',
                }}
              />
              <Text
                style={{
                  fontSize: widthApp > 739 ? width * 4 : width * 18,
                  fontWeight: '600',
                  color: focused ? colors.color_blue : '#555555',
                }}>
                B???n b??
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="notification"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <View></View>,
          tabBarActiveBackgroundColor: '#fff',
          tabBarLabel: ({focused, color}) => (
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 5,
                height: '100%',
                borderColor: colors.color_blue,
                borderTopWidth: focused ? 1 : 0,
                width: '90%',
                position: 'relative',
              }}>
              <View
                style={{
                  position: 'absolute',
                  top: widthApp > 739 ? height * 2 : width * 2,
                  backgroundColor: 'red',
                  padding: 2,
                  borderRadius: 100,
                  width: widthApp > 739 ? height * 40 : width * 40,
                  height: widthApp > 739 ? height * 40 : width * 40,
                  right: widthApp > 739 ? height * 75 : width * 15,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#fff', fontSize: 12, zIndex: 100}}>
                  3
                </Text>
              </View>
              <IconNotifi
                name="notifications"
                size={widthApp > 739 ? width * 8 : width * 40}
                style={{
                  color: focused ? colors.color_blue : '#555555',
                  fontWeight: '600',
                  zIndex: 1,
                }}
              />
              <Text
                style={{
                  fontSize: widthApp > 739 ? width * 4 : width * 18,
                  fontWeight: '600',
                  color: focused ? colors.color_blue : '#555555',
                }}>
                Th??ng b??o
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="menu"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <View></View>,
          tabBarActiveBackgroundColor: '#fff',
          tabBarLabel: ({focused, color}) => (
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 5,
                height: '100%',
                borderColor: colors.color_blue,
                borderTopWidth: focused ? 1 : 0,
                width: '90%',
              }}>
              <IconMenu
                name="menu"
                size={widthApp > 739 ? width * 8 : width * 40}
                style={{
                  color: focused ? colors.color_blue : '#555555',
                  fontWeight: '600',
                }}
              />
              <Text
                style={{
                  fontSize: widthApp > 739 ? width * 4 : width * 18,
                  fontWeight: '600',
                  color: focused ? colors.color_blue : '#555555',
                }}>
                Menu
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();
function App() {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Router}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
}
const styles = StyleSheet.create({
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
});
export default App;
