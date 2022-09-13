import React from 'react'
import { useTheme } from '../../context/theme.context'
import { ToggleButton } from '../../components/ToggleButton/ToggleButton';
import classes from './Navbar.module.scss'
import { Button } from '../../components/Button/Button';
import { ArrowIcon, Logo, LogoutIcon, MessageIcon, NotificationIcon } from '../../icons/icon';
import Link from 'next/link';
import Router from 'next/router';
import { useUser } from '../../hooks/useUser';
import { useAuth } from '../../context/auth.context';



export const Navbar = () => {
    const { toggleTheme, theme } = useTheme();
    const { isPending, user } = useUser();
    const { isAuthenticated, setIsAuthenticated } = useAuth();
    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsAuthenticated(false)
        Router.push('/auth/login')
    }


    if (isPending)
        return (
            <div className={`${classes.cantainer} ${classes[theme]}`}>
                return <div>Loading...</div>

            </div>
        )

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
                    <div className={classes.dropdown}>

                        <Link href='/user/profile'>
                            <div className={classes.user}>
                                <img src="/avatar.png" alt="avatar" />
                                {user && <p>{user.name}</p>}
                                <ArrowIcon />
                            </div>
                        </Link>

                        <div className={classes.dropdownContent}>
                            <div onClick={handleLogout}>
                                <LogoutIcon size='20' />
                                <p>Logout</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    else
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
