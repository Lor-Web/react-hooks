import './App.css'
import {UseEffectShowTextComponent} from "./components/useEffectShowText/useEffectShowText.tsx";
import {useState} from "react";

function App() {
    const [currentText, setText] = useState<string>('hello')

    return (
    <>
      <UseEffectShowTextComponent text={currentText} />
        <button onClick={() => setText(() => 'time:' + new Date().getSeconds().toString())}>go new text</button>
    </>
  )
}

export default App
