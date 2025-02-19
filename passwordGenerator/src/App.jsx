import { useCallback, useEffect, useRef, useState } from "react"
// import "./App.css"


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef Hook
  const passwordRef = useRef(null)

  const passwordGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+.{}[]`~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => { passwordGen() }, [length, numberAllowed, charAllowed, passwordGen])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md px-4 my-8 py-3 text-orange-500 bg-gray-700 rounded-lg">
        <h1 className="text-white text-center my-3 text-2xl">Password Generator</h1>
        <div className="flex shadow overflow-hidden rounded-lg mb-4 text-gray-700">
          <input type="text" value={password} className="outline-none w-full py-1 px-3 bg-white" placeholder="password" readOnly ref={passwordRef} />
          <button className="bg-blue-700 px-3 outline-none text-white py-0.5 shrink-0" onClick={copyPassword}>copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={(e) => { setLength(e.target.value) }} />
            <label>length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => { setNumberAllowed((prev) => !prev) }} />
            <label >number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={() => { setCharAllowed((prev) => !prev) }} />
            <label >Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
