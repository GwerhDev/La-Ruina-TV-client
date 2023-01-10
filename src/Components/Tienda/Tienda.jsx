import React, { useEffect } from 'react'
import Products from './Products'
import s from './css/Tienda.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../middlewares/redux/actions'
import { BodyCss } from '../../functions/BodyCss'
import { Link } from 'react-router-dom'

export const Tienda = () => {
  BodyCss()
  const dispatch = useDispatch()
  const products = useSelector(state=>state.products)
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
  return (
    <div className={s.tiendaCont}>
      <ul className={s.ulProducts}>
        <h1>Merchandising</h1>
        <ul className={s.ulProducts}>
        {
          products?
          products.map(e => {
            return(
            <>  
              <Link to={`/tienda/product/${e.idProduct}`}><li key={products.indexOf(e)}>
                <Products 
                  idProduct={e.idProduct} 
                  typeProduct={e.typeProduct} 
                  nameMerch={e.nameMerch} 
                  stock={e.stock} 
                  idImg={e.idImg} />
              </li></Link>
            </>  
              )
            }
          ) : null
        }
        </ul>
      </ul>
    </div>
  )
}
