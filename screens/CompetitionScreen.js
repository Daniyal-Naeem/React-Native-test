import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';



const CompetitionScreen = ({navigation}) => {

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
          <Text style={styles.text_header}> 
           Competitions</Text>
        </View>
      </View>
      <View>
        <Image
          source={require('../assets/dani.png')}
          blurRadius={10}
          style={{
            borderRadius:20,
            height:100,
            width:300,
            marginTop:50,
            marginLeft:50
          }} 
          
        />
        <Text
        onPress={() => navigation.navigate('MyVideos')}
         style={{
           fontSize:20,
           color:'white',
           marginTop:-60,
           marginLeft:130
           }}>#NatKhuwan</Text>
      </View>
    </View>
  );
};

export default CompetitionScreen;

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
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
    fontWeight:'bold'
  },
});
