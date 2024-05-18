import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const MyFirstApp = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState<{id:string, value: string}[]>([]);

  const addItem = () => {
    if (text.trim() !== '') {
      setItems([...items, { id: Math.random().toString(), value: text }]);
      setText('');
    }
  };

  const removeItem = (itemToDelete: {id:string, value:string}) => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemToDelete.id));
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>My First App</Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Type something"
      />
      <Button title="Add Item" onPress={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View className=''>
            <Text
            style={styles.itemText}>{item.value}</Text>
            <TouchableOpacity onPress={() => removeItem(item)}>
              <Text style={styles.removeButton}>
                <AntDesign name="closecircle" size={24} color="red" 
                />              
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 5,
    backgroundColor: 'yellow',
    marginVertical: 5,
  },
  itemText: {
    fontSize: 18,
  },
  removeButton: {
    fontSize: 18,
    color: 'red',
    paddingHorizontal: 10,
  }
});

export default MyFirstApp;
