function Input (props) {
    return (
        <div>
            <label htmlFor={props.id}> {props.rotulo} </label>
            <input type={props.tipo} id={props.id} />
            {props.children}
        </div>
    )
};

export default Input;