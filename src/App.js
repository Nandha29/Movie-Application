import Header from './Header/header';
import './App.css';
import React from 'react';
import Body from './Body/Body';
import Footer from './footer/footer'
import Home from './Header/Headercontent/Home';
import Recentmovies from './Header/Headercontent/Recentmovies';
import Oldmovies from './Header/Headercontent/Oldmovies';
import Aboutus from './Header/Headercontent/Aboutus';
import Actionmovies from './Body/actionmovies';
import Cartoonmovies from './Body/cartoonmovies';
import Comedymovies from './Body/comedymovies';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Overallmovies from './Body/overallmovies';
import Rescuer from './Body/actionmovieitems/rescuer';
import Gijoe from './Body/actionmovieitems/gijoe';
import Ff from './Body/actionmovieitems/ff';
import Re from './Body/actionmovieitems/re';
import Lf from './Body/actionmovieitems/lf';
import Gilli from './Body/comedymoviesitem/gilli';
import Kalavani from './Body/comedymoviesitem/Kalavani';
import Suthukavvum from './Body/comedymoviesitem/suthukavvum';
import Giri from './Body/comedymoviesitem/giri';
import Tamilpadam from './Body/comedymoviesitem/tamilpadam';
import Howtotrainyourdragon from './Body/cartoonmovieitems/howtotraunyourdragon';
import Signup from './signup/signup';

function App() {
  return (
    <Router>
      <div >
        <Header/>
        <Routes>
          
          <Route path='/' element={ <Body/>}/>
          <Route path='recentmovies' element={<Recentmovies/>}/>
          <Route path='oldmovies' element={<Oldmovies/>}/>
          <Route path='about' element={<Aboutus/>}/>
          <Route path='actionmovies' element={<Actionmovies/>}/>
          <Route path='comedymovies' element={<Comedymovies/>}/>
          <Route path ='cartoonmovies' element={<Cartoonmovies/>}/>
          <Route path='rescuer' element={<Rescuer/>}/>
          <Route path='gijoe' element={<Gijoe/>}/>
        </Routes>
        
          <Footer/>
          
          
          
        
         
          
      </div>
    </Router> 
  );
}

export default App;
