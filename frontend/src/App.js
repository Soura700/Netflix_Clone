import logo from './logo.svg';
import './index.css';
import ProgramGuide from './Pages/ProgramGuide/ProgramGuide';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './Pages/Login/Login';

function App() {
  return (
    // <div className="App bg-slate-500">
    <div className="App bg-white home">
      {/* <ProgramGuide/> */}
      <Home/>
      {/* <Footer/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
