import './App.css'
import PopUpWindow from './PopUpWindow';
import HomePageContent from './HomePageContent';
import GridContent from './gridcontent';
import Footer from './footer';
import "./index.css";
import { useEffect, useState } from 'react';
import Advert from './Advert';

function App() {
  const [MobileSizing, setMobileSizing] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setMobileSizing(window.innerWidth <= 480);
    };

    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {MobileSizing ? (<PopUpWindow style={{ display: "column"}}/>) : (
        <PopUpWindow />
      )}
      <HomePageContent />
      <GridContent />
      <Advert />
      <Footer />
    </>
  )
}

export default App;
