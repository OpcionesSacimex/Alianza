import React from 'react'
import { Navigate, useOutlet } from 'react-router-dom';

const HomeLayout = () => {
    const outlet = useOutlet();

    return (
        <div>
            {outlet}
        </div>
    )
}

export default HomeLayout
