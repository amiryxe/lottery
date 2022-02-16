import Sphere from "../components/Sphere"
import Winners from "../components/Winners"
import confetti from "canvas-confetti";

export default function Lottery() {
    const clickHandler = () => {
        confetti();
    }

    return (
        <>
            <Sphere />
            <Winners />

            <button className="go-button" onClick={clickHandler}>
                یافتن برندگان
            </button>

            <button className="setting-button">
                <box-icon
                    type='solid'
                    name='cog'
                    size="md"
                    animation='tada-hover'
                    color="white"></box-icon>
            </button>
        </>
    )
}