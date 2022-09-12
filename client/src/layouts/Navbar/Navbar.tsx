import React from 'react'
import { useTheme } from '../../context/theme.context'
import { ToggleButton } from '../../components/ToggleButton/ToggleButton';
import classes from './Navbar.module.scss'
import { Button } from '../../components/Button/Button';
import { ArrowIcon, Logo, LogoutIcon, MessageIcon, NotificationIcon, ProfileIcon, SettingIcon } from '../../icons/icon';
import Link from 'next/link';
import { useAuth } from '../../context/auth.context';


export const Navbar = () => {
    const { toggleTheme, theme } = useTheme();
    const { isAuthenticated } = useAuth();
    if (isAuthenticated)
        return (
            <div className={`${classes.cantainer} ${classes[theme]}`}>
                <Link href='/'>
                    <div className={classes.logo}>
                        <Logo />
                    </div>
                </Link>
                <div className={classes.tools}>
                    <div className={classes.toggle}>
                        <ToggleButton onClick={toggleTheme} />
                    </div>
                    <div className={classes.messages}>
                        <MessageIcon />
                        <p>Messages</p>
                    </div>
                    <div className={classes.notification}>
                        <NotificationIcon />
                        <p>Notification</p>
                    </div>
                    <div className={classes.user}>
                        <img src="./avatar.png" alt="avatar" />
                        <p>Hamada Aljarrah</p>
                        <ArrowIcon />
                    </div>
                </div>
            </div>
        )
    if (!isAuthenticated)
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
