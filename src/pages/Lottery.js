import { useContext, useState, useEffect } from "react"
import MainContext from '../context/mainContext'
import Sphere from "../components/Sphere"
import Winners from "../components/Winners"
import confetti from "canvas-confetti"
import convertDigits from '../utils/convertDigits'
import { Button, useColorMode } from '@chakra-ui/react'

const arr = []

export default function Lottery() {
    const { winnerList } = useContext(MainContext);
    const [current, setCurrent] = useState('')
    const numbers = winnerList.map(item => item.value).join('')
    const [list, setList] = useState([])
    const [changes, setChanges] = useState('')

    const { toggleColorMode } = useColorMode()

    useEffect(() => {
        if (arr.length > 0) {
            setList(arr)
        }
    }, [changes])

    const clickHandler = () => {
        const timer = setInterval(show, numbers.length * 30)

        let i = 1;
        function show() {
            setCurrent(<span key={numbers[i - 1] * Math.random()}>
                {convertDigits(numbers[i - 1])}
            </span>)
            confetti();

            if ((i % winnerList.length === 0)) {
                arr.push(winnerList[i / winnerList.length])
                setChanges(Math.random())
                setCurrent('')
            }

            i++;

            if (i == numbers.length) {
                clearInterval(timer)
                setCurrent('')
            }
        }
    }

    return (
        <>
            <div className="winners__current">
                {current}
            </div>
            <Sphere />
            <Winners list={list} />

            <button className="go-button" onClick={clickHandler}>
                شروع قرعه‌کشی
            </button>

            <Button onClick={toggleColorMode}>
                toggle
            </Button>

            <button className="setting-button" onClick={onOpen}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ msFilter: "" }}
                    fill="rgba(0, 0, 0, 1)"
                >
                    <path d="M2.344 15.271l2 3.46a1 1 0 001.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 001 1h4a1 1 0 001-1v-1.598a8.094 8.094 0 001.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 00-.365-1.366l-1.372-.793a7.683 7.683 0 00-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 00-1.366-.365l-1.396.806A8.034 8.034 0 0015 4.598V3a1 1 0 00-1-1h-4a1 1 0 00-1 1v1.598A8.094 8.094 0 007.105 5.71L5.71 4.904a.999.999 0 00-1.366.365l-2 3.46a1.004 1.004 0 00.365 1.366l1.372.793a7.683 7.683 0 000 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path>
                </svg>
            </button>
        </>
    )
}