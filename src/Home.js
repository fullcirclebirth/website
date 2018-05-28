import React from 'react'
import TestimonyCarousel from './TestimonyCarousel'

const styles = {
  bgColor: {
    background: '#5DBCD2',
  },
  imgSize: {
    height: "350px",
    width: "350px",    
  },
  imgSize2: {
    maxHeight: "350px",
    maxWidth: "350px",
  },
  break: {
    background: "#fff",
  }
}

export default Home => {
  return (
    <div className="container-fluid" style={styles.bgColor}>
      <div className="row justify-content-center pb-5 pt-5">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12 my-auto text-center">
          <img className="img-fluid" 
            src={require("./img/full-circle-white.png")} 
            alt="Full Circle Birth Logo" 
            style={styles.imgSize}
          />
          <img className="img-fluid rounded" 
            src={require("./img/pregnant.jpg")} 
            alt="Full Circle Birth Logo" 
            style={styles.imgSize2}
          />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 my-auto">
          <h3 className="font-weight-light mt-5 mb-5 text-white text-center">COMPLETE YOUR CIRCLE OF CARE</h3>
          <p className="lead text-white">
            Doula Services, Lactation Support and Childbirth Education Classes 
            that believe in the freedom to make decisions based on knowledge of 
            alternatives in family-centered maternity and newborn care.
          </p>
          <hr className="my-4" style={styles.break} />
          <p className="lead text-white font-italic">
            doula: a trained professional who provides continuous physical,
            emotional and informational support to a mother before, during 
            and shortly after childbirth to help her achieve the healthiest, 
            most satisfying experience possible.
          </p>
          <hr className="my-4" style={styles.break} />
          <TestimonyCarousel className="mb-5" />
        </div>
      </div>
    </div>
  )
}