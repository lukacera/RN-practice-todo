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
    <SafeAreaView >
      <Text className=''>My AGpp</Text>
      <TextInput
        onChangeText={setText}
        value={text}
        placeholder="Type something"
      />
      <Button title="Add Item" onPress={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View>
            <Text>{item.value}</Text>
            <TouchableOpacity onPress={() => removeItem(item)}>
              <Text>
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

export default MyFirstApp;
