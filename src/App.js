import Navbar from './component/Navbar'
import Banner from './component/Banner';
import Programs from './component/Programs';
import ParentSpeak from './component/ParentSpeak';
import Footer from './component/Footer';
import About from './component/About';
import Admission from './component/Admission';
import Programspage from './component/Programspage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './component/Contact';
import Gallery from './component/Gallery';
import Admin from './component/Admin';
import ContextProvider from './context/ContextProvider';
import ClientData from './component/ClientData';
import Franchisedata from './component/Franchisedata';
import Alert from "./component/Alert"
import { useEffect, useState } from 'react';
import GalleryCarousel from './component/GalleryCarousel';



function App() {
  const [alert, setAlert] = useState(false)
  const [isadmin, setIsadmin] = useState(false)


 const showAlert = (message, type) =>{
    setAlert({message, type});
  };

 const removeAlert = () => {
    setAlert(null);
  };
 


  return (
    <ContextProvider setIsadmin={setIsadmin} >
      <BrowserRouter>
        {!isadmin &&  <Navbar/>}
        {alert && (
          <Alert message={alert.message} type={alert.type} showAlert={showAlert} onRemove={removeAlert} />
        )}
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/admission" element={<Admission showAlert={showAlert} removeAlert={removeAlert} />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/programs" element={<Programspage />} />
          <Route exact path="/contact" element={<Contact showAlert={showAlert} removeAlert={removeAlert} />} />
          <Route exact path="/admin" element={<Admin />} />
          {isadmin && <Route exact path="/clientdata" element={<ClientData />} />}
          {isadmin && <Route exact path="/franchisedata" element={<Franchisedata />} />}
        </Routes>
        {!isadmin && <Footer />}
      </BrowserRouter>
    </ContextProvider>
  );
        }

function Home() {
  return (
    <div>
      <Banner />
      <Programs />
      <ParentSpeak />
    </div>
  )
}

export default App;
