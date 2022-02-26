export default function Sphere() {
    const nums = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    const renderNodes = () => {
        return Array(12).fill(null).map((_, i) => (
            <div key={i} className={'plane plane-' + i}>
                {Array(36).fill(null).map((_, j) => {
                    return (
                        <div key={j} className={'spoke spoke-' + j}>
                            <div className="dot">{nums[Math.floor(Math.random() * 10)]}</div>
                        </div>
                    );
                })}
            </div>
        ));
    }

    return (
        <div className="main-wrapper">
            <div className="sphere-wrapper">
                {renderNodes()}
            </div>
        </div>
    )
} 