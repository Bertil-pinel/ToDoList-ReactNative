import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import Task from "./Task";
import Header from "./Header";
import Footer from "./Footer";
import { StyleSheet,ScrollView, Text, View } from 'react-native';

export default function App() {
    
  const [Tasks, setTasks] = useState([
    {"date": "10/12/2023","content": "Ma premiere tache", "isChecked" : false},
    {"date": "10/12/2023","content": "Vaisselle", "isChecked" : false},
    {"date" : "10/12/2023","content": "devoirs", "isChecked" : true},
    {"date" : "10/12/1203","content": "GAMING","isChecked" : true}]);

  const [tasksFilter, setTasksFilter] = useState("");

  const TasksDisplay = Tasks.filter(element => element.content.toUpperCase().includes(tasksFilter));

  const renderTask = (i) => {
    return (
        <Task 
          key={i}
          date={TasksDisplay[i].date}
          content={TasksDisplay[i].content}
          isChecked={TasksDisplay[i].isChecked}
          ID={i}
          Tasks={Tasks}
          setTasks={setTasks}
        />
    );
}

  return (
    <View style={styles.container}>
            <Header
                Tasks={Tasks}
            />

            <ScrollView className="tasks">
              
                    {TasksDisplay.length !== 0?TasksDisplay.map((item, index) => renderTask(index)):<li>Il n'y a aucune tâche correspondante.</li>}
               
            </ScrollView>
                

            
            {/* <Footer
                Tasks={Tasks}
                setTasks={setTasks}
                setTasksFilter={setTasksFilter}
            /> */}
             
      <StatusBar style="auto" />
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
