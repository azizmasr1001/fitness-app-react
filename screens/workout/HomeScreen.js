import { StyleSheet, Text, View, SafeAreaView, Image,ScrollView } from "react-native";
import React from "react";
import FitnessCards from "../../components/FitnessCards";

import Header from "../stuff/Header";
import Banner from "../stuff/Banner";
import Card from "../stuff/Card";

const HomeScreen = () => {

  const Label = ({children}) => <Text style={styles.label}>{children}</Text>;

  return (
    <SafeAreaView>

          <View style={styles.screen}>
            <Header />
            <Banner />
          </View>

      <ScrollView style={{marginTop:40}}> 
        <View style={{marginHorizontal: '3%'}}>
          <Label>Your Activities</Label>
            <View style={{flexDirection: 'row'}}>
              <Card />
            </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Label>Start Fitness</Label>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                opacity: 0.5,
                fontSize: 12,
              }}>
              View All
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
              <FitnessCards />
          </View>
        </View>   
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  screen: {margin: '3%'},
});

export default HomeScreen;


