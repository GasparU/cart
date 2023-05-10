import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import CardProduct from '../Home/CardProduct'
import "./styles/similarProducts.css"
import { useNavigate } from 'react-router-dom'

const SimilarProducts = ({ product }) => {

    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${product?.categoryId}`


    // const navigate = useNavigate()
    const [filterProducts, getCategoryByCategory] = useFetch(url)

    useEffect(() => {
        if (product) {
            getCategoryByCategory()
        }
    }, [product])

    // const handleSelectProduct = () => {
    //     console.log(product.id)
    //     navigate(`/product/${product.id}`)
    // }

    // console.log(product.id)

    return (
        <section className="similarProducts__container">
            <h2 className='similarProducts__text'>Discover Similar Products</h2>
            <div className="similarProducts__card">
                {
                    filterProducts?.map(prod => {
                        if (prod.id !== product.id) {
                            return <CardProduct
                                // onClick={handleSelectProduct} 
                                className="similarPRoducts__card2" key={prod.id} product={prod} />
                        }
                    })
                }
            </div>
        </section>
    )
}

export default SimilarProducts