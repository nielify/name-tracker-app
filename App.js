import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Alert } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [nameInput, setNameInput] = useState('');
  const [nameList, setNameList] = useState([]);
  
  const addNameHandler = () => {
    if (!nameList.includes(nameInput) && nameInput) {
      setNameList(prevNameList => [...prevNameList, nameInput]);
      Alert.alert('System', `${nameInput} is added to the list.`);
      setNameInput('');
    } 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name Tracker App</Text>

      <TextInput 
        style={styles.nameInput} 
        multiline={true}
        placeholder="Enter name here..."
        onChangeText={setNameInput}
        value={nameInput}
      />
      <View style={styles.buttonContainer}>
        <Button 
          title="Add"
          style={styles.button}
          onPress={addNameHandler}
        />
      </View>

      <Text style={styles.nameListText}>Name List:</Text>
      <ScrollView style={styles.nameListScroll}>
        {nameList.map(name => (
          <View key={name} style={styles.nameContainer}>
            <Text style={styles.nameText}> {name}</Text>
          </View>
        ))}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  nameInput: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 8,
    width: 200,
    margin: 5,
    textAlign: 'center',
    marginVertical: 15,
  },
  buttonContainer: {
    width: 100,
  },
  nameListScroll: {
    marginBottom: 10,
    height:'50%', 
    width:'100%'
  },
  nameListText: {
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 18,
  },
  nameContainer: {
    width: '100%',
    padding: 10,
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 17,
  }
});
