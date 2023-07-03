
import { Outlet } from "react-router-dom";
import NavScroll from "./components/navbar/navbar";
import Footer from './components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const user = false;
  return (
    <div className='container'>
      <NavScroll />
      <Outlet />      
      <Footer />
    </div>
  );
}

export default App;
