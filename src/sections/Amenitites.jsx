import React from 'react'
import { Link } from 'react-router-dom'

const Amenitites = () => {
    return (
        <section id='amenities'>
            <h1 className='text-2xl text-center pb-10'>Add Amenitites Here</h1>
            <button className='btn btn-primary' onClick={() => window.scrollTo(0, 0)}>
                <Link to="/amenities">View All Amenities in detail.</Link>
            </button>

        </section>
    )
}

export default Amenitites