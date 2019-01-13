import React from 'react'
import "font-awesome/css/font-awesome.css"

const styles = {
  footer: {
    backgroundColor: "#38588F",
    color: "#fff"
  },
  icon: {
    color: "#fff",
    textDecoration: "none"
  }
}

export default Footer => {
  return (
    <div className="navbar-bottom" style={styles.footer}>
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-3">
            <p className="lead mb-0">Serving Chattanooga TN and North GA including: Calhoun, Dalton, Rome</p>
          </div>
          <div className="col-md-6 mt-3 links">
            <a className="fab fa-facebook-f fa-3x"
              style={styles.icon}
              href="https://www.facebook.com/FullCircleCBE/"
            >  
            </a>
            <a 
              className="text-white pl-3" 
              href="mailto:Amanda.FullCircleBirth@gmail.com?subject=I want to learn more about Full Circle Child Birth">
              Amanda.FullCircleBirth@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>

    <div className="copyright py-4 text-center">
      <div className="container">
        <small>Copyright &copy; Full Circle Childbirth Education 2018</small>
      </div>
    </div>
</div>
  )
}
