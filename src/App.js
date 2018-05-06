import React, { Component } from 'react'
// import { BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar'
import routes from './routes'


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NavBar />
        { routes }
      </div>
    )
  }
}

export default App;
