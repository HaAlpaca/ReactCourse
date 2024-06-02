import styles from './props.module.css'
import PropTypes from 'prop-types'
function Student(props) {
    return (
        <div className={styles.student}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes": "Noooo"}</p>
        </div>
    )
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name: "hahaha",
    age: 21,
    isStudent: false,
}
export default Student