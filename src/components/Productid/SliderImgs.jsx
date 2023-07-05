import React from 'react'
import "./styles/sliderImgs.css"
import { useState } from 'react';

const SliderImgs = ({ product }) => {
    console.log(product?.productImgs)
    const [count, setCount] = useState(0)
    const addImg = () => {
        if (count < 3) {
            console.log(count)
            setCount(count + 1)
        }
        setCount(2)
    }

    const MinusImg = () => {
        if (count > 0) {
            setCount(count - 1)
        }

    }

    return (
        <div className="sliderImgs__container">
            <div>
                <i onClick={MinusImg} className='bx bx-chevron-left' ></i>
                <img className="sliderImg__img" src={product?.productImgs[count].url} />
                <i onClick={addImg} className='bx bx-chevron-right' ></i>
                <div className='sliderImg__sub'>
                    <img className={`sliderImg__img2 bg-${0}`} src={product?.productImgs[0].url} />
                    {/* <img className={`sliderImg__img2 bg-${1}`} src={product?.productImgs[1].url} /> */}
                    {/* <img className={`sliderImg__img2 bg-${1}`} src={product?.productImgs[2].url} /> */}
                    {/* Aquí se debe mejorar con un map y un condicional */}
                </div>
            </div>

        </div >
    )
}

export default SliderImgs