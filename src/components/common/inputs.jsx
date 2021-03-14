export const InputField = ({type, handleChange, value}) => {
    return (
        <input type={type} onChange={handleChange} value={value}/>
    )
}