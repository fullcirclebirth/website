import React, { Component } from 'react'
// import { BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="container-fluid m-0 p-0">
        <NavBar />
        <div className="m-0 p-0">
          { routes }
        </div>
      </div>
    )
  }
}

export default App;
