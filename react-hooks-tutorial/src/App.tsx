import './App.css'
import {UseEffectShowTextComponent} from "./components/useEffectShowText/useEffectShowText.tsx";
import {useState} from "react";
import {UseEffectTimeoutComponent} from "./components/useEffectTimeout/UseEffectTimeout.tsx";
import {UseEffectGetApiComponent} from "./components/useEffectGetApi/UseEffectGetApi.tsx";

function App() {
    const [currentText, setText] = useState<string>('hello')

    return (
    <>
      <UseEffectShowTextComponent text={currentText} />
        <button onClick={() => setText(() => 'time:' + new Date().getSeconds().toString())}>go new text</button>
        <br/>
        <br/>
        <UseEffectTimeoutComponent></UseEffectTimeoutComponent>
        <br/>
        <br/>
        <UseEffectGetApiComponent></UseEffectGetApiComponent>
    </>
  )
}

export default App
