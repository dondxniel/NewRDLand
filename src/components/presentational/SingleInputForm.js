export default function SingleInputForm({label, placeholder, buttonText}){
    return (
        <div>
            <form className = "consolas  ">
                <label className = "my-2 pl-2 text-light "><b>{label}</b></label><br />
                <div className = " d-flex justify-content-center ">
                    <div className = "sif-inner-container ">
                        <input className = "sif-input" placeholder = {placeholder} />
                        <button className = "sif-button text-light">{buttonText}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}