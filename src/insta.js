function Instagram(props) {
    return(

        <div>
        <h1>{props.blog}</h1>
        <p>{props.post}</p>
        <p>{props.followers}</p>
        <p>{props.following}</p>
        </div>
    )
}

export default Instagram