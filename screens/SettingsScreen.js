import React from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';

import Header from './stuff/Header';
import Banner from './stuff/Banner';
const SettingsScreen = () => {
    return (
        <SafeAreaView>
            <View>

                <View>
                    <Banner />
                </View>

                <ScrollView>
                <Text>Setting</Text>
                </ScrollView>
            </View>
        </SafeAreaView>
        
    );
}

export default SettingsScreen;