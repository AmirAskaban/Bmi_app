import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { Button, Icon, Slider } from "react-native-elements";
import { connect } from "react-redux";
import * as Animatable from "react-native-animatable";

class Meteric extends Component {
  state = {
    heightSliderValue: 175,
    weightSliderValue: 85,
    man: true,
  };

  anim1 = (ref) => (this.textH = ref);
  anim2 = (ref) => (this.textW = ref);

  heightIncrease = () => {
    if (this.state.heightSliderValue < 210) {
      this.setState({
        heightSliderValue: (this.state.heightSliderValue * 10 + 2) / 10,
      });
    }
  };
  heightDecrease = () => {
    if (this.state.heightSliderValue > 140) {
      this.setState({
        heightSliderValue: (this.state.heightSliderValue * 10 - 2) / 10,
      });
    }
  };
  weightIncrease = () => {
    if (this.state.weightSliderValue < 125) {
      this.setState({
        weightSliderValue: (this.state.weightSliderValue * 10 + 2) / 10,
      });
    }
  };
  weightDecrease = () => {
    if (this.state.weightSliderValue > 45) {
      this.setState({
        weightSliderValue: (this.state.weightSliderValue * 10 - 2) / 10,
      });
    }
  };

  calculate = () => {
    var h = (this.state.heightSliderValue / 100) ^ 2;
    var w = this.state.weightSliderValue;
    var bmi = Math.round(w / h);
    this.props.NEW(bmi);
    this.props.navigation.navigate("Result");
  };

