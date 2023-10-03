import React from 'react';
import { StyleSheet, View, Image, ImageBackground,} from 'react-native';

import ImageContainer from './ImageContainer';
import HeaderTittle from './HeaderTittle';

const headerImage = require("../../assets/images/header.jpg");
const notification = require('../../assets/images/Notification.png');

function Header() {
    return (
        <View style={styles.header}>
            <ImageContainer image={headerImage} />
                <HeaderTittle />
            <ImageContainer image={notification} height={'50%'} width={'50%'} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
      paddingHorizontal: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
})

export default Header;