import { useState } from "react";
import useGetQuesitions from "../hooks/useGetQuestions";

const QuestionPanel = () =>
{
    const [question, getQuestion] = useGetQuesitions([{n: "First question"}, {n: "Second question"}, {n: "Third question"}, {n: "Fourth question"}]);
    const [positionOutOfRange, setPositionOutOfRange] = useState({next: false, previous: true});
    const updateQuestion = (direction) => ({ target: { name } }) =>
    {
        console.log(positionOutOfRange, question)
        try
        {
            getQuestion(direction);
            setPositionOutOfRange({next: false, previous: false});
        }
        catch (error)
        {
            setPositionOutOfRange(prev => ({...prev, [name]: true}));
        }
    }
    return (
        <div className="[&>button]:px-6 [&>button]:py-2 [&>button]:rounded-sm [&>button:disabled]:bg-gray-50 [&>button:disabled]:text-gray-300 flex gap-5">
            <p>{ question?.n }</p>
            <button className="bg-blue-50 text-blue-400" name="previous" onClick={ updateQuestion(-1) } disabled={ positionOutOfRange.previous }>Previous</button>
            <button className="bg-blue-50 text-blue-400" name="next" onClick={ updateQuestion(1) } disabled={ positionOutOfRange.next }>Next</button>
        </div>
    )
}

export default QuestionPanel