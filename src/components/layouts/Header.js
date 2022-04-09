import { Link } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

export default function Header() {
    return (
        <div className='header-main'>
            <h1>سامانه قرعه‌کشی</h1>
            {/* 
            <Link to="/" style={{
                position: 'fixed',
                left: 5,
                top: 5
            }}>
                بازگشت
            </Link> */}

            <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                Call us
            </Button>
        </div>
    )
}