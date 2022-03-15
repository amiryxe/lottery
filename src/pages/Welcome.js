import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'

export default function Welcome() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Link to='/lottery'>
                <button className="btn big-button">
                    صفحه قرعه‌کشی
                </button>
            </Link>

            <Link to="/about">
                <button className='btn normal-button' onClick={() => setIsOpen(true)}>
                    درباره
                </button>
            </Link>

            <Drawer
                isOpen={isOpen}
                placement='right'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        body here
                    </DrawerBody>

                    <DrawerFooter>
                        footer here
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}