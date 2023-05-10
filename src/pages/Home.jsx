import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import "./style/home.css"

const Home = () => {
    const [inputValue, setInputValue] = useState()

    const { productsGlobal } = useSelector(state => state)

    const input = useRef()

    const handleChangeInput = () => {
        setInputValue(input.current.value.toLowerCase())
    }
    console.log(inputValue)
    const productFilter = productsGlobal?.filter(prod => prod.title.toLowerCase().includes(inputValue))
    return (
        <div>
            <input onChange={handleChangeInput} ref={input} type='text' />
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