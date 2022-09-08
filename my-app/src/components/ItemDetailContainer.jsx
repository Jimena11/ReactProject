import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { obtenerProducto } from '../services/mocks'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  let { id } = useParams();
  const [cargando, setCargando] = useState(false)
  const [producto, setProducto] = useState(undefined)
  
  useEffect(() => {
    setCargando(true)
    obtenerProducto(id).then((producto) => {
      setProducto(producto)
      setCargando(false)
    })
  }, [id])

  return <ItemDetail cargando={cargando} producto={producto} />
}

export default ItemDetailContainer