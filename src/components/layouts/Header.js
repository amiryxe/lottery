import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header-main'>
            <h1>سامانه قرعه‌کشی</h1>

            <Link to="/">
                <button>بازگشت</button>
            </Link>
        </div>
    )
}