import { Link } from '@react-navigation/native'
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

type Cardtype = {
  title: string
  thumbnail: string
  description: string
}

export default function Card({ title, thumbnail, description }: Cardtype) {
  return (
    <View style={styles.bordur}>
      <Text style={styles.title}>{title}</Text>
      <Image
        source={{
          uri: thumbnail
        }}
        style={styles.image}
      />
      <Text style={styles.text}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  bordur: {
    backgroundColor: '#33CAFF',
    borderRadius: 10,
    margin: 10
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    color: '#0207A1'
  },
  image: {
    width: 400,
    height: 240
  },
  text: {
    fontSize: 20
  }
})
