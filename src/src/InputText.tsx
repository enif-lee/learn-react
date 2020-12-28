import React, {ChangeEvent, ChangeEventHandler, RefObject, useRef, useState} from "react";


const InputText: React.FunctionComponent<any> = props => {

    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const onRestoreClick = () => setValue("");
    const onChange: React.ChangeEventHandler<HTMLInputElement>  = event => {
        inputRef.current?.focus()
        setValue(event.target.value);
    }
    return (
        <div>
            <input onChange={onChange} value={value} ref={inputRef} />
            <button onClick={onRestoreClick}>초기화</button>
            <div> 값 : {value}</div>
        </div>
    )
}


export default InputText;