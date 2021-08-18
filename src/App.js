import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
/**
 * the root component of the application
 */
export default class App extends Component {
 render () {
   return <Button variant="contained" color="primary">
          你好，世界
        </ Button>
 }
}