import React from 'react';
import {
  StyleSheet,
  ImageBackground,
} from 'react-native';

const SplashScreen = ({navigation}) => {

  return (
    <ImageBackground
    blurRadius={0}
    style={styles.background}
    source={require("../assets/logo.png")}
  >
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
    background: {
        flex: 3,
        alignItems: "center",
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
      }, 
});
