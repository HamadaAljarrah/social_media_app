import React, { Children, ReactNode } from 'react'
import { ModalPortal } from '../../layouts/Portal/Portal';
import classes from "./Modal.module.scss"

type Props = {
  handleClose: () => void,
  isOpen: boolean,
  children: ReactNode
}

export const Modal = ({ handleClose, isOpen, children }: Props) => {

  return (
    <ModalPortal>
      {isOpen &&
        <>
          <div onClick={handleClose} className={classes.overlay} />
          <div className={classes.modal}>
            <button className={classes.close} onClick={handleClose}>x</button>
            {children}
          </div>
        </>
      }
      {/* {isOpen ?
        <>
          <div onClick={handleClose} className={classes.overlay} />
          <div className={classes.modal}>
            <button className={classes.close} onClick={handleClose}>x</button>
            {children}
          </div>
        </>
        :
        <>
          <div onClick={handleClose} className={classes.overlay + " " + classes.closed} />
          <div className={classes.modal + " " + classes.closed} >
            <button className={classes.close} onClick={handleClose}>x</button>
            {children}
          </div>
        </>
      } */}
    </ModalPortal>
  )
}
