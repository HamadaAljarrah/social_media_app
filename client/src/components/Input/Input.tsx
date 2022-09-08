import React from 'react'
import { useTheme } from '../../context/theme.context';
import classes from './Input.module.scss'


interface Props {
    htmlFor: string,
    label: string;
    type: 'text' | 'email' | 'password' | 'number';
    id: string;
    placeholder: string;
    register?: any;
}
export const Input = ({ htmlFor, label, type, id, placeholder, register }: Props) => {
    const { theme } = useTheme();
    return (
        <div className={classes.container + " " + classes[theme]}>
            <label htmlFor={htmlFor}>{label}</label>
            <input
                className={classes.input + " " + classes[theme]}
                type={type}
                id={id}
                placeholder={placeholder}
                {...register}

            />
        </div>

    )
}
