import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Welcome from '../components/Welcome'
import { Switch } from 'native-base'
import GraphData from '../components/GraphData'
import PaiChart from '../components/PaiChart'

const Home = () => {

  return (
    <View style={{ flex: 1, backgroundColor: '#d6e3e4' }}>
      <Welcome />

      <View>
        {/* Graph View Section */}
        <GraphData />
        {/* Pai Chart Section */}
        <PaiChart />
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <View style={styles.box1}>
          <Text style={styles.title}>Pressure Sensor</Text>
          <Text style={styles.title2}>3 System have access</Text>
          <Switch offTrackColor="light.300" onTrackColor="primary.700" onThumbColor="primary.900" offThumbColor="light.500" />
        </View>

        <View style={styles.box1}>
          <Text style={styles.title}>Temperature Sensor</Text>
          <Text style={styles.title2}>5 System have access</Text>
          <Switch offTrackColor="light.300" onTrackColor="primary.700" onThumbColor="primary.900" offThumbColor="light.500" />
        </View>
      </View>

    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  box1: {
    display: 'flex',
    alignItems: 'flex-start',
    borderColor: '#9c9c9c',
    borderWidth: 2,
    backgroundColor: '#00666f',
    borderRadius: 8,
    padding: 12,
    elevation: 4
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF'
  },
  title2: {
    fontWeight: '400',
    fontSize: 15,
    color: '#c9fdff'
  }
})
