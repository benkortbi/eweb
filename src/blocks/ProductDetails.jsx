import { useState, useContext } from 'react'
import {
  Container, Carousel, Button
} from 'react-bootstrap'
import {
  useParams, useLoaderData, NavLink
} from 'react-router-dom'
import { formatThis } from '../functions/formatter.js'
import { AiFillLeftCircle } from 'react-icons/ai'
import { DataContext } from '../layouts/HomeLayout'
const ProductDetails = () => {
  const {
    id
  } = useParams()
  const dataContext = useContext(DataContext)
  const singleData = useLoaderData()
  const [actualData, setActualData] = useState({...singleData,quantity: 1})
 
  const addToCart = (el) => {
   
   if(!dataContext.itemsList.some(p => p.id === el.id)){
     dataContext.setItemsList([...dataContext.itemsList, el])
   }
  }
  
  const increase = () => {
    setActualData({...actualData, quantity: actualData.quantity + 1})
  }
  const decrease = () => {
    setActualData({...actualData, quantity: 
      actualData.quantity <= 1 ? actualData.quantity : actualData.quantity - 1
    })
  }
  return(
    <>
    <Container className='position-relative main py-2'>
    <NavLink to='/products'>
    <AiFillLeftCircle size="2rem" className='mb-3' color='black'/>
    </NavLink>
     <Carousel className='mb-4 position-relative'>
        {singleData.images.map((pic, ind) => 
              <Carousel.Item key={ind} interval={500} className='position-relative'>
        <img
          className="productViwerImg d-block w-100 rounded"
          src={pic}
          alt={`${ind} slide`}
        />
        </Carousel.Item>
        )}
    </Carousel>
    <div>
    <h2>{actualData.title}</h2>
    <p>
      {actualData.description}
    </p>
    <div className="p-3 border border-1 border-dark rounded mb-3 text-center fs-5 fw-bold">
    {formatThis(actualData.price)}
    </div>
    <div className='d-flex gap-2 align-items-center justify-content-end mb-3'>
    <Button onClick={increase} className='py-2 px-3' variant='outline-dark'>+</Button>
    <span className='px-3 border border-dark border-1 rounded py-2'>{actualData.quantity}</span>
    <Button onClick={decrease} className='py-2 px-3' variant='outline-dark'>-</Button>
    </div>
    
    <Button onClick={() => addToCart(actualData,)} variant='outline-success' className='d-block w-100 py-3 fw-bold fs-5'>Add to cart</Button>
    </div>
    </Container> < />
  )
}
export default ProductDetails;

export async function fetchSingleItem({params}){
  const { id } = params
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  return res.json()
}