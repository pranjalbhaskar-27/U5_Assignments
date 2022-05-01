import "./App.css";
import { Navi } from "./components/Navigation";
import { Home } from "./components/Home";
import { Mens } from "./components/Mens";
import { Womens } from "./components/Womens";
import { Kids } from "./components/Kids";
import { Footer } from "./components/Footer";
import About from "./components/About";
import{PageNotFound} from "./components/PageNotFound";
import {  Route,Routes,BrowserRouter } 
        from 'react-router-dom'
import MenDetails from "./components/MensDetails";
import WomensDetails from "./components/WomensDetails";
import KidDetails from "./components/KidsDetails";

function App() {
  return (
    <div className="App">
      <Navi />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/men" element={<Mens />}></Route>
        <Route path="/womens" element={<Womens/>}></Route>
        <Route path="/kids" element={<Kids/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/faq"></Route>
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/men/:id" element={<MenDetails/>}></Route>
        <Route path="/womens/:id" element={<WomensDetails/>}></Route>
        <Route path="/kids/:id" element={<KidDetails/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
