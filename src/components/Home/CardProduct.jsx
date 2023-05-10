import React from 'react'
import "./style/cardProduct.css"
import { useNavigate } from 'react-router-dom'
import useCrudCart from './../../hooks/useCrudCart';

const CardProduct = ({ product }) => {
    const navigate = useNavigate()
    const { addProductCart } = useCrudCart()
    const handleSelectProduct = () => {
        navigate(`/product/${product.id}`)
    }
    const handlebtnClick = (e) => {
        e.stopPropagation()
        const data = {
            quantity: 1,
            productId: product.id
        }
        addProductCart(data)
    }
    return (
        <article onClick={handleSelectProduct} className='product'>
            <header className='product__header'>
                <img
                    className='product__img product__img-1'
                    src={product.images[0].url}
                    alt=""
                />
                <img
                    className='product__img product__img-2'
                    src={product.images[1].url}
                    alt=""
                />
            </header>
            <div className='product__body'>
                <section className='product__section'>
                    <h4 className='product__subtitle'>{product.brand}</h4>
                    <h3 className='product__title'>{product.title}</h3>
                </section>
                <div className='product__price'>
                    <span className='product__price-label'>Price</span>
                    <span className='product__price-value'>{product.price}</span>
                </div>
                <button onClick={handlebtnClick} className='product__btn'><i className='bx bxs-cart product__btn-icon' ></i></button>
            </div>
        </article>
    )
}

export default CardProduct