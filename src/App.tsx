import { useState } from "react"
import Navbar from "./components/Navbar"

function App() {

  const [darkToggle, setDarkToggle] = useState(false);

  return (
    <div className="bg-white dark:bg-slate-800 h-screen flex justify-center">
      <Navbar/>
      <p className="text-3xl font-bold">
        Serity Uploader
      </p>

      <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />

    </div>
  )
}

export default App
