export const InputField = ({type, handleChange, value, labelText, required, pattern, id}) => {
    return (
        <label htmlFor={id}>
            {labelText}
            <input id={id} type={type} onChange={handleChange} value={value} required={required} pattern={pattern} />
        </label>
    )
}