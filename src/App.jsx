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
      <ClickerContainer data={gameState} dispatch={dispatch} />
      <div className="separator"></div>
      <div className="upgrade-container">
        {gameState.upgrades.map((item, i) => <Upgrade id={i} data={gameState.upgrades[i]} dispatch={dispatch} />)}
      </div>
    </div>
  );
}

export default App;
