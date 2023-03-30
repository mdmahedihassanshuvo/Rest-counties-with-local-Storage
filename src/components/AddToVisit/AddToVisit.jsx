import React from 'react';
import UiCountry from '../UiCountry/UiCountry';

const AddToVisit = ({ visit }) => {
    let goToVisit = []
    let quantity = 0
    for (const name of visit) {
        quantity += name.quantity
        goToVisit.push(name)
    }
    return (
        <div className='text-center mt-3'>
            <div>
                <p>Total-Quantity: {quantity}</p>
            </div>
            <ul className='text-left p-4 ml-2'>
                {
                    goToVisit.map((country, index) => <UiCountry country={country} index={index}></UiCountry>)
                }
            </ul>
        </div>
    );
};

export default AddToVisit;