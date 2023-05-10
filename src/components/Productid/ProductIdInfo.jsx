import React, { useState } from 'react'
import "./styles/productIdInfo.css"
import useCrudCart from '../../hooks/useCrudCart'

const ProductIdInfo = ({ product }) => {
    const [quantity, setQuantity] = useState(1)

    const { addProductCart } = useCrudCart()

    const handlePlus = () => {
        setQuantity(quantity + 1)
    }
    const handleMinus = () => {
        if ((quantity - 1) >= 1) {
            setQuantity(quantity - 1)
        }
    }
    const handleAddToCart = () => {
        const data = {
            quantity: quantity,     //si puede poner solo quantity sin necesidad de pner quantity : quantity
            productId: product.id
        }
        addProductCart(data)
    }
    return (
        <section className='productIdInfo__container'>
            <h3>{product?.brand}</h3>
            <h2>{product?.title}</h2>
            <p className='productIdInfo__text'>{product?.description}</p>
            <footer className='productIdInfo__footer'>
                <div className='productIdInfo__price-container'>
                    <span className='productIdInfo__price-text'>Price</span>
                    <span className='productIdInfo__prince-money'>{product?.price}</span>
                </div>
                <div>
                    <span className='productIdInfo__price-text'>Quantity</span>
                    <div className='productIdInfo__add'>
                        <button onClick={handleMinus}>-</button>
                        <div>{quantity}</div>
                        <button onClick={handlePlus}>+</button>
                    </div>
                </div>
                <button onClick={handleAddToCart} className='productIdInfo__buttom'>Add to Card <i className='bx bx-cart'></i></button>
            </footer>
        </section>
    )
}

export default ProductIdInfo