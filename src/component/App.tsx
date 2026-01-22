import './App.css'
import useProduct from '../hook/useProduct'
import Layout from './Layout'
import type { Product } from '../type/type'

function App() {
  const {products} = useProduct()
  return (
    <div>
        <Layout />
        {
          products.map((product : Product)=>(
            <>
              <h1>{product.id}</h1>
            </>
          ))
        }
        {/* {
          products.map((p)=>(
            <>
              {p.id}
            </>
          ))
        } */}
    </div>
  )
}

export default App
