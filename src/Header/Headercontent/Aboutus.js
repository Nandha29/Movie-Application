import React from 'react'
import './Aboutus.css'

function Aboutus() {
  return (
    <div className='about'>
      <h3>Please get in touch and our expert support <br/>
          team will answer all your questions</h3>
      <form>
          <input type="text" placeholder="Full name"/><br/>
          <input type="mail" placeholder="Mail Id"/><br/>
          <textarea type="text" rows="3" placeholder='Your message'/><br/>
          <button>Submit</button>
          
      </form>
      
      
    </div>
  )
}

export default Aboutus