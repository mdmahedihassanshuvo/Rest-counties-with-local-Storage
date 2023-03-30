import React from 'react';

const Country = (props) => {
    const { flags, name, capital } = props.country
    const addToCart = props.AddToCart

    return (
        <div className='border-2 rounded-xl border-teal-500 bg-emerald-500 text-center'>
            <img className='w-64 h-44 p-2 rounded-xl mx-auto' src={flags.png} alt="" />
            <div className='mt-3 mb-3'>
                <h2 className='text-xl font-semibold'>Name: {name.common}</h2>
                <p>Capital: {capital}</p>
            </div>
            <button onClick={()=>addToCart(props.country)} className="btn btn-active btn-primary hover:bg-orange-600 hover:text-black mb-3">Button</button>
        </div>
    );
};

export default Country;
