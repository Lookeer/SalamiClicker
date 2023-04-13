const initialState = {
    salami: 0,
    autoRate: 0,
    upgrades: [{name: "Loco Salami", description: "Salam din ala nebun uatafac", baseCost: 10, cost: 10, rate: 0.2, owned: 0},
               {name: "Salam Sasesc", description: "Un salam de la doamne doamne", baseCost: 50, cost: 50, rate: 1, owned: 0}]
};

const reducer = (state, action) => {
    switch (action.type) {
        case "click":
            return {...state, salami: state.salami + 1};
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
    }
};

export {reducer, initialState};