function Food() {
    const foods = [
        "Orange","Lemon","Banana"
    ]

    let list = []

    foods.forEach((food,index) => {
        list.push(<li key={index}>{food}</li>)
    })
    return(
        <div>
            <p>List of foods</p>
            <br></br>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default Food