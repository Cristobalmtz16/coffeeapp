import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Coffee from '../components/Coffee'
import { getAllCoffees } from '../actions/coffeeActions'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Filter from '../components/Filter'


export default function Homescreen() {

    const dispatch = useDispatch()

    const coffeesstate = useSelector(state => state.getAllCoffeesReducer)

    const { coffees, error, loading } = coffeesstate

    useEffect(() => {
        dispatch(getAllCoffees())

    }, [])


    return (
        <div className='orderBg'>
            <Filter />
            <div className="row justify-content-center">




                {loading ? (
                    <Loading />
                ) : error ? (
                    <Error error='Something Went Wrong' />
                ) : (
                    coffees.map(coffee => {

                        return <div className="col-md-4">
                            <div>
                                <Coffee coffee={coffee} />
                            </div>

                        </div>
                    })

                )}


              
            </div>

        </div>
    )
}