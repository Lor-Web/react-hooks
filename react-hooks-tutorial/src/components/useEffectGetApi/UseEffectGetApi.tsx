import {useEffect, useState} from "react";

export const UseEffectGetApiComponent = () => {
    const [value, setValue] = useState<any>(null);

    useEffect(() => {
      const timerId = setTimeout(() => {
          fetch('https://jsonplaceholder.typicode.com/todos/1')
              .then(response => response.json())
              .then(json => setValue(json))
      },500)

        return () => clearTimeout(timerId)
    }, []);


    return (
        <>
            <h2>Response:</h2>
            <pre>
                {value ? JSON.stringify(value) : 'loading...'}
            </pre>
        </>
    )
}
