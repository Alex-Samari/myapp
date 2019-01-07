import React, { Component } from 'react';

class Ninjas extends Component {
    render() {
        //  console.log(this.props);
        //  destructuring properties
        const { ninjas } = this.props;
        //  alternative method
        //  const ninjas = this.props.ninjas;
        //  mapping allows us to duplicate an array
        const ninjaList = ninjas.map(ninja => {
            return (
                //  we need to define the key for the surrounding element so that react knows which element to update/delete
                //  later on when we access differnt elements in the ninjas array
                <div className='ninja' key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    <br></br>
                </div>
            )
        })
        return (
            <div className="ninja-list">
                {ninjaList}
            </div>
        )
    }
}

export default Ninjas;