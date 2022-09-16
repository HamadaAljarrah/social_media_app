import Link from 'next/link';
import React from 'react'
import { Button } from '../../components/Button/Button';
import { ToggleButton } from '../../components/ToggleButton/ToggleButton';
import { useTheme } from '../../context/theme.context'
import { Logo } from '../../icons/icon';
import classes from "./Navbar.module.scss"

export const DefaultNavbar = () => {
    const { toggleTheme, theme } = useTheme();

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
