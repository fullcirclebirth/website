import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
  bgColor: {
    background: '#5DBCD2',
  },
  link: {
    textDecoration: "none",
    height: "50px",
  },
  testimony: {
    verticalAlign: "middle",
    margin: "auto"
  }
}

export default TestimonyCarousel => {
  return (
    <div id="carouselControls"className="carousel slide font-weight-light mt-5" data-ride="carousel" style={styles.bgColor}>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Link to="/Testimony" style={styles.link}>
            <p className="text-white w-75 mb-0 align-middle" style={styles.testimony}>
              I am so grateful for her presence and integral involvement in 
              bringing my daughter into this world. I wont do it again 
              without her!  -Ongeleigh U. 
            </p>
          </Link>
        </div>
        <div className="carousel-item">
          <Link to="/Testimony" style={styles.link}>
            <p className="text-white w-75 mb-0 align-middle" style={styles.testimony}>
              Amanda was an awesome doula! If you are looking for a doula who is patient, resourceful and firm yet 
              gentle, Amanda is your gal!  -Ansley B. 
            </p>
          </Link>
        </div>
        <div className="carousel-item">
          <Link to="/Testimony" style={styles.link}>
            <p className="text-white w-75 mb-0 align-middle" style={styles.testimony}>
              There are not enough superlatives to describe Amanda's amazing doula talents. 
              -Melissa Deles, Eric Cummings and baby Emmett
            </p>
          </Link>
        </div>
        <div className="carousel-item">
          <Link to="/Testimony" style={styles.link}>
            <p className="text-white w-75 mb-0 align-middle" style={styles.testimony}>
              I've had several friends ask me if having a doula attend my birth really 
              made a difference. My answer is simple: don't give birth without one! -Eryn M.
            </p>
          </Link>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}