import React from 'react';

function ProfItem(props) {

    const [isOpen, setOpenClose] = React.useState(false);
    const press = () => {
        setOpenClose(!isOpen);
    }

    return(
        <li onClick={press}>
            <span className="left">{props.prof}</span>
            <span className="right">{isOpen ? "×" : "+"}</span>
            {isOpen &&
                <p> {props.discr}</p>
            }
        </li>
    )
}
export default ProfItem;
