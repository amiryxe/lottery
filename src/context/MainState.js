import MainContext from "./mainContext";
import { useState } from "react";

function MainState({ children }) {
    const [winnerList, setWinnerList] = useState([
        {
            id: 1,
            value: 96153,
            type: 'any'
        },
        {
            id: 2,
            value: 67953,
            type: 'any'
        },
        {
            id: 3,
            value: 18901,
            type: 'any'
        },
        {
            id: 4,
            value: 70093,
            type: 'any'
        },
        {
            id: 5,
            value: 73056,
            type: 'any'
        }
    ]);

    return (
        <MainContext.Provider value={{
            winnerList,
            setWinnerList
        }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainState;