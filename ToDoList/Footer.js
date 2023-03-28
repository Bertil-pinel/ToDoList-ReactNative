import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';


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
      <div className="Footer">
          <button onClick={addTask}><ion-icon name="add-circle-outline"></ion-icon></button>
          <input type="text" placeholder="Filtrer..." onChange={searchTask}></input>
      </div>
    );
  }


  export default Footer;