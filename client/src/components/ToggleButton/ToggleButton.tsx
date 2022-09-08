import { useState } from "react";
import classes from './ToggleButton.module.scss'

interface Props {
    onClick: ()=> any;
}

export const ToggleButton = ({onClick}: Props) => {
    const [on, setOn] = useState<'on' | 'off'>('off');
    const toggle = () => {on === 'off' ? setOn('on') : setOn('off')}
    const handleClick = ()=>{
        toggle();
        onClick();
    }
    return (
        <div className={classes.container + " " + classes[on]}>
            <button className={classes.toggle} onClick={handleClick}>
                <span className={classes.pin} />
            </button>
        </div>

    );
}