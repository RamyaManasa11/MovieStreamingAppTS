import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import HomePages from './home/HomePages';
import Header from './components/header/Header'
import SinglePage from './components/watch/SinglePage';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
     <Header/>
     <Routes>
      <Route  path="/" element={<HomePages />}/>
      <Route path='/singlepage/:id' element={<SinglePage/>} />
    </Routes> 
    <Footer/>
    </>
  );
}

export default App;
