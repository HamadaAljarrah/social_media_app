import React from 'react'
import { useTheme } from '../../context/theme.context'
import { ToggleButton } from '../../components/ToggleButton/ToggleButton';
import classes from './Navbar.module.scss'
import { Button } from '../../components/Button/Button';
import { Logo } from '../../icons/icon';
import Link from 'next/link';
import { useRouter } from 'next/router';


export const Navbar = () => {
    const { toggleTheme, theme } = useTheme();
    const router = useRouter();
    return (
        <div className={`${classes.cantainer} ${classes[theme]}`}>

            <Link href='/'>
                <div className={classes.logo}>
                    <Logo />
                </div>
            </Link>
            <div className={classes.auth}>
                <div className={classes.toggle}>
                    <ToggleButton onClick={toggleTheme} />
                </div>
                <Link href='/auth/login'>Login</Link>
                <Button type='button' herf='/auth/register' varaint='primary' text='Sign up' />
            </div>
        </div>
    )
}
