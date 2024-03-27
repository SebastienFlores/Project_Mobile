import { Button, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import Category from './Category'

export default function Categories({ navigation }) {
  const categories = [
    'mmorpg',
    'shooter',
    'strategy',
    'moba',
    'racing',
    'sports',
    'social',
    'sandbox',
    'open-world',
    'survival',
    'pvp',
    'pve',
    'pixel',
    'voxel',
    'zombie',
    'turn-based',
    'first-person',
    'third-Person',
    'top-down',
    'tank',
    'space',
    'sailing',
    'side-scroller',
    'superhero',
    'permadeath',
    'card',
    'battle-royale',
    'mmo',
    'mmofps',
    'mmotps',
    '3d',
    '2d',
    'anime',
    'fantasy',
    'sci-fi',
    'fighting',
    'action-rpg',
    'action',
    'military',
    'martial-arts',
    'flight',
    'low-spec',
    'tower-defense',
    'horror',
    'mmorts'
  ]
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Category</Text>
        {categories.map((category, index) => {
          return (
            <Pressable key={index} onPress={() => navigation.navigate('Category2', { categ: category })}>
              <Text style={styles.text}>{category}</Text>
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
  },
  text: {
    backgroundColor: '#33CAFF',
    borderRadius: 10,
    margin: 10
  }
})
