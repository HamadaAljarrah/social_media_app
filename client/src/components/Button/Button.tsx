import Link from 'next/link';
import React from 'react'
import { useTheme } from '../../context/theme.context';
import classes from './Button.module.scss'

interface Props {
    text: string;
    varaint: 'primary' | 'ghost' | 'text'
    herf?: string;
    onClick?: () => void
    [x: string]: any;
}

export const Button = ({ text, varaint, herf, onClick, props }: Props) => {
    const { theme } = useTheme();

    if (!herf) {
        return (
            <button
                className={classes.button + " " + classes[theme] + " " + classes[varaint]}
                {...props}
                onClick={onClick}
            >
                {text}
            </button>
        )
    } else {
        return (
            <Link href={herf}>
                <button
                    className={classes.button + " " + classes[theme] + " " + classes[varaint]}
                    {...props}
                    onClick={onClick}
                >
                    {text}
                </button>
            </Link>
        )
    }
}
