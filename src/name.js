import {Component} from "react"

export class Name extends Component {

    constructor() {
    super()

        this.state = {
            Name: "Mike",
            Age: 30
        }
    }

    nextName() {
        this.setState( {Name: "Leopold  Иван Иванович", Age: 45} )
    }


    render() {
        return(
            <div>
                <h1>ПРИВЕТ, {this.state.Name}</h1>
                <h2>МНЕ {this.state.Age} лет</h2>
                <button onClick={ () => this.nextName() }>BTN</button>
            </div>
        )
    }



}