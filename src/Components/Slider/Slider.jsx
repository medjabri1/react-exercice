import React, { useState } from 'react'

import slider from "./Slider.module.css";

let data = ["slide 1", "slide 2", "slide 3", "slide 4", "slide 5"];

function Slider({ title }) {
    
    let [current, setCurrent] = useState(0);

    let controls = (step) => {
        if(step > 0) {
            setCurrent(current + step > data.length-1 ? 0 : current + step);
        } else {
            setCurrent(current + step < 0 ? data.length - 1 : current + step);
        }
    };

    return (
        <div className={slider.slider__container}>
            <h1 className={slider.slider__title}>{title}</h1>
            <div className={slider.slider__card}>
                <div className={slider.slider__content}>
                    {data[current]}
                </div>
            </div>
            <div className={slider.slider__controls}>
                <button className="prev" onClick={() => controls(-1)}>Prev</button>
                <button className="next" onClick={() => controls(1)}>Next</button>
            </div>
        </div>
    )
}

export default Slider