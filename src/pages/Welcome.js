import { Link } from 'react-router-dom';

export default function Welcome() {
    return (
        <Link to='/lottery'>
            <button className="big-button">
                شروع قرعه‌کشی
            </button>
        </Link>
    )
}