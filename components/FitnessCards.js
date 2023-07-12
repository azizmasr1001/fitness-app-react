import { StyleSheet, Text, View, Pressable, Image, ImageBackground, ScrollView } from "react-native";
import React from "react";
import fitness from "../data/fitness";
import { useNavigation } from "@react-navigation/native";

const star = require('../assets/images/Star.png');
const play = require('../assets/images/play.png');
const book = require('../assets/images/Book.png');

const FitnessCards = () => {
  const FitnessData = fitness;
  const navigation = useNavigation();
  
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={{ paddingVertical: 10 }}
      showsHorizontalScrollIndicator={false}
    >
      {FitnessData.map((item, key) => (
        <Pressable
          onPress={() =>
            navigation.navigate("Workout", {
              image: item.image,
              excersises: item.excersises,
              id: item.id,
              for: item.for,
            })
          }
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 12,
          }}
          key={key}
        >
          <View
            style={{
              borderRadius: 15,
              overflow: 'hidden',
              shadowOffset: { width: -5, height: 3 },
              shadowColor: 'grey',
              shadowOpacity: 0.5,
              shadowRadius: 3,
              backgroundColor: '#fff',
            }}
          >
            <ImageBackground
              source={{ uri: item.image }}
              style={{
                height: 150,
                width: 300,
              }}
            >
              <Text
                style={{
                  position: 'absolute',
                  bottom: 5,
                  left: 10,
                  fontFamily: 'Poppins-Regular',
                  color: '#fff',
                }}
              >
                Transformation
              </Text>
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: '#fff',
                  padding: 5,
                  right: 10,
                  top: 10,
                  borderRadius: 5,
                }}
              >
                <Image source={star} style={{ height: 10, width: 10 }} />
              </View>
            </ImageBackground>
            <View
              style={{
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 15,
              }}
            >
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: '#8860a2',
                  padding: 10,
                  right: 25,
                  top: -15,
                  borderRadius: 15,
                  zIndex: 3,
                }}
              >
                <Image source={play} style={{ height: 10, width: 10 }} />
              </View>
              <Text style={{ fontFamily: 'Poppins-Regular' }}>
                {item.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 12,
                  }}
                >
                  <Image source={book} style={{ height: 15, width: 15 }} />
                  {"   "+item.for}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 12,
                    color: '#8860a2',
                  }}
                >
                  45 Min
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default FitnessCards;

const styles = StyleSheet.create({});