import React from 'react'
import "./styles/sliderImgs.css"
import { useState } from 'react';

const SliderImgs = ({ product }) => {
    console.log(product?.images.length)
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
                <img className="sliderImg__img" src={product?.images[count].url} />
                <i onClick={addImg} className='bx bx-chevron-right' ></i>
                <div className='sliderImg__sub'>
                    <img className={`sliderImg__img2 bg-${0}`} src={product?.images[0].url} />
                    <img className={`sliderImg__img2 bg-${1}`} src={product?.images[1].url} />
                    <img className={`sliderImg__img2 bg-${2}`} src={product?.images[2].url} />
                </div>
            </div>

        </div >
    )
}

export default SliderImgs