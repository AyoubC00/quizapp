import { useState } from "react"

const useGetQuesitions = (questions) =>
{
    const [position, setPosition] = useState(0);
    const questionsLength = questions.length
    const getQuestion = (direction) =>
    {
        // Handle position out of range
        if (direction === 1 && position >= questionsLength - 1)
        {
            throw new Error("Position out of range")
        }
        else if (direction === -1 && position <= 0)
        {
            throw new Error("Position out of range")
        }
        // Update position according to direction
        if (direction === 1)
        {
            setPosition(prev => prev + 1);
        }
        else if (direction === -1)
        {
            setPosition(prev => prev - 1);
        }
        console.log("Position: ", position)
    }   
    return [questions[position], getQuestion];
}

export default useGetQuesitions