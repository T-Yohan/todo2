import { View, Text } from 'react-native'
import React from 'react'
import Todo from './src/Todo'
import Post from './insta/Post'
import Burger from './exoTemplate/burger/Burger'
import Biker from './exoTemplate/biker/Biker'
import Discover from './exoTemplate/discover/Discover'
import LeBonCoin from './tuto/le-bon-coin/LeBonCoin'
import AuthApp from './tuto/authApp/AuthApp'
import Test from './test161023/Test'
import Login from './form/Login'
import RouteDavisScreen from './routeDavis/RouteDavisScreen'
import { Provider } from 'react-redux'
import { store } from './redux/store'


const App = () => {


  return (

    <Provider store={store}> 

      <RouteDavisScreen/>

    </Provider>

    // <Test/>
    // <AuthApp/>
    // <LeBonCoin/>

  )
}

export default App