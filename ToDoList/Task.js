import React from "react";
import {View, Text, Button,TextInput, StyleSheet, FlatList} from 'react-native';



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
      let checked =  <TextInput type="checkbox"  onChange={() => this.onClickCheckHandler (this.props.ID)} checked={this.props.isChecked}></TextInput>; 
     
      return (
            <View style={styles.container} id={this.props.id} className="task">
                {checked}
                <Text className="date">{this.props.date}</Text>
                <Text className="content">{this.props.content}</Text>
                <Button  title="Up" onPress={() => this.move(-1)}></Button>   

                <Button title="Down" onPress={() => this.move(1)}></Button>  
                <Button  title="Bin"onPress={() => this.binHandler(this.props.ID)}></Button> 
            </View>
      );
    }
  }


  // React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

  export default Task;