import { useDispatch } from "react-redux"
import { getAllProductsCartThunk } from "../store/slices/cart.slice"
import getConfigToken from "../utils/getConfigToken"
import { useState } from "react"
import axios from "axios"

const usePurchases = () => {

    const [purchases, setPurchases] = useState()

    const dispatch = useDispatch()
    const buyThisCart = () => {
        const url = "https://e-commerce-api-v2.academlo.tech/api/v1/purchases"
        axios.post(url,{}, getConfigToken())
        .then(res => {
            console.log(res.data)
            dispatch(getAllProductsCartThunk(res.data))
        })
        .catch(err =>console.log(err))
    }

    const getAllProductPurchases = () => {
        const url = "https://e-commerce-api-v2.academlo.tech/api/v1/purchases"
        axios.get(url, getConfigToken())
        .then(res => setPurchases(res.data))
        .catch(err => console.log(err))
    }
    return { purchases, getAllProductPurchases ,buyThisCart }
}

export default usePurchases