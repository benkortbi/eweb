import { useContext } from 'react'
import { DataContext } from '../layouts/HomeLayout'
import { Container, Row, Col} from 'react-bootstrap'
import { useLoaderData } from 'react-router-dom'
import Product from '../comps/Product'

const Products = () => {
  const data = useContext(DataContext)
  const actualData = data.DATA.products.map(el => ({...el, quantity: 0}))
  return(
    <>
    <Container className='grid main py-2'>
    <Row className='row'>
    {actualData.map(product => 
    <Col xs={6} md={4} className='col' key={product.id}>
    <Product title={product.title} desc={product.description} price={product.price} pic={product.images[0]} params={product.id} />
    </Col>
    )}
    </Row>
    </Container>
    </>
    )
}
export default Products;

