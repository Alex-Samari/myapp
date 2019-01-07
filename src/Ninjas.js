import React from 'react';

//  passing the 'ninjas' props from App.js and assigning it to 'Ninjas' const
const Ninjas = ({ninjas, delNinja}) => {

    //  mapping allows us to duplicate an array
    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 20 ? (
            //  we need to define the key for the surrounding element so that react knows which element to update/delete
                //  later on when we access differnt elements in the ninjas array
                <div className='ninja' key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    {/* we surround the delNinja function in an anonymous function otherwise the delete function always runs when the page loades
                    this behaviour happens because we are passing the ninja.id in paranthesis to the delNinja function */}
                    <button onClick={() => {delNinja(ninja.id)}}>Delete Ninja</button>
                    <hr/>
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