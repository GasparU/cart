import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useDispatch } from 'react-redux'
import "./style/filterCategory.css"
import { getAllProductsThunk } from '../../store/slices/products.slice'


const FilterCategory = () => {

    const URL_BASE = import.meta.env.VITE_REACT_APP_URL
    const url = `${URL_BASE}/categories`
    const [categories, getAllCategories] = useFetch(url)
    const dispatch = useDispatch()

    useEffect(() => {
        getAllCategories()
    }, [])

    const handleClickCategories = (id) => {
        const url = `${URL_BASE}/products?categoryId=${id}`
        dispatch(getAllProductsThunk(url))
    }

    const handleClickAllProducts = () => {
        dispatch(getAllProductsThunk())
    }

    return (
        <article>
            <h3>Category</h3>
            <ul>
                <li className='category' onClick={handleClickAllProducts}>All Products</li>
                {
                    categories?.map(category => <li className='category' onClick={() => handleClickCategories(category.id)} key={category.id}>{category.name}</li>)
                }
            </ul>
        </article >
    )
}

export default FilterCategory