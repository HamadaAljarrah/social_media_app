import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'
import { useTheme } from '../../context/theme.context'
import classes from './auth.module.scss'
import SendRequest from "../../services/auth"
import Router from 'next/router'
import { useAuth } from '../../context/auth.context'


export type Register = {
    name: string,
    email: string,
    password: string,
}

const Register = () => {
    const [message, setMessage] = useState<string>();
    const { theme } = useTheme();
    const { register, handleSubmit } = useForm<Register>();
    const { signUp } = useAuth();

    const onSubmit = async (data: Register) => {
        const response = await signUp(data)
        if (!response.success) setMessage(response.message)

    }

    return (
        <div className={classes.container + " " + classes[theme]}>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <h1>Sign up</h1>
                {message && <p>{message}</p>}
                <div className={classes.header}>
                    <Input
                        type='text'
                        label='Name'
                        htmlFor='name'
                        id='name'
                        placeholder='Enter Your Name'
                        register={register('name')}
                    />
                    <Input
                        type='email'
                        label='Email'
                        htmlFor='email'
                        id='email'
                        placeholder='Enter Your Email'
                        register={register('email')}

                    />
                    <Input
                        type='password'
                        label='Password'
                        htmlFor='password'
                        id='password'
                        placeholder='Enter Your Password'
                        register={register('password')}

                    />
                </div>
                <div className={classes.footer}>
                    <Button type='submit' varaint='primary' text='Sign up' />
                    <p>Already have an account? <Link href='/auth/login'>Login</Link></p>
                </div>


            </form>
        </div>

    )
}

export default Register