import React from 'react'
import "./styles/sliderImgs.css"

const SliderImgs = ({ product }) => {


    return (
        <div className="sliderImgs__container">
            <img className="sliderImg__img" src={product?.images[0].url} />
        </div>
    )
}

export default SliderImgs