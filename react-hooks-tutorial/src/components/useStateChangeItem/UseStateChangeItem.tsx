import {FC, useState} from "react";

type TestItem = {
    id: number,
    name: string,
    surname: string,
    age: number
}
export const UseStateChangeItemComponent: FC = () => {
    const [currentItem, setItem] = useState<TestItem | null>(null)

    const items: TestItem[] = [
        {
            id: 1,
            name: 'Ivan',
            surname: 'Ivanov',
            age: 15
        },
        {
            id: 2,
            name: 'Sergey',
            surname: 'Sergeev',
            age: 20
        },
        {
            id: 3,
            name: 'Yegor',
            surname: 'Stepanov',
            age: 17
        }
    ]

    const changeItem = (item: TestItem) => {
        setItem(item);
    }

    const resetItems = () => {
        setItem(null)
    }

    return (
        <>
            <br/>
            <h2>useStateChangeItem = {currentItem ? `${currentItem?.name} ${currentItem?.surname}` : 'no'}</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id} onClick={() => changeItem(item)}>
                        <b>{`${item.name} ${item.surname}`}</b>
                        <br/>
                        <span>{item.age}</span>
                        <br/>
                        <br/>
                    </li>
                ))}
            </ul>
            <button onClick={resetItems}>reset</button>
            <br/>
        </>
    )
}
