import Link from "next/link";
import { useState } from "react";
import { Button } from "../../../components/Button/Button";
import { useTheme } from "../../../context/theme.context";
import { CameraIcon, EditIcon } from "../../../icons/icon";
import { IUser } from "../../../types/user";
import { ChangeNameModal } from "./UserModal";
import classes from './Profile.module.scss'



export const User = ({ currentUser }: { currentUser: IUser }) => {
    const { theme } = useTheme();
    const [openModal, setOpenModal] = useState(false);


    return (
        <div className={classes.container + " " + classes[theme]}>
            <ChangeNameModal open={openModal} setOpen={setOpenModal} />
            {currentUser &&
                <>
                    <div className={classes.image}>
                        <img src="/avatar.png" alt="avatar" />
                        <CameraIcon />
                    </div>
                    <div className={classes.name}>
                        <h2>{currentUser.name}</h2>
                        <div onClick={() => setOpenModal(true)}>
                            <EditIcon />
                        </div>
                    </div>
                    <div className={classes.info}>
                        <div>
                            <p>Friends: <strong>{currentUser.friends.length}</strong></p>
                            <Link href='/user/friends'>Show</Link>
                        </div>
                        <div>
                            <p>Groups: <strong>{currentUser.friends.length}</strong></p>
                            <Link href='/user/groups'>Show</Link>
                        </div>
                    </div>
                    <div className={classes.buttons}>
                        <Button herf="/user/posts/create-post" text='Create post' type='button' varaint='primary' />
                        <Button herf="/user/posts" text='Show Post' type='button' varaint='ghost' />
                    </div>
                </>
            }
        </div>

    )
}

