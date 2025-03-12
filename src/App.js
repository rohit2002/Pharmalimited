 import Navbar from './components/Navbar/Navbar';
 import Footer from './components/footer/Footer';
 import Hero from './components/Hero-section/Hero';
import Ours from './components/our/Ours';
import Companyview from './components/Companyoverview/Companyview';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Card from './components/teamscard/Card';

 import Maincareertab from './components/careers/Maincareertab';


import Productcard from './components/products/Productcard';
// import ProductDetails from './components/products/ProductDetails';
// import './App.css';

function App() {
  return (
<>
<BrowserRouter>
     <Navbar/>
  <Routes>
    <Route path='/' element={
      <> <Hero/>
      <Ours/> </>
      
    }></Route>
  <Route path="/Company Overview" element={<Companyview/>} />
  <Route path='/Card' element={<Card/>}></Route>
  
  <Route path='/Careers' element={<Maincareertab/>}></Route>
  <Route path='/Products' element={<Productcard/>}></Route>
  </Routes>
  <Footer/>
    </BrowserRouter>
</>)}
         {/* <div>
   
       
     
     
       <Ours/> 
  
    </div>
    <Companyview/> */}
  
    
      
       
      
      {/* <Card/> */}
       {/* <Maincareertab/> */}

      {/* <Productcard/> */}
      {/* <ProductDetails/> */}
    {/* // </BrowserRoute> */} 
  


export default App;
