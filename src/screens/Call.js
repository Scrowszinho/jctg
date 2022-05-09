import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

export default function Call() {
  const[data,setData] = React.useState({
    title:'',
    desc:'',
    local:'',
    equipament:'',
    priority:''
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Abertura de chamado</Text>
      <TextInput style={styles.input} value={data.title} onChange={text=>setData({
      ...data,
      title:text  
    })}
    placeholder={'Digite titulo do chamado'} />
       <TextInput style={styles.input} value={data.local} onChange={text=>setData({
      ...data,
      local:text  
    })}
    placeholder={'Digite o local do chamado'} />
     <TextInput style={styles.input} value={data.equipament} onChange={text=>setData({
      ...data,
      equipament:text  
    })}
    placeholder={'Digite o equipamento a ser utilizado'} />
        <TextInput style={styles.inputArea} value={data.desc} onChange={text=>setData({
      ...data,
      desc:text  
    })}
    placeholder={'Digite descrição do chamado'} 
    multiline={true}
    numberOfLines={5}
    />
    <Button 
    title='Cadastrar chamado'
    color={'#4BBFE4'}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor:'#FFF'
  },
  input:{
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius:5,
    marginBottom: 10,
    marginTop: 10
  },
  inputArea:{
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius:5,
    marginBottom: 10,
    marginTop: 10
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4BBFE4'
  }

});
