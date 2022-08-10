import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selectCount } from './counterSlice'
import styles from './Counter.module.css'
import { Drawer } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SectionItem from '../components/SectionItem'
import Layout from '../components/Layout'
import addProduct from '../component/carrito/addProduct'
const Counter = ({ addProduct }) => {
  const Home = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
      const getAllProducts = async () => {
        const response = await axios.get(
          `https://strapiecommerce-production-ed2c.up.railway.app/api/products?populate=*%22)#`
        )
        setProductos(response.data.data)
      }
      getAllProducts()
    }, [])
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    return (
      <>
        <Layout>
          <SectionItem productos={productos}></SectionItem>
        </Layout>

        <div>
          <div className={styles.row}>
            <button
              className={styles.button}
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              +
            </button>
            <span className={styles.value}>{count}</span>
            <button
              className={styles.button}
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              -
            </button>
          </div>
          <Drawer key={Counter}>{Counter}</Drawer>
        </div>
      </>
    )
  }
}
export default { Home, Counter }
