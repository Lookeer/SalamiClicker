import { useEffect } from "react";

export default function CountParticle(props) {
    return (
        <p className="count-particle" style={{top: props.top - 70, left: props.left - 25}}>+{props.count}</p>
    );
}