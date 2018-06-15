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
          blogString ? this.setState({ show: true }) : null
          return this.setState({ posts: this.blogSpit(blogString, ",") })
        })
      })
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
      <div>
        <div className="container-fluid" style={styles.bgColor}>
          <h2 className="font-weight-light text-white text-uppercase text-center pt-5 mb-5">Class Series</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 pt-3 text-white lead">
              <h2 className="font-weight-light mt-5 mb-5 text-white text-center">Class Schedule</h2>
              <hr className="my-4" style={styles.break} />
              { this.renderEvents() }
              <p>
                Group Class is $250 and reserves seats for two people and includes class materials. 
              </p>
              <p>
                Registration Fee: A $50 registration is required to book your classes. 
              </p>
              <p>
                This fee is nonrefundable
              </p>
            </div>
            <div className="col-md-4 pt-3 lead text-white">
              <p>
                Over the course of four classes parents will learn anatomy, 
                hospital policies and procedures, physiological process of labor, 
                and optimal fetal positioning.
              </p>
              <p>
                We will cover evidence based information on pregnancy and birth. 
                Parents will recognize the Rights of the Childbearing Woman.
              </p>
              <p>
                We will cover the postpartum experience including care and healing. 
                As well as encourage partners to discuss expectations for labor and postpartum.
              </p>
              <p>
                Partners will learn comfort measures and coping skills including breathing, relaxation, 
                positions to labor in, positions to push in, positions for optimal fetal positioning.
              </p>
              <p>
                Parents will complete the class series feeling: empowered, prepared, informed, 
                educated, confident and capable as they approach the birth of their baby.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={styles.bgColor}>
          <div className="row justify-content-center">
            <div className="col-md-8 my-auto">
              <hr className="my-4" style={styles.break} />
              <h2 className="font-weight-light mt-5 mb-5 text-white text-center">Doula Services</h2>
                <p className="lead text-white">
                  My goal as a birth doula is to provide emotional and physical support for the birthing mother and her partner. 
                  Through prenatal appointments, phone calls, and email I  provide resources throughout pregnancy and help you 
                  prepare for your upcoming birth. During your labor and birth, my goal is to keep your circle of care connected and 
                  the laboring mother in the center; where she belongs.
                </p>
                <p className="lead text-white mb-5">
                  Doula services include 34 and 38 week prenatal visits, the birth and a postpartum visit within two weeks after the 
                  birth. The fee for birth doula support is $700 . A 50% deposit holds your space on my calendar and is due at time 
                  of contract signing. The balance of $350 is due in full by 38 weeks of pregnancy. If baby is born prior to 38 weeks 
                  and doula attends the birth, payment is due within a week after the birth.
                </p>

              <hr className="my-4" style={styles.break} />
              <h2 className="font-weight-light mt-5 mb-5 text-white text-center">Lactation Support and Education</h2>
              <p className="lead text-white mb-5">
                I am Certified Lactation Counselor through the <a href="https://www.alpp.org/">ALPP</a>. I am dedicated to the 
                promotion, protection, and support of breastfeeding and human lactation and work to prevent and solve breastfeeding 
                problems. If your goal is to succeed at breastfeeding, my goal is to help you accomplish doing so. Through in 
                home visits, education and connecting to other necessary resources I will support your desire to breastfeed. In 
                home visits are charged an hourly rate of $30 plus mileage at .50 cents a mile. 
              </p>

              <hr className="my-4" style={styles.break} />
              <h2 className="font-weight-light mt-5 mb-5 text-white text-center">Service Package Options</h2>
              <p className="lead text-white">
                Three private, three hour classes in your own home tailored to your needs: $450 
              </p>
              <p className="lead text-white">
                Three hour Refresher class in your own home: $175
              </p>
              <p className="lead text-white">
                Doula Services plus Group Class: $900
              </p>
              <p className="lead text-white">
                Doula Services plus Private Class: $1,000
              </p>
              <p className="lead text-white mb-5">
                Doula Servies, Group or Private Class, Plus five hours in home lactation support: $1,150
              </p>
            </div>

        </div>
      </div>
    </div>
    )
  }
}

export default Services