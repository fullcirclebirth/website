import React from 'react'

const styles = {
  about: {
    color: "#38588F",
  },
  certs: {
    color: "#5DBCD2",
  }
}

export default About => {
  return (
    <div className="container mb-0" style={styles.about}>
      <h2 className="text-center text-uppercase mt-5">About Amanda</h2>
      <p className="text-center lead mtb-5" style={styles.certs}>ICEA Certified Doula, Childbirth Educator and Certified Lactation Counselor</p>
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <img className="rounded-circle" src={require("./img/amanda.jpg")} alt="Amanda"/>
        </div>
        <div className="col-lg-6 ml-auto">
          <p className="lead">
            I believe that a woman’s body was designed to grow and birth a baby. The process is 
            normal and not a pathological condition or one to be viewed and treated as an illness. 
            Yet, I recognize that we live in a broken world with bodies that do not always function 
            according to this design. For this reason I am thankful we have access to lifesaving 
            tools and resources. I hope to provide a Childbirth Education class that allows parents 
            to feel empowered and have positive feelings about the birthing process, a class that 
            promotes informed decision making based on all available options, and a class that provides 
            the most up to date information on evidence based care for mother and baby. 
          </p>
          <p className="lead">
            My passion for supporting mothers started with the birth of my two children. 
            I enjoy caring for them, cooking and running.
          </p>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="lead">
          I encouraage you to check out the Resources page to learn more about 
          my certifications and other helpful facts.
        </p>
      </div>
    </div>
  )
}