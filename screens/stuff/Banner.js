import React from 'react';
import { View, Image, Text, ImageBackground, StyleSheet } from 'react-native';

const fire = require('../../assets/images/fire.png');
const banner = require('../../assets/images/BG.png');
const model = require('../../assets/images/model.png');

function Banner(props) {
    const OfferText = ({children}) => (
        <Text style={styles.offerText}>{children}</Text>
    );

    return (
        <>
        <ImageBackground style={styles.banner} source={banner}>
            <View style={styles.bannerContainer}>
                <View style={styles.rowLabel}>
                <View style={styles.fireContainer}>
                    <Image
                    source={fire}
                    resizeMode="contain"
                    style={styles.fireImage}
                    />
                </View>
                <Text style={styles.offer}>Bakar Lemak</Text>
                </View>
                <OfferText>Ayo Olahraga</OfferText>
                <OfferText>Jangan Rebahan Mulu</OfferText>
            </View>
        </ImageBackground>
            <Image source={model} style={styles.model} resizeMode="contain" />
        </>
    );    
}

const styles = StyleSheet.create({
    banner: {
        marginTop: 20,
        padding: 30,
        resizeMode: 'contain',
        borderRadius: 20,
        overflow: 'hidden',
        flexDirection: 'row',
    },
    bannerContainer: {flex: 1},
    rowLabel: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    fireContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },  
    fireImage: {height: 15, width: 15, alignSelf: 'center', margin: 5},
    model: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        zIndex: 10,
        height: '75%',
        width: '50%',
        transform: [{rotateY: '180deg'}],
    },
    offer: {color: 'white', fontFamily: 'Poppins-Regular', fontSize: 10},
    offerText: {color: 'white', fontSize: 16, fontFamily: 'Poppins-Regular'},
})

export default Banner;