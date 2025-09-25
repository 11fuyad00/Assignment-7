
import './App.css'
import Footer from './component/Footer'
import Navber from './component/Navber'

import { Suspense } from 'react';
import CustomarTickets from './component/customarTickets/CustomarTickets';
import Card from './component/Card';

function App() {
 

  const dataPromise = fetch('/data.json').then(res => res.json());

  return (
    <>
    
      <Navber></Navber>
      
      <Card></Card>
      

      <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
       <CustomarTickets dataPromise={dataPromise}></CustomarTickets>
      </Suspense>

      <Footer></Footer>
    </>
  )
}

export default App
