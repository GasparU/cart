import { useForm } from "react-hook-form"

const FilterByPrice = ({ setFromTo }) => {

    const { reset, register, handleSubmit } = useForm()

    const submit = (data) => {
        setFromTo(data)
        reset({
            from: "",
            to: ""
        })
    }
    return (
        <article>
            <h3>Price</h3>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label>From</label>
                    <input htmlFor="from" {...register("from")} type="number" id="from" />
                </div>
                <div>
                    <label>to</label>
                    <input htmlFor="to" {...register("to")} type="number" id="to" />
                </div>
                <button>Filter Price</button>
            </form>
        </article>
    )
}

export default FilterByPrice