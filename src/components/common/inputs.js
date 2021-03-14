export const InputField = ({handleChange, value, type}) => {
    return (
        <input type={type} value={value} onChange={handleChange}/>
    )
}