/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {SvgXml} from 'react-native-svg';
import {svgXml} from '../assets/svg';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {
  Easing,
  Linking,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import {
  COLOR_WHITE,
  COLOR_BACKGROUND,
  COLOR_GRAY,
  COLOR_PRIMARY,
} from '../assets/color';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {Safe} from '../components/Safe';

import HomeScreen from '../screens/home/HomeScreen';
import ListMainScreen from '../screens/list/ListMainScreen';
import MapScreen from '../screens/map/MapScreen';
import MypageScreen from '../screens/mypage/MypageScreen';
import UserDataChangeScreen from '../screens/mypage/UserDataChangeScreen';

const BottomTab = createBottomTabNavigator();
const iconSize = 17;

const customCardStyleInterpolator = ({current, next, layouts}) => {
  return {
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.width, 0], // transition from right to left
          }),
        },
        {
          scale: next
            ? next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0.9],
              })
            : 1,
        },
      ],
    },
    overlayStyle: {
      opacity: current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
      }),
    },
  };
};

const HomeStack = createStackNavigator();
function HomeNavigator() {
  return (
    <Safe color={COLOR_PRIMARY}>
      <HomeStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          // gestureEnabled: true,
          // cardOverlayEnabled: true,
          // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          cardStyleInterpolator: customCardStyleInterpolator,
        }}>
        <HomeStack.Screen name="Home" component={HomeScreen} />
      </HomeStack.Navigator>
    </Safe>
  );
}

const MapStack = createStackNavigator();
function MapNavigator() {
  return (
    <Safe color={COLOR_PRIMARY}>
      <MapStack.Navigator
        initialRouteName="Map"
        screenOptions={{
          headerShown: false,
          // gestureEnabled: true,
          // cardOverlayEnabled: true,
          // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          cardStyleInterpolator: customCardStyleInterpolator,
        }}>
        <MapStack.Screen name="Map" component={MapScreen} />
      </MapStack.Navigator>
    </Safe>
  );
}

const ListStack = createStackNavigator();
function ListNavigator() {
  return (
    <Safe color={COLOR_PRIMARY}>
      <ListStack.Navigator
        initialRouteName="ListMain"
        screenOptions={{
          headerShown: false,
          // gestureEnabled: true,
          // cardOverlayEnabled: true,
          // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          cardStyleInterpolator: customCardStyleInterpolator,
        }}>
        <ListStack.Screen name="ListMain" component={ListMainScreen} />
      </ListStack.Navigator>
    </Safe>
  );
}

const MypageStack = createStackNavigator();
function MypageNavigator() {
  return (
    <Safe color={COLOR_PRIMARY}>
      <MypageStack.Navigator
        initialRouteName="Mypage"
        screenOptions={{
          headerShown: false,
          // gestureEnabled: true,
          // cardOverlayEnabled: true,
          // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          cardStyleInterpolator: customCardStyleInterpolator,
        }}>
        <MypageStack.Screen name="Mypage" component={MypageScreen} />
        <MypageStack.Screen
          name="UserDataChange"
          component={UserDataChangeScreen}
        />
      </MypageStack.Navigator>
    </Safe>
  );
}
//

export default function BottomTabNavigator() {
  changeNavigationBarColor(COLOR_PRIMARY);
  return (
    <>
      <StatusBar backgroundColor={COLOR_PRIMARY} />
      <BottomTab.Navigator
        initialRouteName="HomeNavigator"
        screenOptions={{
          tabBarStyle: {
            height: Platform.OS == 'android' ? 48 : 76,
            backgroundColor: COLOR_PRIMARY,
            alignContent: 'center',
            paddingTop: 10,
          },
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            marginTop: 5,
            fontFamily: 'NanumSquareRoundB',
          },
          tabBarLabelPosition: 'below-icon',
          tabBarInactiveTintColor: '#929593',
          tabBarActiveTintColor: COLOR_WHITE,
        }}>
        <BottomTab.Screen
          name="HomeNavigator"
          component={HomeNavigator}
          options={{
            tabBarShowLabel: true,
            tabBarLabel: '홈',
            tabBarIcon: props => (
              <SvgXml
                // fill={props.focused ? '#A55FFF' : '#888888'}
                width={iconSize}
                height={iconSize}
                xml={
                  props.focused ? svgXml.baricon.homeColor : svgXml.baricon.home
                }
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="MapNavigator"
          component={MapNavigator}
          options={{
            tabBarShowLabel: true,
            tabBarLabel: '지도',
            tabBarIcon: props => (
              <SvgXml
                // fill={props.focused ? '#A55FFF' : '#888888'}
                width={iconSize}
                height={iconSize}
                xml={
                  props.focused ? svgXml.baricon.mapColor : svgXml.baricon.map
                }
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="ListNavigator"
          component={ListNavigator}
          options={{
            tabBarShowLabel: true,
            tabBarLabel: '리스트',
            tabBarIcon: props => (
              <SvgXml
                // fill={props.focused ? '#A55FFF' : '#888888'}
                width={iconSize}
                height={iconSize}
                xml={
                  props.focused ? svgXml.baricon.listColor : svgXml.baricon.list
                }
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="MypageNavigator"
          component={MypageNavigator}
          options={{
            tabBarShowLabel: true,
            tabBarLabel: '프로필',
            tabBarIcon: props => (
              <SvgXml
                // fill={props.focused ? '#A55FFF' : '#888888'}
                width={iconSize}
                height={iconSize}
                xml={
                  props.focused
                    ? svgXml.baricon.prifileColor
                    : svgXml.baricon.prifile
                }
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    </>
  );
}
