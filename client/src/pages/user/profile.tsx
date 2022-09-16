import Link from 'next/link';
import React from 'react'
import { Button } from '../../components/Button/Button';
import { useAuth } from '../../context/auth.context';
import { useTheme } from '../../context/theme.context'
import { CameraIcon, EditIcon } from '../../icons/icon';
import { Protected } from '../../layouts/Protected/Protected';
import classes from './Profile.module.scss'



const Profile = () => {
    const { theme } = useTheme();
    const { currentUser } = useAuth();

    return (
        <Protected>
            <div className={classes.container + " " + classes[theme]}>
                {currentUser &&
                    <>
                        <div className={classes.image}>
                            <img src="/avatar.png" alt="avatar" />
                            <CameraIcon />
                        </div>
                        <div className={classes.name}>
                            <h2>{currentUser.name}</h2>
                            <EditIcon />
                        </div>
                        <div className={classes.info}>
                            <div>
                                <p>Friends: <strong>{currentUser.friends.length}</strong></p>
                                <Link href='./profile'>Show</Link>
                            </div>
                            <div>
                                <p>Groups: <strong>{currentUser.friends.length}</strong></p>
                                <Link href='./profile'>Show</Link>
                            </div>
                        </div>
                        <div className={classes.buttons}>
                            <Button text='Create post' type='button' varaint='primary' />
                            <Button text='Show Post' type='button' varaint='ghost' />
                        </div></>
                }
            </div>
        </Protected>

    )
}

export default Profile