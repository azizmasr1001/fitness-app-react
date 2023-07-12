import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

function ImageContainer({image, height = '100%', width = '100%'}) {
    return (
        <View style={styles.imageContainer}>
            <Image source={image} style={[{height, width}]} />
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        height: 50,
        width: 50,
        borderRadius: 25,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default ImageContainer;