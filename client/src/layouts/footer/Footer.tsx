import React from 'react'
import { useTheme } from '../../context/theme.context'
import classes from './Footer.module.scss'
export const Footer = () => {
    const {theme} = useTheme();
  return (
    <div className={classes.footer + " " + classes[theme]}>
        <p>Developed with ❤️ by Hamada</p>
    </div>
  )
}
