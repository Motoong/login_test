import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Register() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleRegister = () => {
    // Perform basic validation on ID and password
    if (!id || !pw) {
      alert('ID 혹은 PW를 입력하지 않으셨습니다.');
      return;
    }
  
    // Check if the user is already registered
    // You would typically do this by sending a request to a server
    // Here, we'll just use a hardcoded list of registered users
    const registeredUsers = [
      { id: 'user1', pw: 'password1' },
      { id: 'user2', pw: 'password2' },
      { id: 'user3', pw: 'password3' },
    ];
    const userExists = registeredUsers.some(user => user.id === id);
    if (userExists) {
      alert('이미 등록된 유저입니다.');
      return;
    }
  
    // If the user is not already registered, add them to the list
    registeredUsers.push({ id, pw });
    alert('회원가입을 완료했습니다.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>회원가입</Text>
      </TouchableOpacity>
    </View>
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
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
