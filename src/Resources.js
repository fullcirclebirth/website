import React from 'react'
import './index.css'

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
  },
  break: {
    background: "#38588F",
  },
}

export default Resources => {
  return (
    <div className="container-fluid">
      <div className="jumbotron jumbotron-fluid my-auto" style={styles.resources}>
        <h2 className="font-weight-light text-uppercase text-center mb-5" style={styles.header}>Resources</h2>
        <hr className="my-4" style={styles.break} />
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pt-5 pb-5">
          <p>
            Not long ago Childbirth Advocate Cristen Pascucci wrote a great open letter to women called  
            <a className="mb-2 resources" href="https://improvingbirth.org/2017/07/dear-friend/"> "Dear Friend, 
            Birth doesn't have to suck"</a>. If you're on my website you've taken a step in the direction to educate and 
            equip yourself with the tools and resources that will make your birth story completely different than it 
            would have been if you just sat back and let someone else direct this journey. It is hard to swim up stream; 
            to go against what culture has ingrained in us for decades. When you choose to be actively involved in 
            decision making with your care provider; you are changing the culture of birth for your children. It can 
            decades for us to see lasting change in the medical model. The birth of our children is a consumer driven market, 
            and as the consumer you can speak loud a clear about what you want your care to look like. My passion runs deep 
            for our over all health and well being. The birth process and the support we receive for breastfeeding deeply 
            impact the physical, biological, and emotional health of a family long term. There are so many resources I love 
            and want to share with you about birth, breastfeeding, and parenting. Remember  
            <i>When You Know Better, You Do Better, Maya Angelou.</i>  
          </p>
        </div>
        <hr className="my-4" style={styles.break} />
        <div className="row justify-content-center">
          <div className="col-md-4 justify-content-center">
            <h3 className="font-weight-light text-center">Certifying Organizations</h3>
            <ul className="list-group text-center mb-2" style={styles.list}>
              <a className="mb-2 resources" href="http://icea.org/">The International Childbirth Education Association</a>
              <a className="mb-2 resources" href="https://www.alpp.org/">The Academy of Lactation Policy and Practice</a>
            </ul>
            <h3 className="font-weight-light text-center">Birth Websites</h3>
            <ul className="list-group text-center mb-2" style={styles.list}>
              <a className="mb-2 resources" href="https://evidencebasedbirth.com/blog/">Evidence Based Birth</a>
              <a className="mb-2 resources" href="http://birthwithoutfearblog.com/">Birth Without Fear</a>
              <a className="mb-2 resources" href="https://www.mamanatural.com/">Mama Natural</a>
              <a className="mb-2 resources" href="https://avivaromm.com/category/natural-pregnancy/">Aviva Romm MD - Natural Pregnancy</a>
              <a className="mb-2 resources" href="http://www.ican-online.org/">International Cesarean Awareness Network</a> 
            </ul>
            <h3 className="font-weight-light text-center">Breastfeeding</h3>
            <ul className="list-group text-center" style={styles.list}>
              <a className="mb-2 resources" href="http://www.nancymohrbacher.com/">Nancy Mohrbacher - Breastfeeding Reporter Blog</a>
              <a className="mb-2 resources" href="https://www.llli.org/">La Leche League International</a>
            </ul>
          </div>
          <div className="col-md-4 justify-content-center">
            <h3 className="font-weight-light text-center">Books</h3>
            <ul className="list-group text-center" style={styles.list}>
              <a className="mb-2 resources" href="https://www.amazon.com/Birth-Partner-Completely-Revised-Updated/dp/1558328807">The Birth Partner, 4th Edition</a>
              <a className="mb-2 resources" href="https://www.amazon.com/Thinking-Womans-Guide-Better-Birth/dp/0399525173/ref=pd_sim_14_17?_encoding=UTF8&pd_rd_i=0399525173&pd_rd_r=5VS3551GK01A42Y1G4JH&pd_rd_w=GEno1&pd_rd_wg=RWHNv&psc=1&refRID=5VS3551GK01A42Y1G4JH">
                The Thinking Woman's Guide to a Better Birth  
              </a>
              <a className="mb-2 resources" href="https://www.amazon.com/Natural-Pregnancy-Book-Third-Childbirth/dp/1607744481/ref=pd_lpo_sbs_14_img_1?_encoding=UTF8&psc=1&refRID=S1AYGCCQWPG0SCX1YYKY">
                The Natural Pregnancy Book
              </a>
              <a className="mb-2 resources" href="https://www.amazon.com/Eskimos-Keep-Their-Babies-Warm/dp/156512958X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=">
                How Eskimos Keep Their Babies Warm
              </a>
              <a className="mb-2 resources" href="https://www.amazon.com/Naturally-Healthy-Babies-Children-Commonsense/dp/1587611929">
                Naturally Healthy Babies and Children
              </a>
              <a className="mb-2 resources" href="https://www.amazon.com/dp/1617691836/?coliid=I2EP7LVKCXEAHN&colid=39B0D98FICAJJ&psc=0&ref_=lv_ov_lig_dp_it">
                The First Forty Days
              </a>
              <a className="mb-2 resources" href="https://www.amazon.com/dp/0345342763/?coliid=I3V8JSIQP4LNSI&colid=2Z6IEA58AH69N&psc=0&ref_=lv_ov_lig_dp_it">
                How to Raise a Healthy Child in Spite of Your Doctor
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}