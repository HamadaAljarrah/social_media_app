import React, { ReactNode } from 'react'
import classes from './Container.module.scss'

type Props = {
    children: ReactNode
}
export const Container = ({children}: Props) => {
  return (
    <div className={classes.container}>
        {children}
    </div>
  )
}
