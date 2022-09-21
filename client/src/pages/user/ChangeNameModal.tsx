import { Modal } from "../../components/Modal/Modal"
import { Dispatch, SetStateAction } from "react";
import classes from './Profile.module.scss'
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import SendRequest from "../../services/auth"
import cookie from "../../services/cookie";
import Router from "next/router";
export const ChangeNameModal = ({ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) => {

    const { register, handleSubmit } = useForm<{ name: string }>();
    const changeNameHandler = async (data: { name: string }) => {
        const response = await SendRequest.PUT('/users', data, cookie.get('token'))
        console.log(response);
        Router.reload();

    }


    return (
        <Modal isOpen={open} handleClose={() => setOpen(false)}>
            <form onSubmit={handleSubmit(changeNameHandler)} className={classes.form}>
                <Input register={register('name')} type='text' htmlFor='changeName' id='changeName' label='Edit name' placeholder='Write your new name' />
                <div className={classes.button}>
                    <Button varaint='primary' type='button' text='Change name' />

                </div>
            </form>
        </Modal>
    )
}