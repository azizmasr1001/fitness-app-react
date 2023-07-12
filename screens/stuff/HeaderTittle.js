import { React, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { FitnessItems } from '../../Context';

function HeaderTittle(props) {
    const {
   
        minutes,
      
        calories,
    
        workout,
      } = useContext(FitnessItems);
    return (
    <View style={styles.title}>
        <Text style={styles.bigTitle}>Hi, Aziz</Text>
        <Text style={styles.smallTitle}>Oct 03, 2001</Text>
        <Text>Minutes:{minutes} Calories:{calories} Workout:{workout}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    title: {paddingHorizontal: 10, flex: 1, justifyContent: 'center'},
    bigTitle: {fontSize: 16, fontFamily: 'Poppins-Medium'},
    smallTitle: {fontSize: 10, fontFamily: 'Poppins-Regular', opacity: 0.6},
})


export default HeaderTittle;