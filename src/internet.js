function IntMag(props) {
    return(
        <div>
            <img src={props.foto} alt="foto" width="250px"/>
            <h1>{props.naimen}</h1>
            <p>{props.prise}</p>
            <p>{props.marka}</p>
        </div>
    )
}

export default IntMag