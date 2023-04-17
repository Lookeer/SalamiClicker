const initialState = {
    salami: 0,
    currentClickRate: 1,
    clickRate: 1,
    clickCount: 0,
    clickBoosting: false,
    autoRate: 0,
    upgrades: [{name: "Loco Salami", description: "Salam din ala nebun uatafac", baseCost: 10, cost: 10, rate: 0.2, owned: 0},
               {name: "Salam Sasesc", description: "Un salam de la doamne doamne", baseCost: 50, cost: 50, rate: 1, owned: 0},
               {name: "Black Salami", description: ";>", baseCost: 200, cost: 200, rate: 5, owned: 0}]
};

const reducer = (state, action) => {
    switch (action.type) {
        case "click":
            const newClickCount = state.clickCount + 1;
            var newClickRate = state.clickRate;
            var newCurrentClickRate = state.currentClickRate;
            var newClickBoosting = state.clickBoosting;
            if (newClickCount % 100 === 0) {
                newClickRate += 1;
            }
            if (newClickBoosting) {
                newCurrentClickRate += 1;
            }
            return {...state, salami: state.salami + state.currentClickRate, currentClickRate: newCurrentClickRate, clickRate: newClickRate, clickCount: newClickCount, clickBoosting: newClickBoosting};
        case "buy":
            if (state.upgrades[action.upgradeId].cost > state.salami) return state;
            var newAutoRate = state.autoRate;
            const newUpgrades = state.upgrades.map((upgrade, i) => {
                if (i === action.upgradeId) {
                    newAutoRate += upgrade.rate;
                    return {...upgrade, owned: upgrade.owned + 1, cost: Math.ceil(upgrade.baseCost * Math.pow(1.15, upgrade.owned + 1))};
                }
                return upgrade;
            });

            return {...state, autoRate: parseFloat(newAutoRate.toFixed(1)), upgrades: newUpgrades, salami: state.salami - state.upgrades[action.upgradeId].cost};
        case "update":
            return {...state, salami: state.salami + state.autoRate * Math.max(new Date() - action.time, 1) / 1000};
        case "haltBoost":
            return {...state, currentClickRate: state.clickRate, clickBoosting: false};
    }
};

export {reducer, initialState};