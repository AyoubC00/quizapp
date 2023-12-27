import Timer from "./components/Timer/Timer"
import useGetQuesitions from "./hooks/useGetQuestions"

function App() {
  const [question, getQuestion] = useGetQuesitions([{n: 1}, {n: 2}, {n: 3}, {n: 4}]);
  return (
    <>
      <Timer hours={ 3 } minutes={ 0 } seconds={ 0 } />
    </>
  )
}

export default App
