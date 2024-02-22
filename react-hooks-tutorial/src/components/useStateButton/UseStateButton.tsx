import {FC, useState} from "react";

export const UseStateButtonComponent: FC = () => {
    const [btnState, setBtnState] = useState<boolean>(false);

    const changeBtnState = (state: boolean) => {
        setBtnState(state)
    }

    const toggleBtnState = () => {
        setBtnState((state) => !state)
    }

    return (
        <>
            <br/>
            <h2>useState change button state</h2>
            <button disabled={btnState}>Button disabled = {`${btnState}`}</button>
            <br/>
            <button onClick={() => changeBtnState(true)}>disabled</button>
            <button onClick={() => changeBtnState(false)}>unDisabled</button>
            <button onClick={toggleBtnState}>toggle state</button>
            <br/>
        </>
    )
}
