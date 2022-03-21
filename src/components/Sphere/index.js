import { useState } from 'react';

export default function Sphere() {
    const nums = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const planCount = useState(12);
    const spokeCount = useState(36);

    const renderNodes = () => {
        return Array(planCount).fill(null).map((_, i) => (
            <div key={i} className={'plane plane-' + i}>
                {Array(spokeCount).fill(null).map((_, j) => {
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