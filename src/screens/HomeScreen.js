import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    console.log(navigation);
  return (<View>
        <Text style={styles.text}>My Home Screen</Text>
        <Button
           title="Home Button"
        />
      </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;