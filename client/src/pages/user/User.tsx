import Link from "next/link";
import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Modal } from "../../components/Modal/Modal";
import { useTheme } from "../../context/theme.context";
import { CameraIcon, EditIcon } from "../../icons/icon";
import { IUser } from "../../types/user";
import classes from './Profile.module.scss'



export const User = ({ currentUser }: { currentUser: IUser }) => {
    const { theme } = useTheme();
    const [open, setOpen] = useState(false);

    return (

        <div className={classes.container + " " + classes[theme]}>
            <Modal isOpen={open} handleClose={() => setOpen(false)}>
                <div className={classes.form}>
                    <Input type='text' htmlFor='changeName' id='changeName' label='Edit name' placeholder='Write your new name' />
                    <div className={classes.button}>
                        <Button varaint='primary' type='button' text='Change name' />

                    </div>
                </div>
            </Modal>
            {currentUser &&
                <>
                    <div className={classes.image}>
                        <img src="/avatar.png" alt="avatar" />
                        <CameraIcon />
                    </div>
                    <div className={classes.name}>
                        <h2>{currentUser.name}</h2>
                        <div onClick={() => setOpen(true)}>
                            <EditIcon />

                        </div>
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
                    </div>
                </>
            }
        </div>

    )
}