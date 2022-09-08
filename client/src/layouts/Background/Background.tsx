import React, { ReactNode } from 'react'
import { useTheme } from '../../context/theme.context'
import classes from './Background.module.scss'

type Props = {
    children: ReactNode
}

export const Background = ({ children }: Props) => {
    const {theme} = useTheme();
    return (
        <div className={`${classes.background} ${classes[theme]}`}>{children}</div>
    )
}
