import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { useLogout } from '../hooks/useLogout'

// styles
import styles from './Navbar.module.css'

export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <nav className={styles.navbar}>
      <ul>
        <div className={styles.hbrand}><span><img src="/favicon-32x32.png" className={styles.logo} alt="logo"/></span><li className={styles.title}>
        {user && <Link to="/">St-Activities</Link>}</li></div>
        {user && (
          <>
            <li className={styles.mainNav}><Link to="/strava">Strava Home</Link></li>
            <li className={styles.mainNav}><Link to="/activities">Activities</Link></li>
            <li className={styles.mainNav}><Link to="/goals">Goals</Link></li>
          </>
        )}
        {!user && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}

        {user && (
          <>
            <li className={styles.hello}>Hello, {user.displayName}</li>
            <li>
              <button className="btn" onClick={logout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
