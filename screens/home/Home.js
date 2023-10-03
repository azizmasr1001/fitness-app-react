import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Header from '../stuff/Header';

function Home(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/Home.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Celebrity Fitness</Text>
        <Text style={styles.subtitle}>Get Fit. Feel Great.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Us</Text>
        <Text style={styles.sectionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          consectetur, elit vitae varius luctus, mauris erat volutpat tellus,
          vitae posuere tellus purus a arcu. Nulla sed turpis ac urna blandit
          congue. Aenean ac felis varius, dictum nisl in, luctus arcu. Sed
          consequat lectus vel eleifend elementum. Aenean non erat nec felis
          tristique finibus.
        </Text>
      </View>

      <View style={[styles.section, styles.sectionAlternate]}>
        <Text style={styles.sectionTitle}>Membership</Text>
        <Text style={styles.sectionText}>
          Phasellus tempus maximus aliquet. Integer tempus, tortor sed gravida
          aliquam, risus dolor euismod metus, non eleifend tortor diam in mauris.
          Fusce a dapibus mauris, non ullamcorper purus. Quisque auctor enim a
          magna rhoncus, nec auctor neque sagittis. Praesent pharetra dui sit amet
          nunc sagittis, sed tincidunt elit fringilla.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Classes</Text>
        {/* Add class cards or list here */}
      </View>

      <View style={[styles.section, styles.sectionAlternate]}>
        <Text style={styles.sectionTitle}>Personal Training</Text>
        {/* Add personal training information here */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Locations</Text>
        {/* Add location information or map here */}
      </View>

      <View style={[styles.section, styles.sectionAlternate]}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        {/* Add contact information or form here */}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2023 Celebrity Fitness. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#1e88e5',
    paddingVertical: 20,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
  },
  sectionAlternate: {
    backgroundColor: '#f5f5f5',
  },
  footer: {
    backgroundColor: '#1e88e5',
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Home;
