import React from "react";
import {View, Text, Button,TextInput, StyleSheet, CheckBox} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';



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
                <FontAwesome.Button style={styles.button} name="arrow-up" size={20} color="black" onPress={() => this.move(-1)}></FontAwesome.Button>   

                <FontAwesome.Button style={styles.button} name="arrow-down" size={20} color="black" onPress={() => this.move(1)}></FontAwesome.Button>  
                <FontAwesome.Button style={styles.button} name="trash" size={20} color="black" onPress={() => this.binHandler(this.props.ID)}></FontAwesome.Button> 
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
  button :{
    backgroundColor: 'antiquewhite',
    padding: '0.2em',
    margin: '0em',
}
});

  export default Task;