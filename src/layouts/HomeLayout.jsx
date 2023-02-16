import { createContext, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Header from '../blocks/Navbar'
import Products from '../blocks/Products'
import Footer from '../blocks/Footer'
import { Outlet } from 'react-router-dom'

export const DataContext = createContext(null)

const HomeLayout = () => {
  const DATA = useLoaderData()
  const [itemsList, setItemsList] = useState([])
  const [total, setTotal] = useState([])
  return(
    
    <div className='home'>
    <DataContext.Provider value={{DATA, itemsList, setItemsList, total, setTotal}}>
     <Header />
     <Outlet />
     <Footer />
     </DataContext.Provider>
    </div>
    )
}
export default HomeLayout;

export async function getData(){
  const data = await fetch('https://dummyjson.com/products')
  return data.json()
}