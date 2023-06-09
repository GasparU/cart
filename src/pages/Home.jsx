import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import "./style/home.css"
import FilterCategory from './../components/Home/FilterCategory';
import FilterByPrice from '../components/Home/FilterByPrice';

const Home = () => {

    const [inputValue, setInputValue] = useState("")
    const [fromTo, setFromTo] = useState({
        fromTo: 0,
        to: Infinity
    })
    const { productsGlobal } = useSelector(state => state)
    console.log(productsGlobal)
    const input = useRef()

    const handleChangeInput = () => {
        setInputValue(input.current.value.toLowerCase().trim())
    }

    const productFilter = productsGlobal
        ?.filter(prod => prod.title.toLowerCase().includes(inputValue))
        .filter(prod => {
            const from = +fromTo.from
            const to = +fromTo.to
            const price = +prod.price
            if (from && to) {
                return price >= from && price <= to
            }
            if (from && !to) {
                return price >= from
            }
            if (!from && to) {
                return price <= to
            }
            if (!from && !to) {
                return true
            }
        })

    return (
        <div className='home__container-global'>
            <div className='home__container-filter'>
                <div className='home__input-container'>
                    <input className='home__input' onChange={handleChangeInput} ref={input} type='text' placeholder='¿Qué estás buscando?'></input><i className='bx bx-search' ></i>
                </div>
                <FilterCategory />
                <FilterByPrice setFromTo={setFromTo} />
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