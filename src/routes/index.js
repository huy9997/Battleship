import React from  'react'
import {Route,BrowserRouter } from 'react-router-dom'
import battleship from '../screens/battleship'

const Routes =()=>(
  <BrowserRouter>
      <Route exact path="/" component={battleship}/>
  </BrowserRouter>
)

export default Routes
