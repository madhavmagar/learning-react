import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")
  const colorarr = ["red", "pink", "olive", "black", "white", "purple", "grey", "orange"]

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            {colorarr.map(item => <button className="outline-none px-4 py-1 rounded-full text-blue-400 shadow-xl" style={{ backgroundColor: item }} onClick={() => setColor(item)}>{item}</button>)}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
