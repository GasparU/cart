import React from 'react'
import useCrudCart from '../../hooks/useCrudCart'

const ProductInCart = ({ prodCart }) => {
    const { deleteProductFromCart } = useCrudCart()
    // console.log(prodCart.id)
    const handleDeleteCart = () => {
        deleteProductFromCart(prodCart.id)
    }
    console.log(prodCart)
    return (
        <article>
            <header>
                <img src={prodCart.product.images[0].url} />
            </header>
            <section>
                <h3>{prodCart.product.title}</h3>
                <button onClick={handleDeleteCart}><i className='bx bx-trash'></i></button>
            </section>
            <footer>
                <span>{prodCart.quantity}</span>
                <div>
                    <span>SubTotal:
                    </span>
                    <span>{prodCart.product.price * prodCart.quantity}
                    </span>
                </div>
            </footer>
        </article>
    )
}

export default ProductInCart