import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Betting_Rules from './components/how_to_bet';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useMatch,
  useParams
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route exact path="/home" element={<Home/>}>
          </Route>
          <Route exact path="/Login" element={<Login/>}>
          </Route>
          <Route exact path="/Register" element={<Register/>}>
          </Route>
          <Route exact path="/Betting-Rules" element={<Betting_Rules/>}>
          </Route>
          <Route exact path="/" element={<Home/>}>
          </Route>
      </Routes>
    </Router>
    {/* <Bet/> */}
    {/* <Home/> */}
    {/* <Login/> */}
    {/* <Register/> */}
    {/* <Betting_Rules/> */}
    </>
  );
}

export default App;
