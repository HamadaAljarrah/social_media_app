import Link from 'next/link';
import React from 'react'
import { Button } from '../../components/Button/Button';
import { useTheme } from '../../context/theme.context'
import { CameraIcon, EditIcon } from '../../icons/icon';
import classes from './Profile.module.scss'


const Profile = () => {
    const { theme } = useTheme();
    return (
        <div className={classes.container + " " + classes[theme]}>
            <div className={classes.image}>
                <img src="./avatar.png" alt="" />
                <CameraIcon />
            </div>
            <div className={classes.name}>
                <h2>Hamada Aljarrah</h2>
                <EditIcon />
            </div>
            <div className={classes.info}>
                <div>
                    <p>Friends: <strong>18</strong></p>
                    <Link href='./profile'>Show</Link>
                </div>
                <div>
                    <p>Groups: <strong>3</strong></p>
                    <Link href='./profile'>Show</Link>
                </div>
            </div>
            <div className={classes.buttons}>
                <Button text='Show Posts' type='button' varaint='primary' />
                <Button text='Edit Profile' type='button' varaint='ghost' />
            </div>
        </div>

    )
}

export default Profile