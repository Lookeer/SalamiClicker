import Salami from "./Salami.jsx"

export default function ClickerContainer(props) {

    return (
        <div className="clicker-container">
            <input type="text" className="factory-name" defaultValue="Some Salameria"/>
            <div className="salami-stats">
                <p className="salami-counter">{parseInt(props.data.salami)} salami</p>
                <p className="salami-rate">per second: {props.data.autoRate}</p>
            </div>
            <Salami clickRate={props.data.currentClickRate} clickBoosting={props.data.clickBoosting} dispatch={props.dispatch} />
        </div>
    );
}