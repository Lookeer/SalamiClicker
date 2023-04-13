export default function Upgrade(props) {
    return (
        <div onClick={() => props.dispatch({type: "buy", upgradeId: props.id})} className="upgrade">
            <p className="upgrade-owned">{props.data.owned}</p>
            <div className="upgrade-left">
                <p className="upgrade-title">{props.data.name}</p>
                <p className="upgrade-description">{props.data.description}</p>
            </div>
            <div className="upgrade-right">
                <p className="upgrade-price">{props.data.cost}</p>
            </div>
        </div>
    );
}