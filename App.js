
import React,{useEffect} from 'react';

import AuthNavigator from './Navigation/AuthNavigator'
import  HomeStackNavigator from './Navigation/Navigator'
import {configureStore} from '@reduxjs/toolkit'
import authReducer,{addToken} from './reducer/authReducer'
import {Provider,useSelector,useDispatch} from 'react-redux'

import { NavigationContainer } from "@react-navigation/native";


const store = configureStore({
  reducer:{
    user:authReducer,
  }
})


function App() {
  const token = useSelector(state => state.user.token)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(addToken())
  },[])

  return (
       <NavigationContainer>
   {token ?  <HomeStackNavigator/> : <AuthNavigator />}
      </NavigationContainer> 
    
    
  );
}

export default ()=>{
  return (
    <Provider store={store}>
      <App/>
     </Provider>
  )
}



