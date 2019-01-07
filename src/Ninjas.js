import React from 'react';

//  passing the 'ninjas' props from App.js and assigning it to 'Ninjas' const
const Ninjas = ({ninjas}) => {

    //  mapping allows us to duplicate an array
    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 22 ? (
            //  we need to define the key for the surrounding element so that react knows which element to update/delete
                //  later on when we access differnt elements in the ninjas array
                <div className='ninja' key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    <br></br>
                </div>
        ) : null;
    });
    return (
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
}

export default Ninjas;