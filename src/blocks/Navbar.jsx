import {
  Container,
  Navbar,
  Button,
  Offcanvas
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import {
  useState, useContext 
} from 'react'
import { formatThis } from '../functions/formatter.js'
import { DataContext } from '../layouts/HomeLayout'

import CardModel from '../comps/CardModel'


function Header() {
  const dataContext = useContext(DataContext)
  
 const res =  dataContext.itemsList.map(product => product.quantity * product.price)
 const total = res.reduce((prv, ac) => prv + ac , 0)
  
  const [show,
    setShow] = useState(false)
  const handleMenu = () => {
    setShow(true)
  }
  const onHide = () => {
    setShow(false)
  }
  
  return (
    <>
    <header className='bg-light shadow'>
    <Container>
      <Navbar expand="lg">
          <Navbar.Brand>
          <NavLink to='/' className='fs-5 fw-bold text-dark text-decoration-none'>SHOPER</NavLink>
          </Navbar.Brand>
          <Button onClick={handleMenu} variant='outline-dark' className='ms-auto py-2 px-3 fs-5 fw-normal d-flex align-items-center gap-2'>
          cart: <span>{dataContext.itemsList.length}</span>
          </Button>
      </Navbar>
    </Container>
    </header>
    <Menu show={show} handleClose={onHide} totalPrice={total}/> < />
  );
}

export default Header;


const Menu = ({ show, handleClose, totalPrice}) => {
    const data = useContext(DataContext)
    return(
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          Cart
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {data.itemsList.map((item, ind) => <CardModel key={ind} element={item.id} price={item.price} quantity={item.quantity} pic={item.images[0]}/>)}
        </Offcanvas.Body>
        <div className='position-fixed bottom-0 left-0 right-0 w-100 py-2'>
        <Container>
        <p className='w-full bg-warning ps-3 py-2 text-white fw-bold fs-5 mb-1 rounded'>Total Price : <span>{formatThis(totalPrice)}</span></p>
        <Button className='py-2 w-100 d-block fs-5 fw-bold' variant='outline-danger'>Checkout to Payment</Button>
        </Container>
        </div>
      </Offcanvas>
    )
  }