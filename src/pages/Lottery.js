import { useContext, useState, useEffect } from "react"
import MainContext from '../context/mainContext'
import Sphere from "../components/Sphere"
import Winners from "../components/Winners"
import confetti from "canvas-confetti"
import convertDigits from '../utils/convertDigits'
import { IconButton, useDisclosure } from '@chakra-ui/react'
import { SettingsIcon } from "@chakra-ui/icons"
import SettingModal from '../components/Setting/SettingModal'

const arr = []

export default function Lottery() {
    const { winnerList } = useContext(MainContext);
    const [current, setCurrent] = useState('')
    const numbers = winnerList.map(item => item.value).join('')
    const [list, setList] = useState([])
    const [changes, setChanges] = useState('')

    const { isOpen, onOpen, onClose } = useDisclosure()

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

            <div className="setting-button">
                <IconButton
                    icon={<SettingsIcon />}
                    onClick={onOpen}
                />
            </div>

            <SettingModal isOpen={isOpen} onClose={onClose} />
        </>
    )
}