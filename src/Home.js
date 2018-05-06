import React from 'react'

const styles = {
  bgColor: {
    background: '#5DBCD2',
  },
  imgSize: {
    minWidth: '350px'
  }
}

export default Home => {
  return (
    <div className="container p-0 m-0 mx-auto" style={styles.bgColor}>
      <div className="row">
        <div className="col">
          <img className="img-fluid" 
            src={require("./img/full-circle-white.png")} 
            alt="Full Circle Birth Logo" 
            style={styles.imgSize}
          />
        </div>
        <div className="col jumbotron jumbotron-fluid" style={styles.bgColor}>
          <h1 className="display-4 align-middle text-white">COMPLETE YOUR CIRCLE OF CARE</h1>
          <p className="lead text-white font-italic">
            doula: a trained professional who provides continuous physical,
            emotional and informational support to a mother before, during 
            and shortly after childbirth to help her achieve the healthiest, 
            most satisfying experience possible.
          </p>
        </div>
      </div>
    </div>
  )
}