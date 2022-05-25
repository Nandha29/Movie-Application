import React from 'react'
import './actionmovies.css'
import {Link} from 'react-router-dom'

function actionmovies() {
  return (
    <div>
    <div>
    <Link to= 'rescuer'>
    <div className='Actiondiv'>
    <img className='Action' src="https://tse4.mm.bing.net/th/id/OIP.I_elZ7BdM5pkmnnce7hQzgHaEK?pid=ImgDet&rs=1" alt=''/>
    <h3>RESCUER</h3>
    </div></Link>

    <Link to="gijoe">
    <div className='Actiondiv'>
    <h3>GI JOE</h3>
    <img className='Action' src="https://thewildanddomestic.com/wp-content/uploads/2020/10/G.I-Joe-Retailation.jpg" alt=''/>
    
    </div></Link>

      <Link to="ff">
    <div className='Actiondiv'>
    <img className='Action' src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/05/27/15/ff6.jpg" alt=''/>
    <h3>FAST AND FURIOUS</h3>
    </div></Link>

    <Link to="re">
    <div className='Actiondiv'>
    <h3>RECIDENT EVIL</h3>
    <img className='Action' src="https://tse1.mm.bing.net/th/id/OIP.qSAXglXHeqvWviWjRQndbQHaEK?pid=ImgDet&rs=1" alt=''/>
    
    </div></Link>

    <Link to="lf">
    <div className='Actiondiv'>
    <img className='Action' src="https://th.bing.com/th/id/R.e0e15397d45ea43f64d16ac8682e4bee?rik=to4Z9WF%2f%2bV4V%2fg&riu=http%3a%2f%2fi2.wp.com%2fteaser-trailer.com%2fwp-content%2fuploads%2fLondon-Has-Fallen-New-Banner-Poster-2.jpg&ehk=efkKi0q%2fJdDj5LyoZkTErt8hAJLKfQUV5oIn5GpVPPY%3d&risl=&pid=ImgRaw&r=0" alt=''/>
    <h3>LONDON HAS FALLEN</h3>
    </div></Link>
</div>
    </div>
  )
}

export default actionmovies