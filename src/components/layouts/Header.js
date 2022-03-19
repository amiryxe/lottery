import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header-main'>
            <h1>سامانه قرعه‌کشی</h1>

            <Link to="/" style={{
                position: 'fixed',
                left: 5,
                top: 5
            }}>
                بازگشت
            </Link>
        </div>
    )
}