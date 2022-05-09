function Znak(props) {
    return(
        <div>
            <img src={props.foto} alt="foto" width="250px" />
            <h1>{props.name}</h1>
            <p>{props.year}</p>
            <p>{props.old}</p>
        </div>
    )
}

export default Znak