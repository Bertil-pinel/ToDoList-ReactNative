import React from "react";
import {View, Text, Button,TextInput, StyleSheet, CheckBox} from 'react-native';
import { Icon } from "@react-native-material/core";



class Task extends React.Component {


    move(direction){
      if(this.props.ID + direction < 0 || this.props.ID+direction === this.props.Tasks.length ) {
        return;
      }

      let newTasks = this.props.Tasks.slice();

        const buff = newTasks[this.props.ID];
        newTasks[this.props.ID] = newTasks[this.props.ID + direction];
        newTasks[this.props.ID + direction] = buff;
     
      this.props.setTasks(newTasks);
    }

    onClickCheckHandler(index) {
        let newTasks = this.props.Tasks.slice();
        newTasks[index].isChecked = !newTasks[index].isChecked;
        this.props.setTasks(newTasks);

    }

    binHandler(e) {
        let temp = this.props.Tasks.slice();
        temp.splice(e, 1);
        this.props.setTasks(temp);

    }
      
    render() {
      let checked =  <CheckBox  onValueChange={() => this.onClickCheckHandler (this.props.ID)} value={this.props.isChecked}></CheckBox>; 
     
      return (
            <View style={styles.container} id={this.props.id} className="task">
                {checked}
                <Text style={styles.date}>{this.props.date}</Text>
                <Text style={styles.content}> {this.props.content}</Text>
                <Button onPress={() => this.move(-1)}><Icon name="chevron-up"/></Button>   

                <Button onPress={() => this.move(1)}><Icon name="chevron-down" size={20}/></Button>  
                <Button onPress={() => this.binHandler(this.props.ID)}><Icon name="trash-bin-sharp" size={20}/></Button> 
            </View>
      );
    }
  }


  // React Native Styles
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignItems: 'center',
    backgroundColor: 'antiquewhite',
    color: 'rgb(0, 0, 20)',
    marginTop:' 0.6em',
    marginBottom:' 0.6em',
    marginLeft:'0.5em',
    marginRight:'0.5em',
    padding:'0.7em',
    borderRadius:'1em',
  }, 
  date: {
    fontSize: 10,

    paddingLeft: '0.5em',
    paddingRight:' 1em',
    color: 'gray'
  }, 
  content: {
    color: 'black',
    width: '60%',
    overflowWrap: 'break-word',
  },
}
);

  export default Task;