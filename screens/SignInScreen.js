import React from 'react';
import {View, Text, TouchableOpacity, 
  Platform, StyleSheet,   KeyboardAvoidingView,
  ScrollView} from 'react-native';
import {Button, TextInput, Surface} from 'react-native-paper';

const SignInScreen = ({navigation}) => {
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
    <KeyboardAvoidingView style={{flex:1}}>
    <ScrollView contentContainerStyle={{flex:1}} bounces={false}>
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#FFA500',
          height: '70%',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          paddingHorizontal: 20,
        }}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Login</Text>
        </View>
      </View>
      <Surface style={styles.surface}>
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
            color="#FFA500"
            style={{width: 250, height: 50, borderRadius: 10}}
            onPress={() => navigation.navigate('Sign Up')}>
            Login
          </Button>
          <Button mode="Text" onPress={() => navigation.navigate('Sign Up')}>
            CREATE ACCOUNT
          </Button>
        </View>
      </Surface>
    </View>
    </ScrollView>
  </KeyboardAvoidingView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
  },
  surface: {
    borderRadius: 30,
    paddingTop: 10,
    height: '60%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    marginLeft: 40,
    marginTop: -250,
  },

  header: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop: 20,
  },
  text_header: {
    alignItems: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
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
    marginTop: Platform.OS === 'android' ? 0 : -12,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
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
