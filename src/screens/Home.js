import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.roundedButton} 
              onPress={() => navigation.navigate('New-Call')}
      >
        <MaterialCommunityIcons style={styles.spacer} name="phone-classic" color={'#FFF'} size={30}/>
        <Text style={styles.textButton}>Abrir chamados</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.roundedButton1}
              onPress={() => navigation.navigate('List-Call')}
      >
        <MaterialCommunityIcons style={styles.spacer} name="history" color={'#FFF'} size={30}/>
        <Text style={styles.textButton}>Histórico de chamados</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.roundedButton2}>
        <MaterialCommunityIcons style={styles.spacer} name="account" color={'#FFF'} size={30}/>
        <Text style={styles.textButton}>Minha conta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.roundedButton3}>
        <MaterialCommunityIcons style={styles.spacer} name="exit-to-app" color={'#FFF'} size={30}/>
        <Text style={styles.textButton}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    padding: 8,
  },
  rounded:{

  },
  roundedButton:{
    backgroundColor: '#4BBFE4',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    alignItems: 'center',
    padding: 20,
    width: 300,
    borderRadius: 15
  },
  roundedButton1:{
    backgroundColor: '#04DE22',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    alignItems: 'center',
    padding: 20,
    width: 300,
    borderRadius: 15
  },
  roundedButton2:{
    backgroundColor: '#DE7204',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    alignItems: 'center',
    padding: 20,
    width: 300,
    borderRadius: 15
  },
  roundedButton3:{
    backgroundColor: '#FA0547',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    alignItems: 'center',
    padding: 20,
    width: 300,
    borderRadius: 15
  },
  textButton:{
    color: '#FFF',
    fontWeight: 'bold',
    width: '80%',
    marginLeft: 30
  },
  spacer:{
    marginLeft:30,
    width: '20%'
  }
});
