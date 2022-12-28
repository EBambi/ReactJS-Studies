import React, {useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    //const [var, method to update] = useState(initial value)
    const [age, setage] = useState(29);

    const birthday = () =>{
        setage(age+1)
    }

    return (
        <div>
            <h1>
                Name prop {props.name} Functional Component
            </h1>
            <h2>
                Age State {age}
            </h2>
            <div>
                <button onClick={birthday}>
                    Happy Birthday
                </button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
