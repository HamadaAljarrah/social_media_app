import React from 'react'
import { useTheme } from '../../context/theme.context'
import { ToggleButton } from '../../components/ToggleButton/ToggleButton';
import classes from './Navbar.module.scss'
import { ArrowIcon, Logo, LogoutIcon, MessageIcon, NotificationIcon } from '../../icons/icon';
import Link from 'next/link';
import { useAuth } from '../../context/auth.context';
import { user } from '../../types/variables';
import Cookie from "../../services/cookie"

export const AuthNavbar = () => {
    const { toggleTheme, theme } = useTheme();
    const { logout } = useAuth();
    const { currentUser } = useAuth();
    const handleLogout = () => {
        Cookie.remove('token')
        logout()
    }

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
                            {currentUser && <p>{currentUser.name}</p>}
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

}
