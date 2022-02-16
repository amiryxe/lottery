import DaewooLogo from '../../assets/images/daewoo-logo.png';

export default function Header() {
    return (
        <div className='header-main'>
            <img src={DaewooLogo} alt="" />
            <h1>سامانه قرعه‌کشی انتخاب</h1>
        </div>
    )
}