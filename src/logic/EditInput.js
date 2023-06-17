import React from "react";
import OutInput from "./OutInput";

//Вариант 13 (Почему-то 10?)
const EditInput = ({restrict}) => {

    function Replacer(s) {
        Object.keys(restrict).forEach(banWord => {
            s = s.replace(banWord, restrict[banWord]);
        });
        return s;
    }

    function OnInput(e) {
        const elem = e.target;
        elem.value = Replacer(elem.value);
        document.getElementById("OutInput").textContent = elem.value;
    }

    return (
        <div>
            <input type="text" name="text" onInput={OnInput} />
            <OutInput inputText=""/>
        </div>
    );
}

export default EditInput;