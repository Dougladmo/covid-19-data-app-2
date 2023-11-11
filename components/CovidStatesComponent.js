import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import RegionCard from './Cards/RegionCard';

const CovidStatesComponent = ({ data, navigation }) => {
  if (!data || !data.infectedByRegion) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView >
        <RegionCard handleOnPress={() => navigation.navigate('NORTE')} region='NORTE' />
        <RegionCard region='NORTESTE' />
        <RegionCard region='CENTRO-OESTE' />
        <RegionCard region='SUDESTE' />
        <RegionCard region='SUL' />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#490381',
      width: '360px',
      padding: 20,
      paddingBottom: 100,
    },
    title: {
      marginTop: 100,
      fontSize: 25,
    }
  });
  

export default CovidStatesComponent;