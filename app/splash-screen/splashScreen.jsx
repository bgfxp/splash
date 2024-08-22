import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 284,
  },
  gradientBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});

const SplashScreen = () => (
  <View style={styles.container}>
    <LinearGradient
      colors={['#000000', '#FF0000']}
      style={styles.gradientBackground}
    />
    <Image
      style={styles.logo}
      source={require('../../assets/images/arrascaeta.png')}
    />
  </View>
);

export default SplashScreen;
