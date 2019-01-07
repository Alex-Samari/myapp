import React, {Component} from 'react';

class AddNinja extends Component{
    state = {
        fName: null,
        lName: null,
        age: null
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit = (event) => {
        //  preventing default submit behavior (i.e. refresh page)
        event.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="fName">First Name:</label>
                    <input type="text" id="fName" onChange={this.handleChange}/>
                    <br/>
                    <label htmlFor="lName">Last Name:</label>
                    <input type="text" id="lName" onChange={this.handleChange}/>
                    <br/>
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange}/>
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja;