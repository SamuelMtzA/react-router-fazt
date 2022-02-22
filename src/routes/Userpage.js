import React from 'react'
import { useParams } from 'react-router-dom'

export const Userpage = () => {

    const { id } = useParams()
    console.log(id)
    return (
        <div>
            user <h1>{id}</h1>
        </div>
    )
}
