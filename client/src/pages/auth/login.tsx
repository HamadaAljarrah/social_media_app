import Link from 'next/link'
import React from 'react'
import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'
import { useTheme } from '../../context/theme.context'
import classes from './auth.module.scss'


const Login = () => {
    const { theme } = useTheme();


    return (
        <div className={classes.container + " " + classes[theme]}>
            <form className={classes.form}>
                <h1>Login</h1>
                <div className={classes.header}>
                    <Input
                        type='email'
                        label='Email'
                        htmlFor='email'
                        id='email'
                        placeholder='Enter Your Email'
                    />
                    <Input
                        type='password'
                        label='Password'
                        htmlFor='password'
                        id='password'
                        placeholder='Enter Your Password'
                    />
                </div>
                <div className={classes.footer}>
                    <Button type='submit' varaint='primary' text='Login' />
                    <p>Don't have an account? <Link href='/auth/register'>Sign up</Link></p>
                </div>


            </form>
        </div>

    )
}

export default Login