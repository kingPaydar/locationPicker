export const StartButton = ({handleChange, children}) => {
    return (
        <button onChange={handleChange}>
            {children}
        </button>
    )
}