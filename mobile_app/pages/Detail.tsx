import { Image, StyleSheet, Text, View, ScrollView, Linking, Dimensions } from 'react-native'
import { searchid } from '../services/Api/ID/searchid'
import { useEffect, useState } from 'react'
import { Link } from '@react-navigation/native'

export default function Detail({ route }) {
  const [videogame, setAll] = useState([])
  const screenwidth = Dimensions.get('screen').width
  useEffect(() => {
    searchid(route.params?.id).then((data) => {
      setAll(data)
    })
  }, [])
  return (
    <ScrollView>
      <View>
        <Text style={styles.margin}>{videogame.title}</Text>
        <Image
          source={{
            uri: videogame.thumbnail
          }}
          style={styles.image}
        />
        <Text style={styles.margin}>{videogame.description}</Text>
        <ScrollView snapToAlignment={'start'} horizontal={true}>
          {videogame.screenshots &&
            videogame.screenshots.map((img) => {
              return (
                <Image
                  key={img.id}
                  source={{
                    uri: img.image
                  }}
                  style={styles.image}
                />
              )
            })}
        </ScrollView>
        <Text style={styles.click} onPress={() => Linking.openURL(videogame?.game_url)}>
          Click pour jouer au jeu
        </Text>
        <Text style={styles.margin}> Genre : {videogame.genre}</Text>
        <Text style={styles.margin}>Plateforme :{videogame.platform}</Text>
        <Text style={styles.margin}>Publieur : {videogame.publisher}</Text>
        <Text style={styles.margin}>Développeur : {videogame.developer}</Text>
        <Text style={styles.margin}>Système d'exploitation requis :</Text>
        <View style={styles.système}>
          <Text>
            -{' '}
            {videogame.minimum_system_requirements
              ? videogame.minimum_system_requirements.os
              : 'pas d`information sur os'}
          </Text>
          <Text>
            -{' '}
            {videogame.minimum_system_requirements
              ? videogame.minimum_system_requirements.processor
              : 'pas d`information sur processeur'}
          </Text>
          <Text>
            -{' '}
            {videogame.minimum_system_requirements
              ? videogame.minimum_system_requirements.memory
              : 'pas d`information sur memoire'}
          </Text>
          <Text>
            -{' '}
            {videogame.minimum_system_requirements
              ? videogame.minimum_system_requirements.graphics
              : 'pas d`information sur graphic'}
          </Text>
          <Text>
            -{' '}
            {videogame.minimum_system_requirements
              ? videogame.minimum_system_requirements.storage
              : 'pas d`information sur storage'}
          </Text>
        </View>
        <Text style={styles.click} onPress={() => Linking.openURL(videogame?.freetogame_profile_url)}>
          Click pour voir les Avis
        </Text>
        <Text style={styles.margin}>Date de sortie le {videogame.release_date}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  margin: {
    margin: 10
  },
  click: {
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center'
  },
  image: {
    width: 400,
    height: 240,
    resizeMode: 'contain'
  },
  système: {
    paddingLeft: 30
  }
})
