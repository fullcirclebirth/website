import React, { Component } from 'react'
import axios from 'axios'

const styles = {
  bgColor: {
    background: '#5DBCD2',
  },
  imgSize: {
    minWidth: '350px'
  },
  break: {
    background: "#38588F",
  },
  events: {
    color: "#38588F"
  }
}

const blogger = process.env.REACT_APP_BLOGGER

class Services extends Component {
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
            <div key={key} className="lead" style={styles.events}>
              <p>{ event }</p>
            </div>
            )
        })
      )
    } else {
      return (
        <div>
          <p className="lead" style={styles.events}>No Events Scheduled</p>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="container-fluid" style={styles.bgColor}>
        <h2 className="font-weight-light text-white text-uppercase text-center pt-5 mb-5">Class Description</h2>
        <hr className="my-4" style={styles.break} />
        <div className="row justify-content-center">
          <div className="col-md-4 pt-3">
            { this.renderEvents() }
          </div>
          <div className="col-md-4 pt-3">
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

export default Services