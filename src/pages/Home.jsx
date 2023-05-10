import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import "./style/home.css"
import FilterCategory from './../components/Home/FilterCategory';

const Home = () => {
    const [inputValue, setInputValue] = useState("")

    const { productsGlobal } = useSelector(state => state)

    const input = useRef()

    const handleChangeInput = () => {
        setInputValue(input.current.value.toLowerCase().trim())
    }
    console.log(inputValue)
    const productFilter = productsGlobal?.filter(prod => prod.title.toLowerCase().includes(inputValue))
    return (
        <div className='home__container-global'>
            <div className='home__container-filter'>
                <div className='home__input-container'>
                    <input className='home__input' onChange={handleChangeInput} ref={input} type='text' placeholder='¿Qué estás buscando?'></input><i className='bx bx-search' ></i>
                </div>
                <FilterCategory />
            </div>
            <div className='home__container'>
                {
                    productFilter?.map(prod => (
                        <CardProduct
                            key={prod.id}
                            product={prod} />
                    ))

                }
            </div>
        </div>
    )
}

export default Home