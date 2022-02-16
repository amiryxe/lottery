import mainContext from "./mainContext";
import { useState } from "react";

export default function MainState({ children }) {
    const [winnerList, setWinnerList] = [
        {
            id: 1,
            num: 23456,
            type: 'any'
        },
        {
            id: 2,
            num: 78634,
            type: 'any'
        },
        {
            id: 3,
            num: 98345,
            type: 'any'
        },
        {
            id: 4,
            num: 10098,
            type: 'any'
        },
        {
            id: 5,
            num: 43098,
            type: 'any'
        }
    ];

    return (
        <MainState.Provider value={{}}>
            {children}
        </MainState.Provider>
    )
}