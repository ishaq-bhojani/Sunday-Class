import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {

  const [inputData, setInputData] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    setTodoList(prevValue => [...prevValue, { key: Date.now().toString(), data: inputData }]);
  };

  const deleteTodo = (id) => {
    setTodoList(prevValue => prevValue.filter(todo => todo.key !== id));
  }
  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.input} value={inputData} onChange={(e) => setInputData(e.target.value)} />
        <Button title='ADD' onPress={addTodo} />
      </View>
      <View>
        <FlatList data={todoList} renderItem={todo => <TouchableOpacity onPress={deleteTodo.bind(this, todo.item.key)}><Text style={styles.listItem}>{todo.item.data}</Text></TouchableOpacity>} />
      </View>
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
  input: {
    borderColor: "#000",
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 10
  },
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: "#ccc",
    borderColor: "#000",
    borderStyle: "solid",
    borderWidth: 1,
    width: "80%"
  },
  scrollView: { width: "100%" }
});
