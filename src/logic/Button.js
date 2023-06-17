function Button(props) {
    const press = () => {
        document.querySelector("li:last-child").scrollIntoView();
    }

    return (
        <input className="button" type="button" value={props.val}  onClick={press} />
    )
}

export default Button;