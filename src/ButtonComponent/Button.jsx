import styles from './Button.module.css'
function Button() {
    const handleClick = (e) => e.target.textContent = "OUCHHHH";
    return (<button onClick={handleClick} className={styles.btn}>Click Me 🤣 </button>)
}

export default Button