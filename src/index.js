import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'

const styles = {
  body: {
    margin:'0',
    padding: '0'
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App style={styles.body}/>
  </BrowserRouter>
, document.getElementById('root'))
registerServiceWorker()
