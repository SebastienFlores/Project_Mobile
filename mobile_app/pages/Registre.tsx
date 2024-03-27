import { Button, StyleSheet, Text, View } from 'react-native'

export default function Registre({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Registre</Text>
      <Button
        title="Se connecter"
        onPress={() => {
          navigation.navigate('Login')
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
