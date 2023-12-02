import { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import { AddTodo } from './components';



export default function App() {

  const [todos, setTodos] = useState([
    {
      text: 'buy coffee', key: 1, },
    {
      text: 'create an app', key: 2, },
    {
      text: 'play on twitch', key: 3, },
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {  
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long!', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };
  
  
  return (

    <TouchableWithoutFeedback onPress={() => { 
      Keyboard.dismiss()
      console.log("dismiss")} }>
    <View style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content}>
        {/* to form */} 
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>

          <FlatList 
          data={todos}
          renderItem={({item}) => {
           return <TodoItem item={item} handler={pressHandler}/>
          }}
          />
        </View>
      </View>

    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
     marginTop: 20,
  }
});
