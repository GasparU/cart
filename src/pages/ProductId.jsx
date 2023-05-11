import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProductIdInfo from '../components/Productid/ProductIdInfo'
import SliderImgs from '../components/Productid/SliderImgs'
import SimilarProducts from '../components/Productid/SimilarProducts'
import "./style/productId.css"

const ProductId = () => {
    const { id } = useParams()
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
    const [product, getProductById] = useFetch(url)
    useEffect(() => {
        getProductById()
    }, [id])

    return (
        <div className='producid__container'>
            <div className='producid__container-card'>
                <SliderImgs className="productid__sliderimg" product={product} />
                <ProductIdInfo className="productid__productinfo" product={product} />
            </div>
            <div className='producid__body'>
                <SimilarProducts product={product} />
            </div>
        </div>
    )
}

export default ProductId