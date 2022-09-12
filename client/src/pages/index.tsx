import type { NextPage } from 'next'
import { Button } from '../components/Button/Button'
import { useTheme } from '../context/theme.context'
import classes from "../styles/Home.module.scss"

const Home: NextPage = () => {
  const { theme } = useTheme();
  return (
    <div className={classes.container + " " + classes[theme]}>
      <h1>Welcome to Protect</h1>
      <p>Build your scoial network and attend in fun and educational events </p>
      <Button type='button' herf='/auth/login' varaint='primary' text='Get started' />
    </div>
  )
}

export default Home
