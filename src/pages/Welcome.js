import { Link } from 'react-router-dom';

export default function Welcome() {
    return (
        <>
            <Link to='/lottery'>
                <button className="btn big-button">
                    شروع قرعه‌کشی
                </button>
            </Link>

            <Link to="/about">
                <button className='btn normal-button'>
                    درباره
                </button>
            </Link>
        </>
    )
}