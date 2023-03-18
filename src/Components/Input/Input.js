import { useState } from 'react';

const Input = (props) => {
    const [value, setValue] = useState(props.value || "")

    const handleChange = (event) => {
        const myValue = event.target.value;
        setValue(myValue);

        if (props.onChange) {
            props.onChange(myValue);
        }
    }

    // nustatom, kad imtu ivestus duomenys is inputo

    return (
        <div>
            <label>{props.label}</label>
            <input value={value} onChange={handleChange} />
        </div>
    )

}

export default Input;