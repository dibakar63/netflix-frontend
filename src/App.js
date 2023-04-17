import './App.scss';
import { Routes,Route} from 'react-router-dom';
import Home from './componenets/Home';
import Header from './componenets/Header/Header';
import Login from './componenets/Auth/Login';
import Register from './componenets/Auth/Register';
import Movies from './componenets/pages/Movies';
import RecentlyAdded from './componenets/pages/Recentlyaddes';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/recent' element={<RecentlyAdded/>}/>
      </Routes>
    </div>
  );
}

export default App;
