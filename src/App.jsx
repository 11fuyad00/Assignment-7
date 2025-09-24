
import './App.css'
import Footer from './component/Footer'
import Navber from './component/Navber'

function App() {
 

  return (
    <>
    
      <Navber></Navber>
      

      <div className='grid grid-cols-2 gap-10 max-w-[1200px] mx-auto my-20'>
        <div className='rounded-md p-7 text-white h-[200px] bg-gray-500'></div>
        <div className='rounded-md p-7 text-white h-[200px] bg-purple-500'></div>
      </div>
      
      <Footer></Footer>
    </>
  )
}

export default App
