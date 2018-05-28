import React from 'react'

const styles = {
  bgColor: {
    background: '#5DBCD2',
  },
  break: {
    background: "#fff",
  }
}

export default Testimony => {
  return (
    <div className="container-fluid" style={styles.bgColor}>
    <div className="row justify-content-center">
      <div className="col-md-8 my-auto">
        <h2 className="font-weight-light mt-5 mb-5 text-white text-center">Client Testimonials</h2>
        <blockquote className="blockquote">
          <p className="lead text-white">
            Amanda is the best. She spared no time before, during or after my birth to make 
            sure all my questions and concerns were addressed. During my birth, she was able 
            to aid in averting a C-section because of her skilled interactions with the nurses, 
            midwife and doctor. I am so grateful for her presence and integral involvement in 
            bringing my daughter into this world. Also, her knowledge of holistic post-birth 
            and baby practices were essential to those first few weeks. I wont do it again 
            without her! 
          </p>
          <footer className="blockquote-footer text-white text-center"><cite>Ongeleigh U</cite></footer>
        </blockquote>
        <hr className="my-4" style={styles.break} />
        <blockquote className="blockquote">
          <p className="lead text-white">
            Amanda was an awesome doula! This was my first pregnancy and I thought I had read 
            enough and prepared enough from my birthing class to know what to expect. I wanted 
            a QUICK, natural, unmedicated water birth. As it turns out, you can't completely control 
            the type of labor you have and Amanda was a tremendous asset in helping me cope with that. 
            From first contraction to holding my babe, it was 60 hours. Of course, there were a few times 
            I pleaded for an epidural and Amanda helped me breath through the pain. But there got to a point, 
            where I needed the epidural to rest in order to have the strength the push out the baby. 
            Amanda didn't shun me for this even when my labor slowed down after the epidural. She even 
            recalled a method one of the midwives had mentioned of getting the baby to respond without the 
            use of an IFM. Although, I didn't get my "dream birth", she helped me stay on track as close as 
            possible to my birth plan. If you are looking for a doula who is patient, resourceful and firm yet 
            gentle, Amanda is your gal!
          </p>
          <footer className="blockquote-footer text-white text-center"><cite>Ansley B</cite></footer>
        </blockquote>
        <hr className="my-4" style={styles.break} />
        <blockquote className="blockquote">
          <p className="lead text-white">
            There are not enough superlatives to describe Amanda's amazing doula talents.  We felt immediately 
            comfortable with her from our first meeting.  She was proactive, knowledgable, supportive of my 
            ideals and birth goals, while being immensely encouraging during the most challenging and arduous 
            58 hours of my life. As first time parents, we were initially skeptical that we would even need a doula. 
            Having now been through the birthing experience, we truly understand and appreciate the enormous necessity 
            of a great birth doula. Amanda skillfully performed a vital role, and we simply couldn't have done it 
            without her. Birthing is a transformative journey not only for the mother, but both parents. 
            We both couldn't have fared the long and difficult passage into parenthood without her tremendous support. 
            We fondly cherish the memories of our baby's birth, and we were fortunate to have had Amanda as a part 
            of our experience.
          </p>
          <footer className="blockquote-footer text-white text-center"><cite>Melissa Deles, Eric Cummings and baby Emmett</cite></footer>
        </blockquote>
        <hr className="my-4" style={styles.break} />
        <blockquote className="blockquote">
          <p className="text-white">
            I had very high hopes for my birth experience as a first time mom, and of course, very little went as 
            I expected! On the day I went into labor, my baby was already two weeks late and I was scheduled to be 
            induced the next morning. My husband and I were so grateful to have Amanda come to our home and encourage 
            us throughout the process of labor. She helped us figure out when to leave for the hospital and advocated 
            for us from the time we arrived until we finally met our baby girl, almost three days after my contractions 
            began. Her help was invaluable. I've had several friends ask me if having a doula attend my birth really 
            made a difference. My answer is simple: don't give birth without one! 
          </p>
          <footer className="blockquote-footer text-white text-center"><cite>Eryn M</cite></footer>
        </blockquote>
      </div>
    </div>
  </div>
  )
}