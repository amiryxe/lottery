import { Link, useLocation } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

export default function Header() {
    const { pathname } = useLocation();

    return (
        <div className='header-main'>
            <h1>سامانه قرعه‌کشی</h1>

            {
                pathname != '/' &&
                <Link to="/" style={{
                    position: 'fixed',
                    left: 16,
                    top: 16
                }}>
                    <Button
                        rightIcon={<ArrowBackIcon />}
                        colorScheme='teal'
                        variant='outline'>
                        بازگشت
                    </Button>
                </Link>
            }
        </div>
    )
}