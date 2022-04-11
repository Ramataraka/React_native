import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './ExternalStyles';
import { useState } from 'react';
import data from '../db.json';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Checkbox } from 'react-native-paper';

export default function TodoForm() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const [isSelected, setSelection] = useState(false);
  const addButton = () => {
    setTaskItems([...taskItems, task]);
    setTask('');
  };
  const onDelete = (index) => {
    const deleteItems = [...taskItems];
    deleteItems.splice(index, 1);
    setTaskItems(deleteItems);
  };
  const onEdit = (id) => {
    const EditItems = [...taskItems].find((item, index) => {
      return index === id;
    });
    console.log(EditItems);
  };
  return (
    <View style={styles.container}>
      <View style={styles.writeWrapper}>
        <TextInput
          style={styles.input}
          placeholder={'Write a task'}
          value={task}
          onChangeText={(item) => setTask(item)}
        />
        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={{ fontSize: 30 }} onPress={addButton}>
              +
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Today's tasks</Text>
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index}>
                <View style={styles.item}>
                  <Checkbox
                    value={isSelected}
                    status={isSelected && index? 'checked' : 'unchecked'}
                    onPress={() => setSelection(!isSelected,index)}
                    style={styles.checkbox}
                  />
                  <Text
                    style={{
                      textDecorationLine: isSelected && index ? 'line-through' : 'none',
                      maxWidth: '80%',
                    }}
                  >
                    {item}
                  </Text>
                  <View style={styles.itemLeft}>
                    <FontAwesome
                      name="edit"
                      size={24}
                      color="green"
                      style={styles.icon}
                      onPress={() => onEdit(index)}
                    />
                    <FontAwesome
                      name="trash"
                      size={24}
                      color="firebrick"
                      onPress={() => onDelete(index)}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}
