import React, {useEffect, useState} from 'react';
import {getPadTime} from "../../helper/getPadTime";
import classes from './Timer.module.css'

const Timer = ({limit, step, addStep}) => {
    const [timeLeft, setTimeLeft] = useState(2*60);

    const minutes = getPadTime(Math.floor(timeLeft / 60));
    const seconds = getPadTime(timeLeft - minutes * 60);


    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((timeLeft) => timeLeft >= 1 ? timeLeft - 1 : 0)
        }, 1000);
        if(limit === 0){
            if (timeLeft === 0 ) {
                setTimeLeft(2*60)
            }
        } else{
            if (timeLeft === 0 ) {
                const newStep = step + 1;
                addStep(newStep);
                setTimeLeft(2*60)
            }
            if (timeLeft === 0 && step === limit) {
                const firstStep = 1;
                addStep(firstStep)
                setTimeLeft(2*60)
            }
        }

        return () => {
            clearInterval(interval)
        }
    }, [timeLeft, step, limit, addStep])

    return (
        <div className={classes.timer}>
            <span>{minutes}</span>:<span>{seconds}</span>
        </div>
    );
};

export default Timer;