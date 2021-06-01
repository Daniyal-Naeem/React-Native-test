import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {Button, TextInput, Surface} from 'react-native-paper';

const ProfileScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flex: 1}} bounces={false}>
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: '#082444',
              height: '10%',
              paddingHorizontal: 20,
            }}>
            <Image
              source={require('../assets/arrow.png')}
              style={{
                height: 10,
                width: 30,
                marginTop: 30,
              }}
            />
            <View style={styles.header}>
              <Text style={styles.text_header}>Profile</Text>
            </View>
          </View>
          <Surface style={styles.surface}>
            <Image
              source={require('../assets/add.png')}
              style={{width: 70, height: 70, marginTop: -30}}
            />
            <Text style={{alignItems: 'center', color: 'red', fontSize: 15}}>
              Add Photo
            </Text>
            <View style={styles.action}>
              <TextInput
                mode="outlined"
                label="Name"
                placeholder="Your Name"
                style={styles.textInput}
                autoCapitalize="none"
              />
            </View>
            <View style={styles.action}>
              <TextInput
                mode="outlined"
                label="Username"
                placeholder="Username"
                style={styles.textInput}
                autoCapitalize="none"
              />
            </View>
            <View style={styles.action}>
              <TextInput
                mode="outlined"
                label="Email"
                placeholder="Your Email"
                style={styles.textInput}
                autoCapitalize="none"
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
              />
            </View>
            <View style={styles.action}>
              <TextInput
                mode="outlined"
                label="Father Name"
                placeholder="Father Name"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
              />
            </View>
            <View style={styles.action}>
              <TextInput
                mode="outlined"
                label="Date of Birth"
                placeholder="DD/MM/YYYY"
                style={styles.textInput}
                autoCapitalize="none"
              />
            </View>
            <View style={styles.action}>
              <TextInput
                mode="outlined"
                label="Cnic"
                placeholder="17301-010101010-1"
                style={styles.textInput}
                autoCapitalize="none"
              />
            </View>
          </Surface>
          <View style={styles.button}>
            <Button
              mode="contained"
              color="#FFA500"
              style={{width: 100, borderRadius: 10}}
              onPress={() => navigation.navigate('Sign Up')}>
              Save
            </Button>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  surface: {
    borderRadius: 30,
    paddingTop: 10,
    height: '85%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -25,
  },

  header: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 0,
    marginTop: -15,
  },
  text_header: {
    alignItems: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  action: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    width: '80%',
  },
  textInput: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#05375a',
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 20,
    marginRight: 10,
  },
});
