import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';

import BrasilCard from '../Cards/BrasilCard';
import RegionCard from '../Cards/RegionCard';

import { StyledTitle, StyledRegionTitle } from '../Cards/Text.style';

export default function HomeScreen({navigation}) {
  const [covidData, setCovidData] = useState(null);

  useEffect(() => {
    // Realize uma chamada à API COVID-19 para obter os dados mais recentes.
    fetch('https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true')
      .then((res) => res.json())
      .then((data) => {
        setCovidData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title} >COVID-19 App</Text>
      {/* <BrasilCard state='Todo o Brasil' infecteds={covidData.infected} presunts={covidData.deceased} /> */}
      <StyledRegionTitle> Regiões do Brasil</StyledRegionTitle>
      {/* <CovidStatesComponent data={covidData}/> */}
      <ScrollView style={styles.scroll} >
        <RegionCard handleOnPress={() => navigation.navigate('Norte')} region='NORTE' />
        <RegionCard handleOnPress={() => navigation.navigate('Nordeste')} region='NORDESTE' />
        <RegionCard handleOnPress={() => navigation.navigate('Centroeste')} region='CENTRO-OESTE' />
        <RegionCard handleOnPress={() => navigation.navigate('Sudeste')} region='SUDESTE' />
        <RegionCard handleOnPress={() => navigation.navigate('Sul')} region='SUL' />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#490381',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  title: {
    backgroundColor: 'blueviolet',
    width: '100%',
    padding: 10,
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 40,
    color: 'white'
  },
  scroll: {
    padding: 20,
  }
});
