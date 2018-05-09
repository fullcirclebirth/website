import React from 'react'

const styles = {
  footer: {
    backgroundColor: "#38588F",
    color: "#5DBCD2"
  }
}

export default Footer => {
  return (
    <div className="navbar-bottom" style={styles.footer}>
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-3">
            <p className="lead mb-0">Serving Chattanooga, TN and surrounding areas</p>
          </div>
          <div className="col-md-6 mt-3">
            <p>Logos or other content?</p>
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