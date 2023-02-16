import { useContext } from 'react'
import { ImBin2 } from 'react-icons/im'
import { formatThis } from '../functions/formatter.js'
import { DataContext } from '../layouts/HomeLayout'
const CardModel = ({element,title, quantity, price, pic}) => {
  const dataContext = useContext(DataContext)
  
  const removeHandler = (el) => {
   dataContext.setItemsList(dataContext.itemsList.filter(product => product.id !== el))
  }
  return(
    <>
    <div className='model border border-1 border-dark rounded p-2 position-relative d-flex gap-2 mb-2'>
    
    <img src={pic} alt='...' className='modelImg'/>
    
    <div className='d-flex flex-column justify-content-between'>
    <p>× {quantity}</p>
    <p>{formatThis(price * quantity)}</p>
    </div>
    
    <ImBin2 size='1.5rem' className='ms-auto align-self-center' onClick={() => removeHandler(element)}/>
    
    
    </div>
    </>
    )
}
export default CardModel