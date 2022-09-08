import Link from 'next/link';
import React from 'react'
import { useTheme } from '../../context/theme.context';
import classes from './Button.module.scss'

interface Props {
    text: string;
    varaint: 'primary' | 'ghost' | 'text'
    type: 'submit' | 'reset' | 'button'
    herf?: string;
    onClick?: () => any;
}

export const Button = ({ text, onClick, varaint, herf, type }: Props) => {
    const { theme } = useTheme();

    if (!herf) {
        return (
            <button
                className={classes.button + " " + classes[theme] + " " + classes[varaint]}
                onClick={onClick}
                type={type}
            >
                {text}
            </button>
        )
    } else {
        return (
            <Link href={herf}>
                <button
                    className={classes.button + " " + classes[theme] + " " + classes[varaint]}
                    onClick={onClick}
                    type={type}

                >
                    {text}
                </button>
            </Link>
        )
    }
}
