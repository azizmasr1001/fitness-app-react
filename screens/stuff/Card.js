import { React, useContext } from 'react';
import { View, Image, Text } from 'react-native';
import * as Progress from 'react-native-progress';

import { FitnessItems } from '../../Context';

const cycle = require('../../assets/images/cycle.png');
const yoga = require('../../assets/images/yoga.png');
const walk = require('../../assets/images/walk.png');
const next = require('../../assets/images/next.png');

function Card({item, index}) { 
    const {
    
            minutes,
        
            calories,
        
            workout,
        } = useContext(FitnessItems);

    const ActivitiesData = [
        {
        name: 'Minutes',
        status: minutes,
        image: cycle,
        lightColor: '#f8e4d9',
        color: '#fcf1ea',
        darkColor: '#fac5a4',
        },
        {
        name: 'Calories',
        status: calories,
        image: walk,
        lightColor: '#d7f0f7',
        color: '#e8f7fc',
        darkColor: '#aceafc',
        },
        {
        name: 'Workout',
        status: workout,
        image: yoga,
        lightColor: '#dad5fe',
        color: '#e7e3ff',
        darkColor: '#8860a2',
        },
    ]

    return (
        <>
        {ActivitiesData.map((item, index) => (
        <View
        style={{
            flex: 1,
            height: index === 1 ? 180 : 150,
            padding: 10,
            alignSelf: 'center',
            backgroundColor: item.color,
            justifyContent: 'space-between',
            marginHorizontal: 8,
            borderRadius: 10,
            shadowColor: 'lightgrey',
            shadowOffset: {width: -5, height: 5},
            shadowOpacity: 0.5,
            shadowRadius: 2,
        }}>
        <Image source={item.image} style={{height: 25, width: 25}} />
        <View style={{alignSelf: 'center', margin: 5}}>
            <Progress.Circle
            size={50}
            progress={item.status / 100}
            showsText
            unfilledColor="#ededed"
            borderColor="#ededed"
            color={item.darkColor}
            direction="counter-clockwise"
            fill="white"
            strokeCap="round"
            thickness={5}
            style={{
                shadowColor: 'grey',
                shadowOffset: {width: 2, height: 2},
                shadowOpacity: 0.1,
                shadowRadius: 1,
            }}
            textStyle={{
                fontSize: 16,
                fontFamily: 'Poppins-Bold',
                fontWeight: 'bold',
            }}
            />
        </View>
        <View>
            <Text style={{fontSize: 10, fontFamily: 'Poppins-Light'}}>
       
            </Text>
            <Text style={{fontSize: 10, fontFamily: 'Poppins-Light'}}>
            
            </Text>
        </View>
        <View
            style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
            <Text style={{fontFamily: 'Poppins-Regular'}}>{item.name}</Text>
            <View
            style={{
                backgroundColor: item.lightColor,
                padding: 2,
                borderRadius: 10,
            }}>
            <Image
                source={next}
                style={{
                height: 12,
                width: 12,
                resizeMode: 'contain',
                }}
            />
            </View>
        </View>
        </View>
      ))}
      </>
    );

}


export default Card;