import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Surface} from 'react-native-paper';
import ItemList from '../screens/ItemList'


const MyVideosScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#082444',
          height: '10%',
          paddingHorizontal: 20,
          borderBottomRightRadius:20,
          borderBottomLeftRadius:20
        }}>
            
         <Image
                    source={require('../assets/arrow.png')}
                    style={{
                      height:10,
                      width:30,
                      marginTop:30
                    }}
               />
        <View style={styles.header}>
          <Text style={styles.text_header}> My Videos</Text>
        </View>
      </View>
      <View  style={{marginTop:20}}>
      <ItemList
         img={require('../assets/dani.png')}
         title="Daniyal Naeem"          
         />
      </View>
      <Surface style={styles.surface}>
      <ItemList
         img={require('../assets/logo.png')}
         title="Naat Khuwan"          
      />
       <ItemList
         img={require('../assets/logo.png')}
         title="Naat Khuwan"          
      />
       <ItemList
         img={require('../assets/logo.png')}
         title="Naat Khuwan"          
      />
       <ItemList
         img={require('../assets/logo.png')}
         title="Naat Khuwan"          
      />
       <ItemList
         img={require('../assets/logo.png')}
         title="Naat Khuwan"          
      />
        </Surface>
    </View>
  );
};

export default MyVideosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  surface: {
    borderRadius: 30,
    backgroundColor:'#f2f2f2',
    paddingTop: 10,
    height: '90%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

  },

  header: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 0,
    marginTop: -35,
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
