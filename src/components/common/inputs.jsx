export const InputField = ({type, handleChange, value, labelText, required, pattern}) => {
    return (
        <label htmlFor="">
            {labelText}
            <input type={type} onChange={handleChange} value={value} required={required} pattern={pattern} />
        </label>
    )
}