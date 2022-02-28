export default function SingleInputForm({label, placeholder, buttonText}){
    return (
        <div>
            <form className = "text-center">
                <label>{label}</label>
                <input className = "sif-input" placeholder = {placeholder} />
                <button className = "sif-button text-light">{buttonText}</button>
            </form>
        </div>
    )
}