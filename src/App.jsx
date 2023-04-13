import { useEffect, useReducer } from "react";
import { reducer, initialState } from "./GameState";
import ClickerContainer from "./components/ClickerContainer";
import Upgrade from "./components/Upgrade";

let lastTime = null;

function App() {
  const [gameState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (lastTime === null) {
      lastTime = new Date();
    }
    const updater = setInterval(() => {
      dispatch({type: "update", time: lastTime});
      lastTime = new Date();
    }, 10);
    return () => {
      clearInterval(updater);
    }
  }, []);

  return (
    <div className="page-container">
      <ClickerContainer salami={gameState.salami} autoRate={gameState.autoRate} dispatch={dispatch} />
      <div className="separator"></div>
      <div className="upgrade-container">
        <Upgrade id={0} data={gameState.upgrades[0]} dispatch={dispatch}/>
        <Upgrade id={1} data={gameState.upgrades[1]} dispatch={dispatch}/>
      </div>
    </div>
  );
}

export default App;
