import React, {useState} from 'react';
import classes from './TimerBody.module.css'
import Timer from "../Timer/Timer";

const TimerBody = ({users, limit}) => {
    const [step, setStep] = useState(1);

    const addStep = (step) => {
        setStep(step)
    }

    return (
        <div className={classes.move}>
            <div className={classes.move__title}>Ход</div>
            {limit !== 0
                ? <div className={classes.move__timer}>
                    {users.map((user) =>
                        <div className={classes.move__item} key={user.id}>
                            {user.id === step
                                ? <div>
                                    <Timer
                                        addStep={addStep}
                                        limit={limit}
                                        step={step}
                                    />
                                </div>
                                : <div></div>
                            }
                        </div>
                    )}
                </div>
                : <div className={classes.move__timer}>
                    <Timer limit={limit}/>
                  </div>
            }

        </div>
    );
};

export default TimerBody;