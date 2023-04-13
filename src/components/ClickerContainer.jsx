import Salami from "./Salami.jsx"

export default function ClickerContainer(props) {

    return (
        <div className="clicker-container">
            <input type="text" className="factory-name" defaultValue="Some Salameria"/>
            <div className="salami-stats">
                <p className="salami-counter">Salami: {parseInt(props.salami)}</p>
                <p className="salami-rate">{props.autoRate} salami/s</p>
            </div>
            <Salami dispatch={props.dispatch} />
        </div>
    );
}