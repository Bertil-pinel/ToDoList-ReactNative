import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import Task from "./Task";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { StyleSheet,ScrollView, Text, View } from 'react-native';

export default function App() {

  const baseURL="http://localhost:3000/Tasks" ;

  const [Tasks, setTasks] = useState(null);

  // client.put(JSON.stringify([
  //     {"date": "10/12/2023","content": "Ma premiere tache", "isChecked" : false},
  //     {"date": "10/12/2023","content": "Vaisselle", "isChecked" : false},
  //     {"date" : "10/12/2023","content": "devoirs", "isChecked" : true},
  //     {"date" : "10/12/1203","content": "GAMING","isChecked": true}] )).then((response) =>{setTasks(response.data)});
    
  React.useEffect(() => {
  axios.get(baseURL).then((response) => {setTasks(response.data);});
  }, []); 

  console.log(Tasks);
  
  const [tasksFilter, setTasksFilter] = useState("");
  
  if(Tasks!=null){  
    const TasksDisplay = Tasks.filter(element => element.content.toUpperCase().includes(tasksFilter));

    axios.put(baseURL,{date: "10/12/2023",content: "Ma gdsgdds tache", isChecked : false}).then((response) =>{setTasks(response.data)});
  }

  const tasksModified = () =>{
    axios.put(baseURL,Tasks).then((response) =>{setTasks(response.data)});
  }

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
            {/* <Header
                Tasks={Tasks}
            />

            <ScrollView style={styles.scroll} className="tasks">
              
                    {TasksDisplay.length !== 0?TasksDisplay.map((item, index) => renderTask(index)):<li>Il n'y a aucune tâche correspondante.</li>}
               
            </ScrollView>
                

            
            <Footer
                Tasks={Tasks}
                setTasks={setTasks}
                setTasksFilter={setTasksFilter}
            />
             
      <StatusBar style="auto" /> */}
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    width: '100vw',
    height: '100vh',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: 'black',
    overflow: 'hidden',
  },
  scroll: {
    width: '100vw',
    height: 'auto',
    overflowY: 'auto',
  }
});
