
import './App.css'
 import { ToastContainer} from 'react-toastify';
import Footer from './component/Footer'
import Navber from './component/Navber'
import { Suspense, useEffect, useState } from 'react';
import CustomarTickets from './component/customarTickets/CustomarTickets';
import Card from './component/Card';


function App() {
 

  const dataPromise = fetch('/data.json').then(res => res.json());

  const [resolved, setResolved] = useState([]);

  const [selectedTask, setSelectedTask] = useState([]);

  const [inProgressCount, setInProgressCount] = useState(0);  
  

  const [resolvedCount, setResolvedCount] = useState(0);  

    useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setResolved(data));
  }, []);

  return (
    <>
    
      <Navber></Navber>
      
      <Card resolvedCount ={resolvedCount} inProgressCount ={inProgressCount}></Card>
      

      

      <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
       <CustomarTickets setResolvedCount ={setResolvedCount} resolvedCount ={resolvedCount} setInProgressCount ={setInProgressCount} inProgressCount ={inProgressCount} setResolved ={setResolved} resolved ={resolved} setSelectedTask ={setSelectedTask} selectedTask ={selectedTask} dataPromise={dataPromise}></CustomarTickets>
      </Suspense>

      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App