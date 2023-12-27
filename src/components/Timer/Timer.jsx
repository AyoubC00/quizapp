import { useEffect, useState } from "react";
import timerStyle from "./style.module.css"

const Timer = (props) =>
{
    let [minutes, setMinutes] = useState(props.minutes);
    let [seconds, setSeconds] = useState(props.seconds);
    let [hours, setHours] = useState(props.hours);
    let [timeout, setTimeout] = useState(false);

    const updateTimer = () =>
    {
        if (seconds > 0) setSeconds(prev => prev - 1);
        else
        {
            if (minutes > 0)
            {
                setMinutes(prev => prev - 1);
                setSeconds(59);
            }
            else
            {
                if (hours > 0)
                {
                    setHours(prev => prev - 1);
                    setMinutes(59);
                    setSeconds(59);
                }
                else return
            }
        }
    }

    useEffect(() => {
        if (!seconds && !minutes && !hours) setTimeout(true)
        if (timeout) return
        const interval = setInterval(() => updateTimer(), 1000)
        return () => clearInterval(interval)
    }, [seconds, timeout])

    return (
        <>
            <div className={`${timerStyle.ff_roboto_flex} text-3xl font-semibold text-gray-800 w-fit rounded-b-md px-6 py-4 mx-auto bg-gray-50`}>
                {`${hours}`.padStart(2, 0)}:{`${minutes}`.padStart(2, 0)}:{`${seconds}`.padStart(2, 0)}
            </div>
        </>
    )
}

export default Timer