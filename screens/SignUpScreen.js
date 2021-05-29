import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {Button, TextInput, Card} from 'react-native-paper';

const SignUpScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };


  return (
    <ImageBackground
    blurRadius={5}
    style={styles.background}
    source={require("../assets/logo.png")}
  >
    {/* <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.text_header}>Welcome!</Text>
            <Text>To the login page</Text>
    </View> */}
        <Card style={styles.card}>
          <Card.Content>
          <View style={styles.action}>
          <TextInput
            mode="outlined"
            label="Name"
            placeholder="Your Name"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
            />
        </View>
          <View style={styles.action}>
          <TextInput
            mode="outlined"
            label="Email"
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
            />
        </View>
        
        <View style={styles.action}>
          <TextInput
           mode="outlined"
           label="Password"
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange(val)}
            />
        </View>
        <TouchableOpacity>
          <Text style={{color: '#663399', marginTop: 15}}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <Button
            mode="contained"
            color="#FFD700"
            onPress={() => navigation.navigate('Sign Up')}>
            Sign Up
          </Button>
          <Button 
          mode="Text" 
          onPress={() => navigation.navigate('Sign Up')}>
            CREATE ACCOUNT
          </Button>
        </View>
          </Card.Content>
        </Card>
    
    </ImageBackground>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
      },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    paddingTop:20,
    paddingBottom:20,
    marginLeft:8,
    marginBottom:50,
    marginTop:20,
    width:'90%',
    height:'50%'

  },
  text_header: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
