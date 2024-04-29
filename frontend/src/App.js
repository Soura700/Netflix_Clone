import logo from './logo.svg';
import './index.css';
import ProgramGuide from './Pages/ProgramGuide/ProgramGuide';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './Pages/Login/Login';
import Account from './components/Account/Account';
import MoviePopup from './components/MoviePopup/MoviePopup';



function App() {
  return (
    // <div className="App bg-slate-500">
    // <div className="App bg-white home">
    <div className="App">
      {/* <ProgramGuide/> */}
      <Home/>
      {/* <Footer/> */}
      {/* <Login/> */}
      {/* <Account/> */}
      {/* <MoviePopup/> */}
    </div>
  );
}

export default App;
