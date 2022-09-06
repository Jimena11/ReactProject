import {useState, useEffect} from 'react'
import { obtenerProducto } from '../services/mocks'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(false)
  const [producto, setProducto] = useState(undefined)
  
  useEffect(() => {
    setCargando(true)
    obtenerProducto(1).then((producto) => {
      setProducto(producto)
      setCargando(false)
    })
  }, [])

  return <ItemDetail cargando={cargando} producto={producto} />
}

export default ItemDetailContainer