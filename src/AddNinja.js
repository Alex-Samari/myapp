import React, {Component} from 'react';

class AddNinja extends Component{
    state = {
        name: null,
        age: null,
        belt: null
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit = (event) => {
        //  preventing default submit behavior (i.e. refresh page)
        event.preventDefault();
        this.props.addNinja(this.state);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    &nbsp;
                    <label htmlFor="age">Age: </label>
                    <input type="text" id="age" onChange={this.handleChange}/>
                    &nbsp;
                    <label htmlFor="belt">Belt: </label>
                    <input type="text" id="belt" onChange={this.handleChange}/>
                    &emsp;
                    <button>Submit</button>
                    <hr/>
                </form>
            </div>
        )
    }
}

export default AddNinja;