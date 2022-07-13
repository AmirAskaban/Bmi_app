import React, { Component } from "react";
import { Text, View, Share } from "react-native";
import { Button, Icon, Overlay } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import { connect } from "react-redux";
import Rate, { AndroidMarket } from "react-native-rate";

class Result extends Component {
  state = {
    visible: false,
    rated: false,
  };


  toggle = () => {
    this.setState({ visible: !this.state.visible });
  };

  showResult = () => {
    var x = Number(this.props.BMI);
    if (x < 18.6) {
      return (
        <View
          style={{
            alignItems: "center",
            flex: 1,
            justifyContent: "space-evenly",
          }}
        >
          <Text
            style={{
              fontFamily: "Ojan",
              fontSize: 55,
              color: "#0288D1",
            }}
          >
            {JSON.stringify(x)}
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "IRANSansBlack",
              color: "white",
              textAlign: "center",
            }}
          >
            کم وزن
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "300",
              color: "white",
              textAlign: "center",
              lineHeight: 20,
              padding: 10,
              fontFamily: "IRANSansUltraLight",
            }}
          >
            با مراجعه به پزشک نگرانی‌های خود در مورد کمبود وزن خود را بیان کنید.
            پزشک به شما خواهد گفت که چه چیزی مانع وزن گیری شماست و یا اینکه چیزی
            برای نگرانی وجود دارد یا خیر
          </Text>
        </View>
      );
    }
    if (x > 18.6 && x < 24.9) {
      return (
        <View
          style={{
            alignItems: "center",
            flex: 1,
            justifyContent: "space-evenly",
          }}
        >
          <Text
            style={{
              fontFamily: "Ojan",
              fontSize: 55,
              color: "#76FF03",
            }}
          >
            {JSON.stringify(x)}
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "IRANSansBlack",
              color: "white",
            }}
          >
            وزن ایده‌آل
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "300",
              color: "white",
              textAlign: "center",
              lineHeight: 20,
              padding: 10,
              fontFamily: "IRANSansUltraLight",
            }}
          >
            همین روند رو حفظ کن!
          </Text>
        </View>
      );
    }
    if (x > 24.9 && x < 29.9) {
      return (
        <View
          style={{
            alignItems: "center",
            flex: 1,
            justifyContent: "space-evenly",
          }}
        >
          <Text
            style={{
              fontFamily: "Ojan",
              fontSize: 55,
              color: "#FFFF00",
            }}
          >
            {JSON.stringify(x)}
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "IRANSansBlack",
              color: "white",
            }}
          >
            اضافه وزن
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "300",
              color: "white",
              textAlign: "center",
              lineHeight: 20,
              padding: 10,
              fontFamily: "IRANSansUltraLight",
            }}
          >
            بهتر است برای بررسی رژیم غذایی و فعالیت بدنی خود به فرد متخصص مراجعه
            کنید
          </Text>
        </View>
      );
    }
    if (x > 29.9 && x < 34.9) {
      return (
        <View
          style={{
            alignItems: "center",
            flex: 1,
            justifyContent: "space-evenly",
          }}
        >
          <Text
            style={{
              fontFamily: "Ojan",
              fontSize: 55,
              color: "#FF6F00",
            }}
          >
            {JSON.stringify(x)}
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "IRANSansBlack",
              color: "white",
            }}
          >
            چاق
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "300",
              color: "white",
              textAlign: "center",
              lineHeight: 20,
              padding: 10,
              fontFamily: "IRANSansUltraLight",
            }}
          >
            افراد مبتلا به چاقی باید حداقل دو ساعت در هفته فعالیت بدنی داشته
            باشند
          </Text>
        </View>
      );
    }
    if (x > 34.9) {
      return (
        <View
          style={{
            alignItems: "center",
            flex: 1,
            justifyContent: "space-evenly",
          }}
        >
          <Text
            style={{
              fontFamily: "Ojan",
              fontSize: 55,
              color: "#F44336",
            }}
          >
            {JSON.stringify(x)}
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "IRANSansBlack",
              color: "white",
            }}
          >
            چاقی شدید
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "300",
              color: "white",
              textAlign: "center",
              lineHeight: 20,
              padding: 10,
              fontFamily: "IRANSansUltraLight",
            }}
          >
            چاقی شدید بیشترین خطر ابتلا به سایر مشکلات مربوط به سلامتی را دارد.
            بهتر است برای دریافت گزینه‌های درمانی به پزشک مراجعه کنید
          </Text>
        </View>
      );
    }
  };

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "همین الان BMI خودتو حساب کن! مال من " +
          this.props.BMI +
          " بود، می‌تونی از اینجا حسابش کنی | www.google.com",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 9,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#37474F",
          }}
        >
          <Animatable.View
            animation={{
              from: {
                opacity: 0,
              },
              to: {
                opacity: 1,
              },
            }}
            duration={750}
          >
            <View
              style={{
                width: 300,
                height: 350,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#263238",
              }}
            >
              {this.showResult()}
            </View>
          </Animatable.View>
          <View
            style={{
              flexDirection: "row",
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: 70,
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundColor: "#212121",
              borderTopRightRadius: 25,
              borderTopLeftRadius: 25,
            }}
          >
            <Icon
              name="share"
              type="Entypo"
              color="#2979FF"
              size={40}
              onPress={this.onShare}
            />
            <Icon
              name="star"
              type="antdesign"
              color="#FFD600"
              size={40}
              onPress={() => {
                const options = {
                  OtherAndroidURL: "http://www.Google.com/",
                  preferredAndroidMarket: AndroidMarket.Other,
                  preferInApp: false,
                  openAppStoreIfInAppFails: true,
                  fallbackPlatformURL: "http://www.Google.com/",
                };
                Rate.rate(options, (success) => {
                  if (success) {
                    // this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
                    this.setState({ rated: true });
                  }
                });
              }}
            />
            <Icon
              name="comment-medical"
              type="font-awesome-5"
              color="#f8f9fa"
              size={40}
              onPress={() => this.toggle()}
            />
          </View>
          <Overlay
            isVisible={this.state.visible}
            onBackdropPress={() => this.toggle()}
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
                  fontFamily: "IRANSansUltraLight",
                  padding: 10,
                }}
              >
                فراموش نکنید که در یک نتیجه یکسان، بانوان چربی بیشتری دارند؛
                همچنین یک فرد مسن نیز چربی بیشتر نسبت به افراد جوان دارد. شاخص
                توده بدنی جزئیات کافی درمورد وضعیت سلامتی یک فرد ارائه نمی‌دهد
              </Text>
              <View style={{ position: "absolute", bottom: 10 }}>
                <Button
                  title="باشه"
                  titleStyle={{
                    fontSize: 20,
                    color: "#d7d9ce",
                    fontFamily: "Ojan",
                  }}
                  buttonStyle={{ backgroundColor: "#119da4", width: 70 }}
                  onPress={() => this.toggle()}
                />
              </View>
            </View>
          </Overlay>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    BMI: state.BMI,
  };
}

export default connect(mapStateToProps)(Result);
