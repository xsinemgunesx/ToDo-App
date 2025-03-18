import React from 'react';
import {View, Text} from 'react-native';
import styles from './Card.style';

const Card = ({text, completed}) => {
  return (
    <View style={[styles.container, completed && styles.completedTask]}>
      <Text style={[styles.todos, completed && styles.completedText]}>
        {text}
      </Text>
    </View>
  );
};

export default Card;
