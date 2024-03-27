import { Pressable, ScrollView, View, StyleSheet } from 'react-native'
import Card from '../components/Card/Card'
import { useEffect, useState } from 'react'
import { categories } from '../services/Api/categories/categories'

export default function Category({ route, navigation }) {
  const [All, setAll] = useState([])
  useEffect(() => {
    categories(route.params?.categ).then((data) => {
      setAll(data.sort(SortArray))
    })
  }, [])
  console.log('alls', All)
  function SortArray(x, y) {
    if (x.title < y.title) {
      return -1
    }
    if (x.title > y.title) {
      return 1
    }
    return 0
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        {All.map((videogame, index) => {
          return (
            <Pressable key={index} onPress={() => navigation.navigate('Detail', { id: videogame.id })}>
              <Card
                key={index}
                title={videogame.title}
                thumbnail={videogame.thumbnail}
                onPress={() => navigation.navigate('Detail', { id: videogame.id })}
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
