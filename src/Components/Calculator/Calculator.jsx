import React, { useState } from 'react'

import calculator from './Calculator.module.css';

function Calculator() {

    const [gender, setGender] = useState('men');
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [age, setAge] = useState(0);
    const [result, setResult] = useState(0);

    function calculate(e) {

        // Men: BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) – (5.677 x age in years) 
        // Women: BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) – (4.330 x age in years)

        e.preventDefault();

        if (gender ==='men') {
            setResult((88.362 + (weight * 13.397) + (height * 4.799) - (5.677 * age)).toFixed(2));
        } else if (gender === 'women') {
            setResult((447.593 + (weight * 9.247) + (height * 3.098) - (4.330 * age)).toFixed(2));
        } else {
            setResult(0);
        }
    }

    return (
        <div className={calculator.container}>
            <form onSubmit={(e) => { calculate(e) }}>

                <h1>BMR Calculator</h1>

                <select value={gender} name="gender" id="gender" onChange={(e) => { setGender(e.target.value) }}>
                    <option value="men">Men</option>
                    <option value="women">women</option>
                </select>

                <input value={height} placeholder='height' type="number" name="height" id="height" onChange={(e) => { setHeight(e.target.value) }} />
                <input value={weight} placeholder='weight' type="number" name="weight" id="weight" onChange={(e) => { setWeight(e.target.value) }} />
                <input value={age} placeholder='age' type="number" name="age" id="age" onChange={(e) => { setAge(e.target.value) }} />

                <button type="submit">Calculate</button>

                <p>Result: <span>{result}</span></p>

            </form>
        </div>
    )
}

export default Calculator