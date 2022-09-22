import React from 'react'
import { useTheme } from '../../context/theme.context'
import { ToggleButton } from '../../components/ToggleButton/ToggleButton';
import classes from './Navbar.module.scss'
import { ArrowIcon, FeedsIcon, FriendsIcon, Logo, LogoutIcon, MessageIcon, NotificationIcon } from '../../icons/icon';
import Link from 'next/link';
import { useAuth } from '../../context/auth.context';

export const AuthNavbar = () => {
    const { toggleTheme, theme } = useTheme();
    const { currentUser, logout } = useAuth();

    return (
        <div className={`${classes.cantainer} ${classes[theme]}`}>
            <div className={classes.leftbox}>
                <Link href='/user/feeds'>
                    <div className={classes.feeds}>
                        <FeedsIcon />
                        <p>Feeds</p>
                    </div>
                </Link>
                <Link href='/user/friend-requests'>
                    <div className={classes.feeds}>
                        <FriendsIcon />
                        <p>Freind requests</p>
                    </div>
                </Link>

            </div>


            <div className={classes.tools}>
                <div className={classes.toggle}>
                    <ToggleButton onClick={toggleTheme} />
                </div>
                <Link href='/user/messages'>
                    <div className={classes.messages}>
                        <MessageIcon />
                        <p>Messages</p>
                    </div>
                </Link>
                <Link href='/user/notification'>
                    <div className={classes.notification}>
                        <NotificationIcon />
                        <p>Notification</p>
                    </div>
                </Link>


                <div className={classes.dropdown}>
                    <Link href='/user/profile'>
                        <div className={classes.user}>
                            <img src="/avatar.png" alt="avatar" />
                            {currentUser && <p>{currentUser.name}</p>}
                            <ArrowIcon />
                        </div>
                    </Link>
                    <div className={classes.dropdownContent}>
                        <div onClick={logout}>
                            <LogoutIcon size='20' />
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
