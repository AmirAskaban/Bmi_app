import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { Button, Icon, Overlay } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StatusBar } from "expo-status-bar";
import Meteric from './src/Screens/Meteric'
import Imperal from './src/Screens/Imperal'
import Result from './src/Screens/Result'


const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const horizontalAnimation = {
  gestureDirection: "vertical",
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
            }),
          },
        ],
      },
    };
  },
};

const mainState = {
  BMI: 0
}

const reducer = (state = mainState, action) => {
  switch (action.type) {
    case "NEW_BMI":
      return { BMI: action.data }
    default:
      return state;
  }
}
const store = createStore(reducer)

class App extends Component {
  state = {
    visible: false,
  };

  homeTabs = () => {
    return (
      <Tab.Navigator
        initialRouteName="Meteric"
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#757575",
          tabBarStyle: { backgroundColor: "#212121" },
          tabBarLabelStyle: {
            textAlign: "center",
            fontFamily: "W_titr",
            fontSize: "15",
          },
          tabBarIndicatorStyle: {
            borderBottomColor: "#0277BD",
            borderBottomWidth: 1,
          },
        }} >
        <Tab.Screen name="Meteric" component={Meteric} options={{ title: "سانتی متر و کیلوگرم" }} />
        <Tab.Screen name="Imperal" component={Imperal} options={{ title: "اینچ و پوند" }} />
      </Tab.Navigator>
    )
  }

  toggle = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home" children={this.homeTabs}
              options={{
                title: "محاسبه گر شاخص توده بدنی",
                headerTintColor: "#ECEFE1",
                headerTitleAlign: "center",
                headerStyle: {
                  backgroundColor: "#212121"
                },
                headerTitleStyle: {
                  fontFamily: "W_titr",
                  fontSize: 22,
                },
                headerRight: () => (
                  <Icon
                    name="info"
                    type="antDesign"
                    color="white"
                    size={28}
                    onPress={() => this.toggle()}
                  />
                ),
                headerRightContainerStyle: { margin: 10 },
              }} />
            <Stack.Screen name="Result" component={Result}
              options={{
                title: "نتیجه",
                headerTintColor: "#ECEFE1",
                headerTitleAlign: "center",
                headerStyle: {
                  backgroundColor: "#212121"
                },
                headerTitleStyle: {
                  fontFamily: "W_titr",
                  fontSize: 22,
                  fontWeight: "bold",
                },
              }} />
          </Stack.Navigator>
          <View>
            <Overlay
              isVisible={this.state.visible}
              onBackdropPress={this.toggle}
              overlayStyle={{
                backgroundColor: "#343a40",
              }}
            >
              <View
                style={{
                  width: 300,
                  height: 370,
                  alignItems: "center",
                  justifyContent: "flex-start",
                  backgroundColor: "#343a40",
                }}
              >
                <View style={{ height: 30 }} />
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: "center",
                    color: "#f8f9fa",
                    lineHeight: 32,
                    fontFamily: "Slim",
                    padding: 10,
                  }}
                >
                  شاخص توده بدنی یا BMI روشی برای محاسبه میزان چربی‌های بدن
                  فرد بر اساس وزن و قد وی می‌باشد{"\n"} برای اکثر بزرگسالان
                  ایده‌آل این شاخص بین 18.5 تا 24.5 تعریف شده است
                </Text>
                <View style={{ position: "absolute", bottom: 10 }}>
                  <Button
                    title="باشه"
                    onPress={this.toggle}
                    buttonStyle={{ backgroundColor: "#119da4", width: 70 }}
                    titleStyle={{
                      color: "#d7d9ce",
                      fontFamily: "Ojan",
                      fontSize: 20,
                    }}
                  />
                </View>
              </View>
            </Overlay>
          </View>
          <StatusBar style="light" animated={true} />
        </NavigationContainer>
      </Provider>
    )
  }
}
export default App;
