import React, { Component } from 'react'
import axios from 'axios'

const styles = {
  bgColor: {
    background: '#5DBCD2',
  },
  imgSize: {
    minWidth: '350px'
  }
}

const blogger = process.env.REACT_APP_BLOGGER

class Events extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      show: false
    }
    this.blogSpit = this.blogSpit.bind(this)
  }

  componentDidMount() {
    axios.get(blogger)
      .then((res) => {
        res.data.items.map((blog) => {
          let blogString = JSON.stringify(blog.content)
          return this.setState({ posts: this.blogSpit(blogString, ",") })
        })
      })
      .then( this.setState({ show: true }) )
  }

  blogSpit(string, seperator) {
    return string.split(seperator)
  }

  renderEvents() {
    if(this.state.show === true ) {
      return (
        this.state.posts.map((post, key) => {
          let event = post.replace(/[^a-zA-Z0-9 ]/g, "")
          return ( 
            <div key={key} className="text-white lead">
              <p>{ event }</p>
            </div>
            )
        })
      )
    } else {
      return (
        <div>
          <p className="text-white lead">No Events Scheduled</p>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="container" style={styles.bgColor}>
        <div className="row">
          <div className="col-md-6 mt-5">

            { this.renderEvents() }
          
          </div>
          <div className="col-md-6">
          <p className="display-4 align-middle text-white">Class Description</p>
            <p className="lead text-white">
              Over the course of four classes parents will learn anatomy, 
              hospital policies and procedures, physiological process of labor, 
              and optimal fetal positioning.
            </p>
            <p className="lead text-white">
              We will cover evidence based information on pregnancy and birth. 
              Parents will recognize the Rights of the Childbearing Woman.
            </p>
            <p className="lead text-white">
              We will cover the postpartum experience including care and healing. 
              As well as encourage partners to discuss expectations for labor and postpartum.
            </p>
            <p className="lead text-white">
              Partners will learn comfort measures and coping skills including breathing, relaxation, 
              positions to labor in, positions to push in, positions for optimal fetal positioning.
            </p>
            <p className="lead text-white">
              Parents will complete the class series feeling: empowered, prepared, informed, 
              educated, confident and capable as they approach the birth of their baby.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Events