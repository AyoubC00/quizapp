import { useState } from "react"
import Timer from "./components/Timer/Timer"

function App() {
  let [timeout, setTimeout] = useState(false);
  return (
    <>
      <Timer hours={ 0 } minutes={ 0 } seconds={ 5 } timeout={ timeout } setTimeout={ setTimeout }/>
      
    </>
  )
}

export default App
