// App.js

import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Register from './Register';

const Stack = createStackNavigator();

export default function App() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleLogin = () => {
    // Check if the user is already registered
    // You would typically do this by sending a request to a server
    // Here, we'll just use a hardcoded list of registered users
    const registeredUsers = [
      { id: 'user1', pw: 'password1' },
      { id: 'user2', pw: 'password2' },
      { id: 'user3', pw: 'password3' },
    ];
    const user = registeredUsers.find(user => user.id === id);
  
    // Check if the user exists and if the password is correct
    if (user && user.pw === pw) {
      // handle successful login
      console.log(`Welcome, ${user.id}!`);
    } else {
      // handle failed login
      console.log('Invalid ID or password');
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login">
          {props => (
            <View style={styles.container}>
              <Text style={styles.title}>로그인 페이지</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="ID"
                  value={id}
                  onChangeText={setId}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry={true}
                  value={pw}
                  onChangeText={setPw}
                />
              </View>
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>로그인</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Register')}>
                <Text style={styles.buttonText}>회원가입</Text>
              </TouchableOpacity>
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  button: {
    marginBottom: 10,
    width: 100,
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
