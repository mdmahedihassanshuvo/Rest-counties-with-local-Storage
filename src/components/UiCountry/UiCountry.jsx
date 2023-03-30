import React from 'react';

const UiCountry = ({ country, index }) => {
    return (
        <li>{index + 1} {country.name}:{country.quantity}x</li>
    );
};

export default UiCountry;