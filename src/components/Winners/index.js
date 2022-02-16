import convertDigits from "../../utils/convertDigits"

export default function Winners({ list }) {
    return (
        <div className="winners">
            {
                list.map(item => (
                    <div key={item.id} className="winners__item">
                        {convertDigits(item.value)}
                    </div>
                ))
            }
        </div>
    )
}