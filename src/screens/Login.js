import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Login({navigation}) {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [hidePass, setHidePass] = React.useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.spacer}>
      <Text style={styles.title}>Log in</Text>
      <View style={styles.inputPass}>
      <MaterialCommunityIcons color={'#b4c0ce'} name="email-multiple" size={25} />
        <TextInput
          placeholder="Email"
          style={styles.inputPassword}
          value={user.email}
          onChangeText={(e) =>
            setUser({
              ...user,
              email: e,
            })
          }
          autoComplete="email"
          keyboardType="email-address"
        />
      </View>
      </View>

      <View style={styles.spacer}>
        <View style={styles.inputPass}>
        <MaterialCommunityIcons color={'#b4c0ce'} name="lock" size={25} />
          <TextInput
          placeholder="Senha"
            style={styles.inputPassword}
            value={user.password}
            secureTextEntry={hidePass}
            onChangeText={(e) =>
              setUser({
                ...user,
                password: e,
              })
            }
            autoComplete="password"
          />
          <TouchableOpacity style={styles.passButton} onPress={()=>setHidePass(!hidePass)}>
            <MaterialCommunityIcons color={'#b4c0ce'} name="eye" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomButtom}>
      <Button title="Log in" color={"#4BBFE4"}
        onPress={() => navigation.navigate('Home')}
      />
       <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.fontButton}>Esqueci minha senha</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: 'white'
  },
  forgotButton: {
    alignSelf: "flex-end",
    marginTop: 5,
  },
  fontButton: {
    color: "#4BBFE4",
  },
  spacer: {
    marginBottom: 30,
  },
  inputPass:{
    flexDirection:'row',    
    padding: 10,
    borderRadius: 5
  },
  inputPassword:{
    paddingLeft: 10,
    width: '75%',
    color: '#b4c0ce'
  },
  passButton:{
    display:'flex',
    alignItems:'center',
    alignContent:'center',
    width: '15%'
  },
  title:{
    fontSize:30,
    padding: 10,
    fontWeight: 'bold'
  },
  
});
