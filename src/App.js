import AppBar from './components/AppBar';
import SearchBar from './components/SearchBar'
import MiddleBar from './components/MiddleBar';
import SideBar from './components/SideBar'
import DisplayItems from './components/DisplayItems';
import Drawer from './components/Drawer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Complete from './Page/Complete'
import Checkout from './Page/Checkout'
import './app.css';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<section className='container' style={{position:'relative'}}><AppBar/>
        <SearchBar/>
        <Drawer/>
        <MiddleBar/>
        <div style={{margin:'2rem 3rem',height:"2px",width:"90%",background:'#eee'}}></div>
        <SideBar/>
        <DisplayItems/></section>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/complete' element={<Complete/>}/>
      </Routes>
    </Router>
  );

}

export default App;
