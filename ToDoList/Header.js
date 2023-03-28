import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';


class Header extends React.Component {

    taskCount = () =>{
      let count = 0;
      for(let i=0 ; i < this.props.Tasks.length ; i++){
          if(this.props.Tasks[i].isChecked){
              count++;
          }
      }
      return count;
    }
       
    render() {
      let count = this.taskCount();

      //Couleur du text de progression
      let color="";
      if(this.props.Tasks.length !== 0){
        if(count === this.props.Tasks.length){
          color = 'lightgreen';
        }
        else{
          color = 'white';

        }
      }

      return (
        <View style={styles.container} className="Header">
            <Text>Hello Doer! </Text>
            <Text className={color}>Task progression : {count} / {this.props.Tasks.length}</Text>
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


  export default Header;
