import React, { useEffect, useState } from 'react';
import { addToDb, getVisitList } from '../../utilities/fakedb';
import AddToVisit from '../AddToVisit/AddToVisit';
import Country from '../Country/Country';

const Countries = () => {

    const [countries, setCountries] = useState([])
    const [visit, setVisit] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    useEffect(()=>{
        const saveVisit = getVisitList()
        // console.log(saveVisit)
        const saveVisitList = []
        for(const name in saveVisit){
            // console.log(name)
            const matchName = countries.find(item => item.name.common === name)
            if(matchName){
                const quantity = saveVisit[name]
                const passList = {name: matchName.name.common, quantity: quantity}
                saveVisitList.push(passList)
            }
        }
        setVisit(saveVisitList)
    }, [countries])

    
    // add to visit......................
    const addToCart = (likeToVisit) => {
        const countryName = likeToVisit.name.common
        let saveList = []
        const nun = visit.find(item => item.name === countryName)
        if(nun){
            nun.quantity += 1
            const rest = visit.filter(item => item.name !== countryName)
            saveList = [...rest, nun]
        }
        else{
            const newList = {name: countryName, quantity: 1}
            saveList = [...visit, newList]
        }
        setVisit(saveList)
        addToDb(countryName)
    }

    return (
        <div className='grid grid-cols-5 gap-9 ml-20 mr-9 mt-16 relative'>
            <div className='col-span-4 grid grid-cols-3 gap-5'>
                {
                    countries.map(country => <Country key={country.cca2} country={country} AddToCart={addToCart}></Country>)
                }
            </div>
            <div className='bg-amber-600 rounded-2xl h-96 sticky top-16'>
                <h2 className='text-xl font-semibold text-black text-center mt-3 mb-3'>Add to visit</h2> <hr />
                <AddToVisit visit={visit}></AddToVisit>
            </div>
        </div>
    );
};

export default Countries;
















// const addToCart = (likeToVisit) => {
//     // console.log(likeToVisit)
//     const sortName = likeToVisit.name.common
//     const nun = visit.find(item => item.name === sortName)
//     if(nun){
//         nun.quantity = nun.quantity + 1
//         const rest = visit.filter(item => item.name !== sortName)
//         setVisit([...rest, nun])
//     }
//     else{
//         const newVisit = {name: sortName, quantity: 1}
//         setVisit([...visit, newVisit])
//     }
//     // const visitList = [...visit, sortName]
//     // console.log(visitList)
//     // setVisit(visitList)
// }







// useEffect(()=>{
//         const newList = []
//         const storedList = getShoppingCart()
//         console.log(storedList)
//         for(const countryName in storedList){
//             // console.log(countryName)
//             const previousList = countries.map(item => item.name.common === countryName)
//             if(previousList){
//                 const quantity = storedList[id]
//                 previousList.quantity = quantity

//             }
//         }
//     }, [visit])