import PropTypes from 'prop-types'
import styles from './UserGreeting.module.css'

function UserGreeting(props) {
    const wellcomePromt = <h2 className={styles.wellcome}>Wellcome {props.username}</h2>
    const failPromt = <h2 className={styles.nooo}>Please login to continue</h2>
    return (props.isLoggedIn ? wellcomePromt : failPromt )
}
UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "No Sleep"
}
export default UserGreeting