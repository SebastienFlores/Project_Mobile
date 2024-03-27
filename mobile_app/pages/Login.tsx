import { Button, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card/Card'

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button
        title="S'inscrire"
        onPress={() => {
          navigation.navigate('Registre')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