  render() {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: this.state.man ? "#1B5E20" : "#880f4f",
          }}
        >
          <View
            style={{
              flex: 9,
              justifyContent: "center",
            }}
          >
            <ScrollView
              contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  height: 175,
                  margin: 5,
                  padding: 5,
                }}
              >
                <View
                  style={{
                    width: 145,
                    height: 160,
                    backgroundColor: this.state.man ? "#43A047" : "#FF4071",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 25,
                  }}
                >
                  <Icon
                    name="male"
                    type="font-awesome"
                    size={75}
                    color={this.state.man ? "#f8f9fa" : "#333633"}
                    onPress={() => this.setState({ man: true })}
                  />
                </View>
                <View
                  style={{
                    width: 145,
                    height: 160,
                    backgroundColor: this.state.man ? "#43A047" : "#FF4071",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 25,
                  }}
                >
                  <Icon
                    name="female"
                    type="font-awesome"
                    size={75}
                    color={this.state.man ? "#333633" : "#f8f9fa"}
                    onPress={() => this.setState({ man: false })}
                  />
                </View>
              </View>

              <View style={{ height: 15 }} />

              <View
                style={{
                  justifyContent: "center",
                  margin: 5,
                  marginTop: -5,
                  padding: 5,
                }}
              >
                <View
                  style={{
                    height: 60,
                    backgroundColor: this.state.man ? "#43A047" : "#FF4071",
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                  }}
                >
                  <Slider
                    value={this.state.heightSliderValue}
                    onValueChange={(value) =>
                      this.setState({ heightSliderValue: value })
                    }
                    onSlidingStart={() =>
                      this.textH.animate({ 0: { scale: 1 }, 1: { scale: 1.2 } })
                    }
                    onSlidingComplete={() =>
                      this.textH.animate({ 0: { scale: 1.2 }, 1: { scale: 1 } })
                    }
                    allowTouchTrack={true}
                    animateTransitions={true}
                    maximumValue={210}
                    minimumValue={140}
                    maximumTrackTintColor="#495057"
                    minimumTrackTintColor="#ced4da"
                    thumbStyle={{
                      backgroundColor: this.state.man ? "#80ed99" : "#f9b4ed",
                      width: 30,
                      height: 30,
                    }}
                    step={1}
                    style={{
                      height: 70,
                      marginHorizontal: 20,
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row-reverse",
                    backgroundColor: "yellow",
                    height: 75,
                    justifyContent: "space-between",
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    backgroundColor: this.state.man ? "#43A047" : "#FF4071",
                  }}
                >
                  <Button
                    buttonStyle={{
                      width: 100,
                      height: 75,
                      borderBottomRightRadius: 10,
                      backgroundColor: this.state.man ? "#43A047" : "#FF4071",
                    }}
                    icon={
                      <Icon
                        name="plus"
                        type="antdesign"
                        size={30}
                        color="white"
                      />
                    }
                    onPress={() => this.heightIncrease()}
                  />
                  <Animatable.View ref={this.anim1} duration={200}>
                    <Text
                      style={{
                        height: 75,
                        fontSize: 18,
                        textAlign: "center",
                        textAlignVertical: "center",
                        color: "white",
                        fontFamily: "IRANSans",
                        lineHeight: 36
                      }}
                    >
                      قد (سانتی‌متر) {"\n"}
                      <Text
                        style={{
                          height: 75,
                          fontSize: 20,
                          textAlign: "center",
                          textAlignVertical: "center",
                          color: "white",
                          fontFamily: "IRANSansBlack",
                        }}
                      >
                        {JSON.stringify(this.state.heightSliderValue)}
                      </Text>
                    </Text>
                  </Animatable.View>
                  <Button
                    buttonStyle={{
                      width: 100,
                      height: 75,
                      borderBottomLeftRadius: 10,
                      backgroundColor: this.state.man ? "#43A047" : "#FF4071",
                    }}
                    icon={
                      <Icon
                        name="minus"
                        type="antdesign"
                        size={30}
                        color="white"
                      />
                    }
                    onPress={() => this.heightDecrease()}
                  />
                </View>
              </View>

              <View
                style={{
                  justifyContent: "center",
                  margin: 5,
                  marginTop: -5,
                  padding: 5,
                }}
              >
                <View
                  style={{
                    height: 60,
                    backgroundColor: this.state.man ? "#43A047" : "#FF4071",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                >
                  <Slider
                    value={this.state.weightSliderValue}
                    onValueChange={(value) =>
                      this.setState({ weightSliderValue: value })
                    }
                    onSlidingStart={() =>
                      this.textW.animate({ 0: { scale: 1 }, 1: { scale: 1.2 } })
                    }
                    onSlidingComplete={() =>
                      this.textW.animate({ 0: { scale: 1.2 }, 1: { scale: 1 } })
                    }
                    allowTouchTrack={true}
                    animateTransitions={true}
                    maximumValue={125}
                    minimumValue={45}
                    step={1}
                    style={{
                      height: 70,
                      marginHorizontal: 20,
                    }}
                    maximumTrackTintColor="#495057"
                    minimumTrackTintColor="#ced4da"
                    thumbStyle={{
                      backgroundColor: this.state.man ? "#80ed99" : "#f9b4ed",
                      width: 30,
                      height: 30,
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row-reverse",
                    backgroundColor: this.state.man ? "#43A047" : "#FF4071",
                    height: 75,
                    justifyContent: "space-between",
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}
                >
                  <Button
                    buttonStyle={{
                      width: 100,
                      height: 75,
                      backgroundColor: this.state.man ? "#43A047" : "#FF4071",
                      borderBottomRightRadius: 10,
                    }}
                    icon={
                      <Icon
                        name="plus"
                        type="antdesign"
                        size={30}
                        color="white"
                      />
                    }
                    onPress={() => this.weightIncrease()}
                  />
                  <Animatable.View ref={this.anim2} duration={200}>
                    <Text
                      style={{
                        height: 75,
                        fontSize: 18,
                        textAlign: "center",
                        textAlignVertical: "center",
                        color: "white",
                        fontFamily: "IRANSans",
                        lineHeight: 36
                      }}
                    >
                      وزن (کیلوگرم) {"\n"}
                      <Text
                        style={{
                          height: 75,
                          fontSize: 20,
                          textAlign: "center",
                          textAlignVertical: "center",
                          color: "white",
                          fontFamily: "IRANSansBlack",
                        }}
                      >
                      {JSON.stringify(this.state.weightSliderValue)}
                      </Text>
                    </Text>
                  </Animatable.View>
                  <Button
                    buttonStyle={{
                      width: 100,
                      height: 75,
                      borderBottomLeftRadius: 10,
                      backgroundColor: this.state.man ? "#43A047" : "#FF4071",
                    }}
                    icon={
                      <Icon
                        name="minus"
                        type="antdesign"
                        size={30}
                        color="white"
                      />
                    }
                    onPress={() => this.weightDecrease()}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
          <Animatable.View animation="slideInUp" duration={800}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 70,
                borderTopRightRadius: 25,
                borderTopLeftRadius: 25,
                backgroundColor: "#212121",
              }}
            >
              <Button
                buttonStyle={{
                  width: 300,
                  height: 70,
                  backgroundColor: "#212121",
                }}
                icon={
                  <Icon
                    name="calculator"
                    type="fontisto"
                    size={20}
                    color="white"
                  />
                }
                title="محاسبه "
                titleStyle={{ fontSize: 32, fontFamily: "IRANSans" }}
                onPress={() => this.calculate()}
              />
            </View>
          </Animatable.View>
        </View>
      );
  }
}

function mapStateToProps(state) {
  return {
    BMI: state.BMI,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    NEW: (data) => dispatch({ type: "NEW_BMI", data: data }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Meteric);
