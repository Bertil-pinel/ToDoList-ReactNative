import React from "react";
import {View, TextInput, Button, StyleSheet} from 'react-native';


function Footer(props){

  const addTask = () => {
    let taskToAdd="";
    while(taskToAdd === ""){
        taskToAdd = prompt("Quel est l'intitulé de la tâche à ajouter ?");
    }
    if (taskToAdd === null || taskToAdd === "") {
        return;
    }
    let temp = props.Tasks.slice();

    var date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    date = mm + '/' + dd + '/' + yyyy;

    taskToAdd = {"date": date,"content": taskToAdd, "isChecked" : false};
    temp.push(taskToAdd);
    props.setTasks(temp);
  }

    const searchTask = (event) =>{

      if(event.target.value.length >= 3){
        props.setTasksFilter(event.target.value.toUpperCase());
      }

      else
      {  
        props.setTasksFilter("");
      }
      
    } 
          
    return (
      <View style={styles.container} className="Footer">
          <Button style={styles.button} title="Add a Task" onPress={addTask}  ></Button>
          <TextInput style={styles.input} type="text" placeholder="Filtrer..." onChange={searchTask}></TextInput>
      </View>
    );
  }

    // React Native Styles
const styles = StyleSheet.create({
  container: {
    height: '10%',
    width: '100vw',

    display: 'flex',
    flexDirection:' row',
    alignItems: 'center',
    justifyContent: 'space-around', 
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    padding: '0.2em',
    margin: '0',
  },
  input: {
    height: '40%',

    backgroundColor: 'antiquewhite',

    border: 'none',
    borderRadius: '0.5em',
  },
});


  export default Footer;