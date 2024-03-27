import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Category from './pages/Category'
import Categories from './pages/Categories'
import Parametre from './pages/Parametre'

const AuthStack = createNativeStackNavigator()
const NativeStack = createNativeStackNavigator()
const AppStack = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={StackDetail} />
        <AppStack.Screen name="Category" component={StackCategory} />
        <AppStack.Screen name="Parametre" component={Parametre} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

function StackDetail() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Home2" component={Home} options={{ headerShown: false }} />
      <AuthStack.Screen name="Detail" component={Detail} />
    </AuthStack.Navigator>
  )
}

function StackCategory() {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
      <NativeStack.Screen name="Category2" component={Category} />
      <NativeStack.Screen name="Detail" component={Detail} />
    </NativeStack.Navigator>
  )
}
