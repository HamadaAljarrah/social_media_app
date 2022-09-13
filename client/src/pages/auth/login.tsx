import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'
import { useAuth } from '../../context/auth.context'
import { useTheme } from '../../context/theme.context'
import { sendAuthRequset, setWithExpiry } from '../../services/auth'
import { Login } from '../../types/user'
import classes from './auth.module.scss'


const Login = () => {
    const { theme } = useTheme();
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>();
    const { register, handleSubmit } = useForm<Login>();
    const { setIsAuthenticated } = useAuth();

    const onSubmit = async (data: Login) => {
        setLoading(true);
        const response = await sendAuthRequset('login', data);
        if (response.success) {
            const token = response.data.token;
            const oneHour = 1000 * 60 * 60;
            setWithExpiry('token', token, oneHour);
            setLoading(false);
            setIsAuthenticated(true);
            router.push("/user/profile");
        }
        setMessage(response.message)
        setLoading(false);
    }


    return (
        <div onSubmit={handleSubmit(onSubmit)} className={classes.container + " " + classes[theme]}>
            <form className={classes.form}>
                <h1>Login</h1>
                {message && <p>{message}</p>}
                <div className={classes.header}>
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
                    {!loading && <Button type='submit' varaint='primary' text='Login' />}
                    {loading && <Button type='submit' varaint='primary' text='Logging in...' disabled />}
                    <p>Don't have an account? <Link href='/auth/register'>Sign up</Link></p>
                </div>

            </form>
        </div>

    )
}

export default Login