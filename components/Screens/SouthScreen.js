import React, {useState, useEffect} from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import StateCard from '../Cards/StateCard'
import { StyledRegionTitle } from '../Cards/Text.style'

export default function NorthScreen({ navigation, data }) {
  const [covidData, setCovidData] = useState(null);

  useEffect(() => {
    fetch('https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true', {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      setCovidData(data)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <ScrollView style={styles.container}>
      {covidData.deceasedByRegion.map((region, index) => (
        <StateCard presunts={covidData.deceasedByRegion[index].count} infecteds={covidData.infectedByRegion[index].count} region={region}  key={index} state={covidData.infectedByRegion[index].state} />
      )).filter((item) => {
        item.state.includes('SP')
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#490381',
    width: '360px',
    padding: 20,
  },
  title: {
    marginTop: 100,
    fontSize: 25,
  }
});

