import React,{useState,useEffect} from 'react'

const ProductQuantity = () => {

  const [product, setProduct] = useState({
    name:"Cadeira",
    quantity: 1
  })

  const updateQuantity = () => {
    setProduct((prevProduct) =>({
        ...prevProduct,
        quantity: prevProduct.quantity + 1
    }))
  }

  return (
    <>
        <p>Nome do Produto: {product.name}</p>
        <p>Quantidade: {product.quantity}</p>

        <button onClick={updateQuantity}>Aumentar Quantidade do Produto</button>
    </>
  )
}

export default ProductQuantity