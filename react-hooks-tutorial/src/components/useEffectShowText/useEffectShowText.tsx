import {useEffect, useState} from "react";


export const UseEffectShowTextComponent = ({text}: {text: string}) => {
    const [currentText, setText] = useState<string>('');

    useEffect(() => {
        setText(text)
    }, [text]);

    return (
        <>
            <h2>Text: {currentText}</h2>
        </>
    )
}
