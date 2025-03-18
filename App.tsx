import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Button,
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import Card from './src/components/Card/Card.js';
export default function TodoApp() {
  const [inputText, setInputText] = useState('');
  const [count, setCount] = useState(0);
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    if (inputText.trim()) {
      //boş değilse ekle
      setTodoList([...todoList, {text: inputText, completed: false}]);
      setInputText(''); //giriş kutusunu temizle
    }
  };
  const toggleComplete = (index: number) => {
    const updatedList = todoList.map((item, i) =>
      i === index ? {...item, completed: !item.completed} : item,
    );
    setTodoList(updatedList);
  };
  useEffect(() => {
    const pendingTasks = todoList.filter(item => !item.completed).length;
    setCount(pendingTasks);
  }, [todoList]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1}}>
          {/* Başlık ve Sayaç */}
          <View style={styles.container_two}>
            <Text style={styles.title}>Yapılacaklar</Text>
            <Text style={styles.count}>{count}</Text>
          </View>

          {/* Yapılacaklar Listesi */}
          <FlatList
            data={todoList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <TouchableOpacity onPress={() => toggleComplete(index)}>
                <Card text={item.text} completed={item.completed} />
              </TouchableOpacity>
            )}
            contentContainerStyle={{paddingBottom: 70}}
          />
          {/* Kullanıcı Girişi */}
          <View style={styles.container_input}>
            <TextInput
              style={styles.input}
              placeholder="Yapılacak..."
              value={inputText}
              onChangeText={setInputText}
              //Kullanıcının yazdığı metni kaydeder
            />
            <View style={styles.seperator} />
            {/* Kaydet Butonu */}

            <TouchableOpacity style={styles.addButton} onPress={addTodo}>
              <Text style={styles.addButtonText}>KAYDET</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#0f2129',
    padding: 5,
  },
  container_two: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 3,
    marginBottom: 10,
  },
  title: {
    fontSize: 38,
    color: '#ffd700',
    fontWeight: 'bold',
    marginTop: 20,
    flex: 1, // Take as much space as possible
  },
  count: {
    fontSize: 38,
    color: '#ffd700',
    fontWeight: 'bold',
    paddingTop: 25,
  },
  container_input: {
    overflow: 'hidden',
    paddingHorizontal: 5,
    backgroundColor: '#a9a9a9',
    borderRadius: 10,
  },
  input: {
    marginTop: 10,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 2,

    marginBottom: 0,
  },
  seperator: {
    marginHorizontal: 7,
    borderWidth: 0.7,
    backgroundColor: 'white',
    borderColor: '#e0e0e0',
  },
  addButton: {
    justifyContent: 'center',
    marginTop: 8,
    backgroundColor: '#708090',
    marginLeft: 20,
    padding: 10,
    width: 340,
    borderColor: '#2f4f4f',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: 'white',
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  taskText: {
    fontSize: 16,
  },
  removeButton: {
    color: 'red',
    fontWeight: 'bold',
  },
});
