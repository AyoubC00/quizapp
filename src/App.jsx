import Question from "./components/Question"
import Timer from "./components/Timer/Timer"

function App() {

  return (
    <>
      <Timer hours={ 0 } minutes={ 1 } seconds={ 0 } />
      <Question />
    </>
  )
}

export default App
