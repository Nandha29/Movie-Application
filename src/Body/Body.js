import React from 'react'
import './Body.css'
import {Link} from 'react-router-dom'


function Body() {
  return (
     
        
    <div className='body'>
        <div>
           
            <img className='app' src="https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225-xl.jpg"/>
        </div>

        <Link to="actionmovies">
            <div className='bodycontent1'>
            <img src="https://th.bing.com/th/id/OIP.TzEYatjfCs5m39Xc47AwmAHaD5?w=338&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt=" "/>
            <h2>Enjoy action movies</h2>
            </div>
         </Link>

         <Link to="comedymovies">
            <div className='bodycontent1'>
            <h2>Enjoy comedy movies</h2>
            <img src="https://th.bing.com/th/id/R.a4ce463bcf9df09dd93a172e738a08ec?rik=%2fYdpFuUicYazRQ&riu=http%3a%2f%2fscreentalk.com.au%2fwp-content%2fuploads%2f2016%2f04%2f13-1078x516.jpg&ehk=Ky4KltMqyD%2btA4hoh7Fw7P5wo%2bEmL4BOJh%2f3V0YQUz4%3d&risl=&pid=ImgRaw&r=0" alt=" "/>
            </div>
        </Link> 
        
        <Link to="cartoonmovies">
            <div className='bodycontent1'>
            <img src="https://th.bing.com/th/id/OIP.ebfAqtmqnxnnUH5e4f_5dwHaDt?pid=ImgDet&rs=1" alt=" "/>
            <h2>Enjoy cartoon movies </h2>
            </div>
        </Link>
    
    </div>
    
    
  )
}

export default Body