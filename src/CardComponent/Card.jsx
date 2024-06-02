function Card() {

    const imgSrc = "https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/439586236_3664752570520746_2486317449040107640_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ecf3nIAS69AQ7kNvgG_vvwz&_nc_ht=scontent.fhan18-1.fna&oh=00_AYB3zfJdjSMnDFlIXD8_K7RP1nS7XJr2OYaLawMorBwOgg&oe=665FA082"
    return (
        <div className="card">
            <img src={imgSrc} alt="" className="card-img" />
            <h2 className="card-title">Alpaca</h2>
            <p className="card-description">Listen to music</p>
        </div>
    )
}

export default Card