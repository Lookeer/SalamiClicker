import { useState } from "react";
import CountParticle from "./CountParticle";

export default function Salami(props) {
    const [particles, setParticles] = useState([]);

    const handleClick = () => {
        var index;
        if (particles.length > 0) {
            index = particles[particles.length - 1].key + 1;
        }
        else {
            index = 0; 
        }
        setParticles(particles.concat(<CountParticle count={1} key={index} />));
        setTimeout(() => {
            setParticles(particles.filter((part) => part.key !== index));
        }, 1000);
        props.dispatch({type: 'click'});
    };

    return (
        <>
        <button onClick={handleClick} className="clicker-salami" />
        {particles}
        </>
    );
}