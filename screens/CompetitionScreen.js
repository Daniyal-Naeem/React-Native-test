import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-paper';



const CompetitionScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#4B0082',
          height: '10%',
          paddingHorizontal: 20,
          borderBottomRightRadius:20,
          borderBottomLeftRadius:20
        }}>
         <View style={styles.header}>
          <Text style={styles.text_header}> 
           Competitions</Text>
        </View>
      </View>
      <View style={styles.button}>
          <Button mode="Text" onPress={() => navigation.navigate('MyVideos')}>
            MY VIDEOS
          </Button>
        </View>
    </View>
  );
};

export default CompetitionScreen;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
  },
  surface: {
    borderRadius: 30,
    paddingTop: 10,
    height: '85%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:-40
  },

  header: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 0,
    marginTop: 15,
  },
  text_header: {
    alignItems: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight:'bold'
  },
  action: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    width:'80%',
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
    marginRight:10
  },
});
