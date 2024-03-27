import React, { useEffect, useState } from 'react'
import { Button, Pressable, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import { all } from '../services/Api/All/all'
import Card from '../components/Card/Card'
import { Link } from '@react-navigation/native'
function Ramdom(All) {
  let Alls = []
  for (let i = 0; i < 10; i++) {
    Alls = [...Alls, Math.floor(Math.random() * All.length)]
  }
  return Alls
}
export default function Home({ navigation }) {
  global.plateform = 'all'
  const [Alls, setAlls] = useState([])
  const [All, setAll] = useState([])
  const [refreshing, setRefreshing] = React.useState(false)
  useEffect(() => {
    all().then((data) => {
      setAll(data)
      setAlls(Ramdom(data))
    })
  }, [])
  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }, [])

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <View style={styles.container}>
        <Text>Home</Text>
        {Alls.map((videogame, index) => {
          return (
            <Pressable key={index} onPress={() => navigation.navigate('Detail', { id: All[videogame].id })}>
              <Card
                key={index}
                title={All[videogame].title}
                thumbnail={All[videogame].thumbnail}
                description={All[videogame].short_description}
              />
            </Pressable>
          )
        })}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEE',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
