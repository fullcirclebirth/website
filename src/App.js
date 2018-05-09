import React, { Component } from 'react'
import NavBar from './NavBar'
import Footer from'./Footer'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="container-fluid m-0 p-0">
        <NavBar />
        <div className="m-0 p-0">
          { routes }
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
