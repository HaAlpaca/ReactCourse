import PropTypes from 'prop-types'
import styles from './List.module.css'
function List(props) {
    // const fruits = [
    //     {id:1,name: "banana",calories: 12},
    //     {id:2,name: "orange",calories:22},
    //     {id:3,name:"coconut",calories:33},
    //     {id:4,name:"apple",calories:99},
    //     {id:5,name:"pineapple",calories: 55}
    // ]
    const fruits = props.items
    // fruits.sort((a,b) => a.name.localeCompare(b.name))
    // fruits.sort((a,b) => a.calories - b.calories)

    const filtering = fruits.filter(fruit => fruit.calories <49)
    const listitem = filtering.map((fruit) => <li key={fruit.id}>{fruit.name} :{fruit.calories}</li>)
    return (
        <>
        <h3 className={styles.category}>{props.category}</h3>
        <ol className={styles.listitem}>
            {listitem}
        </ol>
        </>
        
    )
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number,
            name: PropTypes.string,
            calories: PropTypes.number
        }
    )
    ),
    category: PropTypes.string
}

export default List