import React from'react';
import Navbar from './components/Navbar/Navbar';
import './App.css'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import { actions, originals } from './Urls';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Banner/>
       <RowPost url={originals} title='Netflix Originals'/>
       <RowPost url={actions} title='Actions' isSmall/>
    </div>  
  );
}

export default App;

