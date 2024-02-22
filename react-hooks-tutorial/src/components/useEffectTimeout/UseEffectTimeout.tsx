import  {ChangeEvent, useEffect, useState} from "react";

export const UseEffectTimeoutComponent = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [value, setValue] = useState<string>('')

    useEffect(() => {
        const timeOutId = setTimeout(() => {setValue(inputValue)}, 300)

        console.log('value:', value, 'inputValue:', inputValue)

        return () => {
            clearTimeout(timeOutId)
        }

    }, [inputValue]);

    const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('change:', event.target.value)
        setInputValue(event.target.value)
    }

    return (
        <>
            <input type="text"  onChange={changeValue}/>
            <h2>Input Value (300ms): {value}</h2>
        </>
    )
}
