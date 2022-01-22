// styles
import styles from './Home.module.css'

export default function Home() {
  const stravaAuth = () => {
    
  }
  return (
    <>
    <div className={styles.main}>
      Home
      <div className={styles.container}>
        <button onclick="StravAuth()">Connect with Strava</button>
      </div>
    </div>
    
    </>
  )
}
