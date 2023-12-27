import { useState } from "react"

const useGetQuesitions = (questions) =>
{
    const [position, setPosition] = useState(0);
    const getQuestion = direction =>
    {
        if (direction === 1)
        {
            setPosition(prev => prev + 1);
        }
        else if (direction === -1)
        {
            setPosition(prev => prev - 1);
        }
    }   
    return [questions[position], getQuestion];
}

export default useGetQuesitions