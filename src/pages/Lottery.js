import Sphere from "../components/Sphere"

export default function Lottery() {
    return (
        <>
            <Sphere />
            <button className="go-button">
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