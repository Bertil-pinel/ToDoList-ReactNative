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

      return (
        <View style={styles.container} className="Header">
            <Text style={[styles.text, styles.title]}>Hello Doer! </Text>
            <Text style={styles.text}>Task progression : {count} / {this.props.Tasks.length}</Text>
        </View>
      );
    }
  }

    // React Native Styles
const styles = StyleSheet.create({
  container: {
    height: '10%',
    width: '100vw',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: '0',
  },
  text :{
    color: 'aliceblue'
  },
  title :{
    fontSize: 40
  }
});


  export default Header;
