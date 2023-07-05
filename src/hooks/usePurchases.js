import { useDispatch } from "react-redux"
import { getAllProductsCartThunk } from "../store/slices/cart.slice"
import getConfigToken from "../utils/getConfigToken"
import { useState } from "react"
import axios from "axios"

const URL_BASE = import.meta.env.VITE_REACT_APP_URL
const url = `${URL_BASE}/purchase`

const usePurchases = () => {

    const [purchases, setPurchases] = useState()

    const dispatch = useDispatch()
    const buyThisCart = () => {
        // const URL_BASE = import.meta.env.VITE_REACT_APP_URL
        // const url = `${URL_BASE}/purchase`
        axios.post(url,{}, getConfigToken())
        .then(res => {
            console.log(res.data)
            dispatch(getAllProductsCartThunk(res.data))
        })
        .catch(err =>console.log(err))
    }

    const getAllProductPurchases = () => {
        // const URL_BASE = import.meta.env.VITE_REACT_APP_URL
        // const url = `${URL_BASE}/purchase`
        axios.get(url, getConfigToken())
        .then(res => setPurchases(res.data))
        .catch(err => console.log(err))
    }
    return { purchases, getAllProductPurchases ,buyThisCart }
}

export default usePurchases