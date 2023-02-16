import { NavLink } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { AiOutlineShopping } from 'react-icons/ai'
import { formatThis } from '../functions/formatter.js'

const Product = ({params,title, pic, desc, price}) => {
  
  return(
    <>
    <Card className='card'>
      <Card.Img variant="top" className='card-image' src={pic} />
      <Card.Body className='p-1'>
        <Card.Title className='fs-6 fw-bold'>{title}</Card.Title>
        <Card.Text>
         <span className='d-inline-block text-truncate fw-light' style={{maxWidth:'150px', fontSize: '0.8rem'}}>{desc}</span>
        </Card.Text>
        <div className='d-flex justify-content-between align-items-center'>
        <NavLink to={`/products/${params}`} className='p-2 bg-dark text-white rounded d-flex align-items-center'>
        <AiOutlineShopping />
        </NavLink>
        <span className='fw-bold'style={{fontSize: '1rem' }}>{formatThis(price)}</span>
        </div>
      </Card.Body>
    </Card>
    </>
    )
}
export default Product;

