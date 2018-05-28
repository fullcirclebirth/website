import React from 'react'

const styles = {
  about: {
    color: "#38588F",
  },
  certs: {
    color: "#5DBCD2",
  },
  break: {
    background: "#38588F",
  },
  break2: {
    background: "#5DBCD2"
  }
}

export default About => {
  return (
    <div className="container-fluid mb-0" style={styles.about}>
      <h2 className="text-center text-uppercase mt-5 font-weight-light">About Amanda</h2>
      <p className="text-center lead mtb-5" style={styles.certs}>ICEA Certified Doula, Childbirth Educator and Certified Lactation Counselor</p>
      <hr className="my-4" style={styles.break} />
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 my-auto text-center pt-5 pb-5">
          <img className="rounded-circle" src={require("./img/amanda.jpg")} alt="Amanda"/>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 my-auto">
          <p className="lead">
            I believe that a woman’s body was designed to grow and birth a baby. The process 
            is normal and not a pathological condition or one to be viewed and treated as an illness. 
            Yet, I recognize that we live in a broken world with bodies that do not always function 
            according to this design. For this reason I am thankful we have access to lifesaving 
            tools and resources. They are tools in our tool box, but not ones we need to jump to 
            using with out necessity. 
          </p>
          <hr className="my-4" style={styles.break2} />
          <p className="lead">
            When parents take my Childbirth Education class I provide information that allows parents 
            to feel empowered and have positive feelings about the birthing process, a class that 
            promotes informed decision making based on all available options, and a class that provides 
            the most up to date information on evidence based care for mother and baby.
          </p>
          <hr className="my-4" style={styles.break2} />
          <p className="lead">
            When I serve families as their Doula they can expect the mother to be the in the center of her 
            circle of care. My goal is to create a safe space in which the mother, her partner and her care 
            providers communicate respectfully and the mother is empowered to cope through the birthing process. 
          </p>
          <hr className="my-4" style={styles.break2} />
          <p className="lead">
            My passion for supporting mothers started with the birth of my two children. 
            I enjoy spending time with my family, cooking and running.
          </p>
        </div>
      </div>
      <hr className="my-4" style={styles.break2} />
      <div className="text-center mt-5 mb-5">
        <p className="lead">
          I encourage you to check out the Resources page to learn more about my certifications 
          and some of my favorite places to learn about pregnancy, birth and breastfeeding.  
        </p>
      </div>
    </div>
  )
}