import { useState } from "react";
import CountParticle from "./CountParticle";

let boostTimeout = null;

export default function Salami(props) {
    const [particles, setParticles] = useState([]);

    const handleClick = (event) => {
        var index;
        if (particles.length > 0) {
            index = particles[particles.length - 1].key + 1;
        }
        else {
            index = 0;
        }

        // Spawn particles
        setParticles((part) => part.concat(<CountParticle count={props.clickRate} key={index} top={event.clientY} left={event.clientX} />));
        // Despawn particles
        setTimeout(() => {
            setParticles((part) => part.slice(1));
        }, 2000);
        
        // Click boosting
        if (props.clickBoosting) {
            clearTimeout(boostTimeout);
            boostTimeout = setTimeout(() => {
                props.dispatch({type: 'haltBoost'})
            }, 200);
        }
        
        props.dispatch({type: 'click'});
    };

    return (
        <>
        <button onClick={handleClick} className="clicker-salami" />
        {particles}
        </>
    );
}