import React from 'react'

const styles = {
  resources: {
    backgroundColor: "#fff",
    color: "#38588F",
  },
  header: {
    color: '#5DBCD2',
  },
  list: {
    listStyle: "none",
  }
}

export default Resources => {
  return (
    <div className="jumbotron jumbotron-fluid my-auto" style={styles.resources}>
      <div className="container lead mtb-5 ml-5">
        <h1 className="display-4 text-center mb-5" style={styles.header}>Resources</h1>
        <div className="row">
          <div className="col-md-6">
            <ul className="list-group text-center" style={styles.list}>
            {/* make li links to resources */}
              <li className="mb-2">ICEA Certified Doula</li>
              <li className="mb-2">Childbirth Educator</li>
              <li className="mb-2">Certified Lactation Counselor</li>
              <li className="mb-2">Spinning Babies</li>
              <li className="mb-2">Evidence Based Birth</li>
              <li className="mb-2">Birth without Fear</li>
              <li className="mb-2">Books ... </li>
              <li className="mb-2">Nutrition ... </li>
            </ul>
          </div>
          <div className="col-md-6">
            <p className="lead">
              Aesthetic pitchfork post-ironic, letterpress unicorn cliche adaptogen you probably 
              haven't heard of them ugh cray pok pok. Squid vice 90's, poke microdosing iPhone sartorial 
              pok pok austin waistcoat cray succulents everyday carry hot chicken. Man bun plaid beard 
              cray, tofu jianbing farm-to-table wolf. Tofu bicycle rights brooklyn vape. Retro yuccie 
              biodiesel vinyl deep v scenester. Palo santo iceland shaman, pabst 3 wolf moon blue bottle 
              before they sold out chartreuse seitan paleo cloud bread ugh hell of occupy. Distillery wolf art 
              party, irony sriracha occupy taxidermy gentrify iceland cliche forage quinoa chambray. 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}